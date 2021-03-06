import React, { useCallback } from 'react'
import styled, { css, useTheme } from 'styled-components'
import { ResultLayout, PreferenceKey } from '../../data/types'
import usePreference from '../../hooks/usePreference'
import { CodeBranchIcon } from '../../icons/Icons'
import { BlockButton } from '../common/Buttons'
import FlexColumn, { FlexColumnWithSpacing } from '../common/FlexColumn'
import { HorizontalLine } from '../common/Lines'
import Select from '../common/Select'
import Setting from '../common/Setting'
import { SmallNumberInput } from '../common/SmallInput'
import Surface from '../common/Surface'
import { Faded, Title } from '../common/Text'
import Toggle from '../common/Toggle'
import Header from '../features/Header'

const layouts = {
  [ResultLayout.INFINITE_COLUMN]: 'Infinite',
  [ResultLayout.PAGES]: 'Pages',
}

const SettingsSurface = styled(Surface)(
  ({ theme }) => css`
    padding: ${theme.dimensions.hugeSpacing};
    gap: ${theme.dimensions.hugeSpacing};
  `
)

const VersionWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 50px;
`

const SettingsColumn = styled(FlexColumnWithSpacing)`
  flex-grow: 1;
`

export default function Settings() {
  const [resultsLayout, setResultsLayout] = usePreference(PreferenceKey.RESULTS_LAYOUT)
  const [pageSize, setPageSize] = usePreference(PreferenceKey.PAGE_SIZE)
  const [originals, setOriginals] = usePreference(PreferenceKey.ORIGINALS)
  const [preloadVideos, setPreloadVideos] = usePreference(PreferenceKey.PRELOAD_VIDEOS)
  const [tagSuggestionsCount, setTagSuggestionsCount] = usePreference(PreferenceKey.TAG_SUGGESTIONS_COUNT)

  const togglePreloadVideos = useCallback(() => setPreloadVideos(!preloadVideos), [preloadVideos, setPreloadVideos])
  const toggleOriginals = useCallback(() => setOriginals(!originals), [originals, setOriginals])

  const onChangeResultsLayout = useCallback((event) => setResultsLayout(event.target.value), [setResultsLayout])

  const reset = useCallback(() => {
    localStorage.clear()
    window.location.reload()
  }, [])

  return (
    <FlexColumn>
      <Header />
      <SettingsColumn>
        <SettingsSurface>
          <Title>General</Title>
          <HorizontalLine />
          <Setting title='Results Layout' description='Choose how your results are displayed.'>
            <Select options={layouts} value={resultsLayout} onChange={onChangeResultsLayout} />
          </Setting>

          <Setting
            title='Preload Videos'
            description='Start loading videos immediately instead of just-in-time. This can improve the viewing experience but will consume a LOT of data. Only use with WIFI.'
          >
            <Toggle value={preloadVideos} onToggle={togglePreloadVideos} />
          </Setting>

          <Setting
            title='Load original sizes'
            description='Display images and videos at their original resolution. This will consume more data but provides a nicer experience.'
          >
            <Toggle value={originals} onToggle={toggleOriginals} />
          </Setting>
          <Setting
            title='Number of Tag suggestions'
            description='Controls the number of tags displayed when searching. Increase this when searching for niche tags.'
          >
            <SmallNumberInput value={tagSuggestionsCount} onSubmit={setTagSuggestionsCount} />
          </Setting>
          <Setting title='Page size' description='Controls the number of posts loaded at once.'>
            <SmallNumberInput value={pageSize} onSubmit={setPageSize} />
          </Setting>
          <Title>Developer</Title>
          <HorizontalLine />
          <BlockButton onClick={reset}>Reset Application</BlockButton>
        </SettingsSurface>
        <VersionWrapper>
          <CodeBranchIcon color={useTheme().colors.subduedText} />
          <Faded>Version 2.3.3</Faded>
        </VersionWrapper>
      </SettingsColumn>
    </FlexColumn>
  )
}
