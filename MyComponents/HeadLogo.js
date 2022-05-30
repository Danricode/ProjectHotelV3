import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Headline } from 'react-native-paper';

export default function HeadLogo() {
  return (
    <View style={styles.head}>
     <Image style={styles.img} source={require('../assets/FoxLogo.png')} />
     <Text style={styles.LogoTag}> Volpe Travels</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  head:{
      flex:1,
      flexDirection:"row",
      marginTop:5,
      

  },
    img:{
      width:50,
      height:50,
      alignItems:"center",
  },
  LogoTag:{
    marginTop:10,
    fontSize:20,
    fontStyle:"italic",
   
  },
});
