import React, { useState } from "react";
import { Switch } from "antd";
import { SwitchContainer } from "./Theme";
import sun from "../../multimedia/sun.svg";
import moon from "../../multimedia/moon.svg";

export const Toggle = ({ checkedValue, uncheckedValue, handleFunction }) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <SwitchContainer>
      <Switch
        checkedChildren={
          <img style={{ width: "2.5em", float: "left" }} src={sun}></img>
        }
        unCheckedChildren={
          <img style={{ width: "2.2em", float: "right" }} src={moon}></img>
        }
        checked={isChecked}
        onClick={() => setChecked(!isChecked)}
        onChange={() => handleFunction()}
      />
    </SwitchContainer>
  );
};
