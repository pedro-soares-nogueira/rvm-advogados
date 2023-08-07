import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { AboutUs } from "../screens/AboutUs";
import { Schedules } from "../screens/Schedules";
import { Profile } from "../screens/Profile";

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <Navigator>
      <Screen name="home" component={Home}></Screen>
      <Screen name="aboutUs" component={AboutUs}></Screen>
      <Screen name="schedules" component={Schedules}></Screen>
      <Screen name="profile" component={Profile}></Screen>
    </Navigator>
  );
};
