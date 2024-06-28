import { View } from "react-native";
import Input from "./Input";

export default function ExpenseForm() {
  function changeAmount() {}

  return (
    <View>
      <Input
        label={"Amount"}
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: changeAmount,
        }}
      />
      <Input
        label={"Date"}
        textInputConfig={{
          placeholder: "Enter date : YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
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
