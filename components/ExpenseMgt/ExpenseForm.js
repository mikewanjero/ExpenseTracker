import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "./Input";
import CustomButton from "../../UI/CustomButton";

export default function ExpenseForm({ onCancel, onSubmit, submitButtonLabel }) {
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

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount,
      date: new Date(inputs.date),
      title: inputs.title,
    };

    onSubmit(expenseData);
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
      <View style={styles.buttons}>
        <CustomButton
          style={styles.button}
          mode="flat"
          onButtonPress={onCancel}
        >
          Cancel
        </CustomButton>
        <CustomButton style={styles.button} onButtonPress={submitHandler}>
          {submitButtonLabel}
        </CustomButton>
      </View>
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

  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
