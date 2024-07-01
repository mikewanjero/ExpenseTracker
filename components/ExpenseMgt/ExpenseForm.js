import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import { useState } from "react";

export default function ExpenseForm() {
  const [inputs, setInputs] = useState({
    amount: "",
    date: "",
    title: "",
  });

  function changeInput(inputIdentifier, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  return (
    <View style={styles.form}>
      <Text style={styles.text}>New Expense</Text>
      <View style={styles.row}>
        <Input
          label={"Amount"}
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: changeInput.bind(this, "amount"),
            value: inputs.amount,
          }}
          style={styles.rowInput}
        />
        <Input
          label={"Date"}
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: changeInput.bind(this, "date"),
            value: inputs.date,
          }}
          style={styles.rowInput}
        />
      </View>
      <Input
        label={"Title"}
        textInputConfig={{
          multiline: true,
          onChangeText: changeInput.bind(this, "title"),
          value: inputs.title,
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
