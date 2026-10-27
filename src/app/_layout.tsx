import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function AppLayout(){

  return (
    <SafeAreaView style={{ flex : 1}}>
      <StatusBar barStyle="dark-content" />
      <Slot />
    </SafeAreaView>
  );
}