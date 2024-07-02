import { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "./Input";
import CustomButton from "../../UI/CustomButton";
import { getFormattedDate } from "../../util/date";
import Constants from "./../../constants/styles";

export default function ExpenseForm({
  onCancel,
  onSubmit,
  submitButtonLabel,
  AddUpdateValues,
}) {
  //Keeps state so you can see values when you want to edit them, checks validity of values
  const [inputs, setInputs] = useState({
    amount: {
      value: AddUpdateValues ? AddUpdateValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: AddUpdateValues ? getFormattedDate(AddUpdateValues.date) : "",
      isValid: true,
    },
    title: {
      value: AddUpdateValues ? AddUpdateValues.title : "",
      isValid: true,
    },
  });

  function changeInput(inputIdentifier, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      title: inputs.title.value,
    };

    //Validation for all 3 input items
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const titleIsValid = expenseData.title.trim().length > 0;
    //Conditional checks for validation
    if (!amountIsValid || !dateIsValid || !titleIsValid) {
      //Reseting values to input again.
      setInputs((currentInputs) => {
        return {
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
          title: { value: currentInputs.title.value, isValid: titleIsValid },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  //Helper function to check if any of the inputs is invalid
  const formIsInvalid =
    !inputs.amount.isValid || !inputs.date.isValid || !inputs.title.isValid;

  return (
    <View style={styles.form}>
      <Text style={styles.text}>Your Expense</Text>
      <View style={styles.row}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: changeInput.bind(this, "amount"),
            value: inputs.amount.value,
          }}
          inValid={!inputs.date.isValid}
          style={styles.rowInput}
        />
        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: changeInput.bind(this, "date"),
            value: inputs.date.value,
          }}
          inValid={!inputs.amount.isValid}
          style={styles.rowInput}
        />
      </View>
      <Input
        label="Title"
        textInputConfig={{
          multiline: true,
          onChangeText: changeInput.bind(this, "title"),
          value: inputs.title.value,
          // autoCorrect: false, //default is true
          // autoCapitalize: 'sentences', //default is sentences
        }}
        inValid={!inputs.title.isValid}
      />
      {formIsInvalid && (
        <Text style={styles.errorText}>Wrong Input - Check your values!</Text>
      )}
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
  errorText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
    color: Constants.colors.error500,
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
