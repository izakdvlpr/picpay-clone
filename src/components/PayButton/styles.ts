import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import { IButton } from ".";

export const Button = styled(LinearGradient)`
  width: 60px;
  height: 60px;

  align-items: center;
  justify-content: center;

  border-radius: 30px;
`;

export const Label = styled.Text<IButton>`
  font-size: 12px;
  color: ${({ focused }) => (focused ? "#000" : "#fff")};
`;
