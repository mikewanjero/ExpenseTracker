import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";

export default function ExpenseForm() {
  function changeAmount() {}

  return (
    <View style={styles.form}>
      <Text style={styles.text}>New Expense</Text>
      <View style={styles.row}>
        <Input
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: changeAmount,
          }}
          style={styles.rowInput}
        />
        <Input
          label={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: () => {},
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
          // autoCorrect: false, //default is true
          // autoCapitalize: 'sentences', //default is sentences
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginVertical: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
