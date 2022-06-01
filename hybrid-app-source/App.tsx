import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'
import StartQuiz from './screens/StartQuiz'
import Finish from './screens/Finish'

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
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