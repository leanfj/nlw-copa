import { NativeBaseProvider, Center, Text, StatusBar } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { THEME } from "./src/styles/themes";
import { Loading } from "./src/components/Loading";
import { SigIn } from "./src/screens/SigIn";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
      {fontsLoaded ? <SigIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
