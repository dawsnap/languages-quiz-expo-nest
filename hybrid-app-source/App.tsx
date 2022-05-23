import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen'
import StartQuiz from './screens/StartQuiz'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'QuizApp' }}
        />
        <Stack.Screen
          name="Quiz"
          component={StartQuiz}
          options={{ title: 'StartQuiz' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
