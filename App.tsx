import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.topBar}>
        <Text style={styles.topBarText}>My Health</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  topBar: {
    paddingVertical: 24,
    width: "100%",
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  topBarText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
