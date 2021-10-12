import React, { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { Text, StyleSheet, ScrollView, Alert } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { fetchOrders } from "../api";
import { Order } from "../Types";;
import Header from "../Header/Index";
import OrderCard from "../OrderCard";

export default function Orders() {

  const [orders, setOrders ] = useState<Order[]>([]);
  const [isLoading, setIsloading] = useState(false);
  const navegation = useNavigation();
  const isFocused = useIsFocused();

  const fetchData = () => {
    setIsloading(true);
    fetchOrders()
    .then(Response => setOrders(Response.data))
    .catch(() => Alert.alert("Houve um erro ao buscar os pedidos!"))
    .finally(() => setIsloading(false))
  }

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused])

  const handleOnPress = () =>{
    navegation.navigate("OrderDetails");
  }

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <Text>Carregando Pedidos...</Text>
        ) : (
              orders.map(order => (
                <TouchableWithoutFeedback key={order.id} onPress={handleOnPress}>
                  <OrderCard order={order}/>
                </TouchableWithoutFeedback>
            ))
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingLeft: "5%",
    paddingRight: "5%",
}

})