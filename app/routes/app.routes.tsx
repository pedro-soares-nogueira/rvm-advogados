import {
  BottomTabBarButtonProps,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { AboutUs } from "../screens/AboutUs";
import { Schedules } from "../screens/Schedules";
import { Profile } from "../screens/Profile";
import {
  Buildings,
  Calendar,
  House,
  User,
  Users,
  WhatsappLogo,
} from "phosphor-react-native";
import { Platform } from "react-native";

type AppRoutes = {
  home: undefined;
  aboutUs: undefined;
  schedules: undefined;
  profile: undefined;
  whatsapp: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#826B12",
        tabBarStyle: {
          paddingBottom: 20,
          paddingTop: 20,
          height: 58,
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <House color={color} size={34} />;
          },
        }}
      ></Screen>

      <Screen
        name="aboutUs"
        component={AboutUs}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Buildings color={color} size={34} />;
          },
        }}
      ></Screen>

      <Screen
        name="schedules"
        component={Schedules}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Calendar color={color} size={34} />;
          },
        }}
      ></Screen>

      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <User color={color} size={34} />;
          },
        }}
      ></Screen>

      <Screen
        name="whatsapp"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <WhatsappLogo color={color} size={34} />;
          },
        }}
      ></Screen>
    </Navigator>
  );
};
