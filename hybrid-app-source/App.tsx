import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'
import StartQuiz from './screens/StartQuiz'
import Finish from './screens/Finish'
import { Alert, BackHandler } from 'react-native';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();


const App = () => {

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Salir", "¿Seguro que quieres cerrar la aplicación?", [
        {
          text: "Cancelar",
          onPress: () => null,
        },
        { text: "Salir", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled:false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Quiz"
          component={StartQuiz}
        />
        <Stack.Screen
          name="Finish"
          component={Finish}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;