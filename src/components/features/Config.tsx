import React from 'react'
import styled from 'styled-components'
import TagSelector from '../tagSelector/TagSelector'
import Options from './Options'
import { Title } from '../common/Text'
import Surface from '../common/Surface'
import SearchButton from './SearchButton'
import ActiveTags from './ActiveTags'
import { flexColum, gutter, centeredMaxWidth } from '../../styled/mixins'

const ConfigWrapper = styled.section`
  ${flexColum}
  ${gutter}
  ${centeredMaxWidth}
`

export default function Config(props: { onLoad: () => void }) {
  const { onLoad } = props

  return (
    <ConfigWrapper>
      <Title>
        <label htmlFor='tag-input'>Search</label>
      </Title>
      <Surface>
        <TagSelector />
        <ActiveTags onChange={onLoad} />
        <Options />
        <SearchButton />
      </Surface>
    </ConfigWrapper>
  )
}
