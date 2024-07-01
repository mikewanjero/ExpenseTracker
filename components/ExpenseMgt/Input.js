import { View, Text, TextInput, StyleSheet } from "react-native";
import Constants from "./../../constants/styles";

export default function Input({ label, style, textInputConfig }) {
  // Allowing style array to have more than one style
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput {...textInputConfig} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 16,
  },
  label: {
    fontSize: 12,
    color: Constants.colors.primary100,
    marginBottom: 4,
  },
  input: {
    color: Constants.colors.primary700,
    backgroundColor: Constants.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
