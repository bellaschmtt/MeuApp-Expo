import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { ScrollView } from "react-native-web";
import styles from "../utils/styles";
//import {ScrollView} from "react-native";

// fetch puxa uma função do javascript de um lugar
//".then" o "reponse" e e transforma em "json"
export default function FetchNews() {
  const [data, setData] = useState([]);
  const [nome, setNome] = useState("Isa");
  function FetchNewsData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .then((error) => console.error(error));
  }
  useEffect(() => {
    FetchNewsData();
  }, []);

  // perguntar para o sor o serve o que está abaixo
  // variavel da expondo a variavel "data"
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
      <Text>Fetch News</Text>
      {data.map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
      </View>
    </ScrollView>
  );
}
