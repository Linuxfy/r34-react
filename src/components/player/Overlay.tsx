import React, { MouseEventHandler, useCallback, useMemo } from 'react'

import { ExpandIcon, PlayIcon, PauseIcon, ExternalLinkIcon, CloseIcon } from '../../icons/Icons'
import styled, { css } from 'styled-components'
import useToggle from '../../hooks/useToggle'
import { fadeOut } from '../styled/animations'
import { InvisButton } from '../common/Buttons'
import { NO_OP } from '../../data/types'
import { formatDuration } from '../../misc/formatting'
import { useDispatch, useSelector } from 'react-redux'
import { selectFullsceenState, selectPosts } from '../../redux/selectors'
import { enterFullscreen, exitFullscreen, setFullScreenPost } from '../../redux/actions'

const Wrapper = styled.div(
  (props: { isVisible: boolean }) => css`
    grid-area: 1/1/2/2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto auto;
    z-index: 1;

    ${!props.isVisible
      ? css`
          opacity: 0;
          animation: ${fadeOut} 0.4s ease-in-out;
        `
      : ''};
  `
)

const ProgressBar = styled.div(
  (props) => css`
    grid-area: 4/1/4/4;
    height: 5px;
    background-color: ${props.theme.colors.accentColor};
  `
)

const OverlayButton = styled(InvisButton)(
  (props) => css`
    width: max-content;
    height: max-content;
    padding: ${props.theme.dimensions.bigSpacing};
  `
)

const FullScreenButton = styled(OverlayButton)`
  grid-area: 1/1/2/2;
  place-self: start start;
`

const OpenExternalButton = styled(OverlayButton)`
  grid-area: 3/1/4/1;
  place-self: end start;
`

const PlayButton = styled(OverlayButton)`
  grid-area: 2/2/3/3;
  place-self: center center;
`

const PreviousButton = styled.div`
  grid-area: 2/1/3/2;
`

const NextButton = styled.div`
  grid-area: 2/3/3/4;
`

const LengthDisplay = styled.span(
  (props) => css`
    grid-area: 3/3/4/4;
    place-self: end end;
    background: #00000080;
    border-radius: 4px;
    padding: ${props.theme.dimensions.gutter};
    margin: ${props.theme.dimensions.gutter};
  `
)

interface OverlayProps {
  postId: number
  externalSrc: string
  togglePlay?: MouseEventHandler
  isPaused?: boolean
  isPlayable: boolean
  currentTime?: number
  duration?: number
  mediaRef?: HTMLVideoElement | null
}

function Overlay(props: OverlayProps) {
  const {
    togglePlay = NO_OP,
    isPaused = true,
    isPlayable = false,
    currentTime = 0,
    duration = null,
    externalSrc,
    mediaRef,
    postId,
  } = props

  const posts = useSelector(selectPosts)
  const [isVisible, toggleVisible] = useToggle()
  const isReaderOpen = useSelector(selectFullsceenState)

  const dispatch = useDispatch()
  const onExpandClick: MouseEventHandler = useCallback(
    (event) => {
      event.preventDefault()
      event.stopPropagation()
      if (isReaderOpen) {
        dispatch(exitFullscreen())
      } else {
        dispatch(enterFullscreen(postId))
      }
    },
    [dispatch, isReaderOpen, postId]
  )

  const selectedIndex = useMemo(() => posts.findIndex((post) => post.id === postId), [postId, posts])

  const selectPostAt = useCallback(
    (index: number) => {
      const postAtindex = posts[index]

      if (postAtindex) {
        dispatch(setFullScreenPost(postAtindex.id))
      }
    },
    [dispatch, posts]
  )

  const hasNext = selectedIndex + 1 < posts.length
  const selectNext = useCallback(() => {
    selectPostAt(selectedIndex + 1)
  }, [selectPostAt, selectedIndex])

  const hasPrevious = selectedIndex > 0
  const selectPrevious = useCallback(() => {
    selectPostAt(selectedIndex - 1)
  }, [selectPostAt, selectedIndex])

  return (
    <Wrapper isVisible={isPaused || isVisible} onClick={toggleVisible}>
      <FullScreenButton onClick={onExpandClick} aria-label='Open Fullscreen'>
        {isReaderOpen ? <CloseIcon color='white' /> : <ExpandIcon color='white' />}
      </FullScreenButton>

      <OpenExternalButton>
        <a href={externalSrc} target='_blank' rel='noopener noreferrer' aria-label='Open In New Tab'>
          <ExternalLinkIcon color='white' />
        </a>
      </OpenExternalButton>

      {isPlayable && (
        <>
          <PlayButton onClick={togglePlay} aria-label='Play/Pause'>
            {isPaused ? <PlayIcon color='white' size={50} /> : <PauseIcon color='white' size={50} />}
          </PlayButton>
          {!!duration && !!currentTime && <ProgressBar style={{ width: `${(currentTime / duration) * 100}%` }} />}

          {mediaRef && !isNaN(mediaRef.duration) && <LengthDisplay>{formatDuration(mediaRef.duration)}</LengthDisplay>}
          {externalSrc.includes('.gif') && <LengthDisplay>gif</LengthDisplay>}
        </>
      )}

      {isReaderOpen && hasPrevious && <PreviousButton onClick={selectPrevious}></PreviousButton>}
      {isReaderOpen && hasNext && <NextButton onClick={selectNext}></NextButton>}
    </Wrapper>
  )
}

export default Overlay
