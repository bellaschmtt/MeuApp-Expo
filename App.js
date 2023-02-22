import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen/>
      <SobreScreen/>
      <ContatoScreen/>
      <SurpresaScreen/>
    </View>
  );
}

function HomeScreen(){
  return(
    <View>
      <Text>Sou a HomeScreen</Text>
    </View>

  );
}
function SobreScreen(){
  return(
    <View>
      <Text>Isabella</Text>
      <Text>OI, estude enquanto eles dorme!no</Text>
      <Image source={{
        uri: 'https://picsum.photos/300/300'
      }}
      style={{
        height:'300px',
        width:'300px'
      }}
      />
    </View>
  )
}
function ContatoScreen(){
  return(
    <View>
      <Text>isabellaschmitz00@gmail.com</Text>
      <Text>Fone: 47 97951173</Text>
    </View>
  )
}
function SurpresaScreen(){
  return(
    <View>
      <Text>foda-se</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
