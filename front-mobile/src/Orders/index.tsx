import React from "react";
import { StyleSheet, ScrollView, View } from "react-native"
import Header from "../Header/Index";
import OrderCard from "../OrderCard";

export default function Orders() {
  return (
    <>
      <Header />
      <ScrollView style={styles.conttainer}>
        <OrderCard />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  conttainer:{
    paddingLeft: "5%",
    paddingRight: "5%",
}
});