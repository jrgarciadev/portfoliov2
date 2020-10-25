import styled from 'styled-components';

export const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${(props) => props.theme.bg.reverse};
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: ${(props) => props.theme.fontFamily.mono};
    font-size: ${(props) => props.theme.fontSize.xs};
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;
    transition: ${(props) => props.theme.transitions.default};
    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;
