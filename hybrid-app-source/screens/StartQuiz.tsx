import { Text, View } from 'react-native'


const StartQuiz = ({ route, navigation }) => {

  const { selectedQuizId } = route.params;

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Empecemos! {selectedQuizId}
      </Text>
    </View>
  );
}

export default StartQuiz;