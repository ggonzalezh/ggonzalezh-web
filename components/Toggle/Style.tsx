import styled from 'styled-components'

export const SwitchContainer = styled.div`
   {
    text-align-last: end;
  }
  .ant-switch {
    width: 5.5em;
    height: 2.5em;
    margin-top: 2.5em;
    margin-right: 2.5em;
    margin-left: 2.5em;
    background-color: rgb(89, 93, 222);
  }
  .ant-switch-checked {
    background-color: rgb(128, 199, 203);
  }
  .ant-switch-handle::before {
    display: none;
    transition: none;
  }
`
