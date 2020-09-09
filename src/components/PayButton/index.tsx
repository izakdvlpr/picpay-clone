import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

import { Button, Label } from "./styles";

export interface IButton {
  focused: boolean;
  onPress?: () => void;
}

const PayButton: React.FC<IButton> = ({ onPress, focused }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Button
      colors={focused ? ["#fff", "#ccc"] : ["#00fc6c", "#00ac4a"]}
      start={[1, 0.2]}
    >
      <MaterialIcons
        name="attach-money"
        size={30}
        color={focused ? "#000" : "#fff"}
      />
      <Label focused={focused}>Pagar</Label>
    </Button>
  </TouchableWithoutFeedback>
);

export default PayButton;
