import React, { RefAttributes } from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'
import styled, { css, ThemeProps } from 'styled-components'
import { RouteName } from '../../data/types'
import R34Icon from '../../icons/R34Icon'
import { flexColum } from '../../styled/mixins'
import { VerticalLine } from '../common/Lines'
import { BigTitle } from '../common/Text'

const HeaderWrapper = styled.header(
  ({ theme }) => css`
    ${flexColum()}
    gap: ${theme.dimensions.bigSpacing};
  `
)

const TitleBar = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.dimensions.bigSpacing};
    align-items: center;
    justify-content: center;
    background: ${theme.colors.layerBgSolid};
    padding: ${theme.dimensions.gutter} 0;
    ${theme.shadow.box};
  `
)

const MenuBar = styled.nav(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: ${theme.dimensions.bigSpacing};
    gap: ${theme.dimensions.hugeSpacing};
  `
)

type LocationStyledLinkProps = LinkProps<unknown> &
  RefAttributes<HTMLAnchorElement> &
  ThemeProps<any> & { current: string }

const LocationStyledLink = styled(Link)(
  ({ to, current, theme }: LocationStyledLinkProps) => css`
    color: ${to === current ? theme.colors.accentColor : theme.colors.backgroundColor2};
  `
)

export default function Header() {
  const current = useLocation().pathname

  return (
    <HeaderWrapper role='cell'>
      <TitleBar>
        <R34Icon size={32} />
        <VerticalLine />
        <BigTitle>
          <span>Browse</span> <a href='https://rule34.xxx'>Rule34</a>
        </BigTitle>
      </TitleBar>

      <MenuBar role='cell'>
        <LocationStyledLink current={current} to={RouteName.SEARCH}>
          Search
        </LocationStyledLink>
        <VerticalLine />
        <LocationStyledLink current={current} to={RouteName.HELP}>
          Help
        </LocationStyledLink>
        <VerticalLine />
        <LocationStyledLink current={current} to={RouteName.SETTINGS}>
          Settings
        </LocationStyledLink>
      </MenuBar>
    </HeaderWrapper>
  )
}
