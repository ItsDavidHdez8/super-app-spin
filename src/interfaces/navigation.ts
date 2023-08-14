
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams } from "@react-navigation/native";
import { History } from "./history";

export type RootStackParamsList = {
  HomeNavigation : BottomTabNavigationProp<HomeNavigationParamsList>,
  MovemenHistory : undefined,
  ChangePoints : undefined,
  
  Balance: {id: number} | undefined;
  CreateAccount: {id: number} | undefined;
  Ticket : {movement : History}
}

export type HomeNavigationParamsList = {
  Home : {id: number} | undefined,
  Beneficios : undefined,
  Cartera : undefined,
  Cuenta : undefined
}
