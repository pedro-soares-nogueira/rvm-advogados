import { StatusBar } from "expo-status-bar";
import {
  Raleway_100Thin,
  Raleway_200ExtraLight,
  Raleway_300Light,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold,
  Raleway_800ExtraBold,
  Raleway_900Black,
  useFonts,
} from "@expo-google-fonts/raleway";
import { NativeBaseProvider, Box, Center } from "native-base";
import { Loading } from "./app/components/Loading";
import { Routes } from "./app/routes";
import { Home } from "./app/screens/Home";
import { AuthContextProvider } from "./app/contexts/authContext";
import { Provider } from "react-redux";
import { store } from "./app/reducers/store";

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Raleway_100Thin,
    Raleway_200ExtraLight,
    Raleway_300Light,
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Raleway_800ExtraBold,
    Raleway_900Black,
  });
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <NativeBaseProvider>
          {hasLoadedFonts ? (
            <Routes />
          ) : (
            <Center flex={1}>
              <Loading />
            </Center>
          )}
          <StatusBar style="light" backgroundColor="black" translucent />
        </NativeBaseProvider>
      </AuthContextProvider>
    </Provider>
  );
}
