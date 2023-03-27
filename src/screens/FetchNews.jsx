import { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Styles } from "../utils/styles";

export default function FetchNews() {
  function FetchNewsData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => console.log(json))
      .then((error) => console.error(error));
  }
  useEffect(() => {
    FetchNewsData();
  }, []);

  return (
    <View>
      <Text>Fetch News</Text>
    </View>
  );
}
