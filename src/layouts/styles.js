import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const SkipToContentLink = styled.a`
  position: absolute;
  top: auto;
  left: -999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
  z-index: -99;
  &:focus,
  &:active {
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    padding: 18px 23px;
    outline: 0;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.bg.default};
    color: ${(props) => props.theme.text.default};
    font-family: ${(props) => props.theme.fontFamily.fontMono};
    font-size: ${(props) => props.theme.fontSize.sm};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    overflow: auto;
    transition: ${(props) => props.theme.transitions.default};
    z-index: 99;
  }
`;
