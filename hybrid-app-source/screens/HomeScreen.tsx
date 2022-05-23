import { Text, Button } from 'react-native'

const Homescreen = ({ navigation }) => {
  return (
    <><Text>
      Hola!
    </Text><Button
        title="Empezar Quiz"
        onPress={() => navigation.navigate('Quiz')} /></>
  );
}

export default Homescreen;