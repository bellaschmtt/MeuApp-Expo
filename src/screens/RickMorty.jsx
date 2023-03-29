import { useEffect } from "react";
import { useState } from "react";
import { Card, Paragraph, Title } from "react-native-paper";
import { ScrollView, View } from "react-native-web";
import styles from "../utils/styles";

export default function RickMorty() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((dataJson) => setData(dataJson.results))
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        {data.map((item) => (
          <Card key={item.name}>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Title>{item.name}</Card.Title>
            <Card.Content>
              <Title>{item.species}</Title>
              {/* <Paragraph>{item.status}</Paragraph>
              {item.episode.map((episode) => (

              ))} */}
            </Card.Content>
            
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}
