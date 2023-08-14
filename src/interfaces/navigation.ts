import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamsList = {
  HomeNavigation : BottomTabNavigationProp<HomeNavigationParamsList>,
  MovemenHistory : undefined,
  ChangePoints : undefined
};

export type HomeNavigationParamsList = {
  Home : undefined,
  Beneficios : undefined,
  Cartera : undefined,
  Cuenta : undefined
}
