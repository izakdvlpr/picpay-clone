import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PayButton from "../components/PayButton";

import HomeScreen from "../screens/Home";
import WalletScreen from "../screens/Wallet";
import PayScreen from "../screens/Pay";

const { Navigator, Screen } = createBottomTabNavigator();

const icons: any = {
  Home: {
    lib: AntDesign,
    name: "home",
  },
  Wallet: {
    lib: AntDesign,
    name: "creditcard",
  },
  Pay: {
    lib: AntDesign,
    name: "home",
  },
  Notifications: {
    lib: Ionicons,
    name: "ios-notifications-outline",
  },
  Settings: {
    lib: AntDesign,
    name: "setting",
  },
};

const Tabs = () => {
  return (
    <Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const { lib: Icon, name } = icons[String(route.name)];

          if (route.name === "Pay") {
            return (
              <PayButton
                onPress={() => navigation.navigate("Pay")}
                focused={focused}
              />
            );
          }

          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#131418",
          borderTopColor: "rgba(255, 255, 255, 0.2)",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c",
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Início" }}
      />
      <Screen
        name="Wallet"
        component={WalletScreen}
        options={{ title: "Carteira" }}
      />
      <Screen name="Pay" component={PayScreen} options={{ title: "" }} />
      <Screen
        name="Notifications"
        component={PayScreen}
        options={{ title: "Notificações" }}
      />
      <Screen
        name="Settings"
        component={PayScreen}
        options={{ title: "Ajustes" }}
      />
    </Navigator>
  );
};

export default Tabs;
