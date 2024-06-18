import { Pressable, View, Text, StyleSheet } from "react-native";
import Constants from "./../constants/styles";

export default function CustomButton({ children, onButtonPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onButtonPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, (mode = "flat" && styles.flatText)]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: Constants.colors.primary500,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  flatText: {
    color: Constants.colors.primary100,
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Constants.colors.primary100,
    borderRadius: 4,
  },
});
