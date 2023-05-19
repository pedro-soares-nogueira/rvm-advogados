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
import { NativeBaseProvider, Box } from "native-base";
import { Loading } from "./app/components/Loading";
import { Routes } from "./app/routes";

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
    <NativeBaseProvider>
      {hasLoadedFonts ? <Routes /> : <Loading />}
      <StatusBar style="light" translucent />
    </NativeBaseProvider>
  );
}
