import React, { useState } from "react";
import { Switch } from "antd";
import { SwitchContainer } from "./Theme";

export const Toggle = ({ checkedValue, uncheckedValue, handleFunction }) => {
  const [isChecked, setChecked] = useState(true);
  return (
    <SwitchContainer>
      <Switch
        checkedChildren={checkedValue}
        unCheckedChildren={uncheckedValue}
        checked={isChecked}
        onClick={() => setChecked(!isChecked)}
        onChange={() => handleFunction()}
        size={"default"}
      />
    </SwitchContainer>
  );
};
