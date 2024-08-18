import { SafeAreaView, StatusBar, Text } from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center",  backgroundColor: "#f1cd55" }}>
      <StatusBar
        backgroundColor="#00000000"
        translucent
        barStyle="dark-content"
      />
      <Text style={{ fontSize: 24, color: "#fbfdfd" }}>Salve</Text>
    </SafeAreaView>
  )
}