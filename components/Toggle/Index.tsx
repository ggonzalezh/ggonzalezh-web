import React, { useState } from "react";
import { Switch } from "antd";
import { SwitchContainer } from "./Style";

export const Toggle = ({ checkedValue, uncheckedValue, handleFunction }) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <SwitchContainer>
      <Switch
        checkedChildren={checkedValue}
        unCheckedChildren={uncheckedValue}
        checked={isChecked}
        onClick={() => setChecked(!isChecked)}
        onChange={() => handleFunction()}
      />
    </SwitchContainer>
  );
};
