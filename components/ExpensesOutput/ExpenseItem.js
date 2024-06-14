import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "./../../constants/styles";

export default function ExpenseItem({ title, amount, date }) {
  return (
    <Pressable>
      <View style={styles.item}>
        <View style={styles.textBase}>
          <Text style={[styles.textBase, styles.description]}>{title}</Text>
          <Text style={styles.textBase}>{date.toString()}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: Constants.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 5,
  },
  textBase: {
    color: Constants.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: Constants.colors.primary500,
    fontWeight: "bold",
  },
});
