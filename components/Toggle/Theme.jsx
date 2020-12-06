import styled from "styled-components";

export const SwitchContainer = styled.div`
  .ant-switch {
    width: 5.5em;
    height: 2.5em;
    margin: 1.5em;
    float: right;
    background-color: rgb(89, 93, 222);
  }
  .ant-switch-checked {
    background-color: rgb(128, 199, 203);
  }
  .ant-switch-handle::before {
    display: none;
    transition: none;
  }
`;
