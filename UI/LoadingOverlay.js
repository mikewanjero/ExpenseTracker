import { View, ActivityIndicator, StyleSheet } from "react-native";
import Constants from "./../constants/styles";

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Constants.colors.primary700,
  },
});
