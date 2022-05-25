import { Text, Button, View } from 'react-native'
// @ts-ignore
import {API_REST_URL} from 'react-native-dotenv'

const Homescreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Empezar Quiz" onPress={()=> navigation.navigate('Quiz')} />
    </View>
  );
}

export default Homescreen;