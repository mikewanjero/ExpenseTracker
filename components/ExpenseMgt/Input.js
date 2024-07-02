import { View, Text, TextInput, StyleSheet } from "react-native";
import Constants from "./../../constants/styles";

export default function Input({ label, style, textInputConfig, invalid }) {
  // Allowing style array to have more than one style
  const inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  //Adding an item to the list if the last one typed was previously invalid.
  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput {...textInputConfig} style={inputStyles} />
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
  invalidLabel: {
    color: Constants.colors.error500,
  },
  invalidInput: {
    backgroundColor: Constants.colors.error50,
  },
});
