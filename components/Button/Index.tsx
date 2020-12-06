import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor};
`;

Button.defaultProps = {
  theme: {
    bg: "white",
    fontColor: "black",
  },
};
