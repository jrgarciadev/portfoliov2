import styled, { css } from 'styled-components';
import { NAV_SCROLL_HEIGHT, NAV_SCROLL_HEIGHT_MOBILE, NAV_HEIGHT } from '@lib/constants';
import { hexa } from '@utils';

export const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: ${NAV_HEIGHT}px;
  background-color: ${(props) => props.theme.bg.default};
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: ${(props) => props.theme.transitions.default};
  ${(props) =>
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
      height: ${NAV_SCROLL_HEIGHT}px;
      transform: translateY(0px);
      background-color: ${hexa(props.theme.bg.default, 0.5)};
      box-shadow: ${props.theme.shadows.default};
      @media (max-width: ${props.theme.breakpoints.sm}) {
        height: ${NAV_SCROLL_HEIGHT_MOBILE}px;
      }
    `};

  ${(props) =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
      height: ${NAV_SCROLL_HEIGHT};
      transform: translateY(calc(${NAV_SCROLL_HEIGHT}px * -1));
      box-shadow: ${props.theme.shadows.default};
      @media (max-width: ${props.theme.breakpoints.sm}) {
        height: ${NAV_SCROLL_HEIGHT_MOBILE}px;
      }
    `};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 0 40px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0 25px;
  }
`;

export const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: ${(props) => props.theme.text.default};
  font-family: ${(props) => props.theme.fontFamily.fontMono};
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: ${(props) => props.theme.text.default};
      width: 42px;
      height: 42px;

      &:hover,
      &:focus {
        svg {
          fill: white;
        }
      }

      svg {
        fill: none;
        transition: ${(props) => props.theme.transitions.default};
        user-select: none;
      }
    }
  }
`;

export const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: ${(props) => props.theme.fontSize.xs};

      a {
        padding: 10px;
        &:hover {
          color: ${(props) => props.theme.brand.primary};
        }
        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: ${(props) => props.theme.brand.primary};
          font-size: ${(props) => props.theme.fontSize.xs};
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: ${(props) => props.theme.fontSize.sm};
  }
`;
