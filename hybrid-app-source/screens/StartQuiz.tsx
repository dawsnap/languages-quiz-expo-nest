import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native'
// @ts-ignore
import {API_REST_URL} from 'react-native-dotenv'


const StartQuiz = ({ route, navigation }) => {

  const { selectedQuizId } = route.params;

  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API_REST_URL}/listOfWords/${selectedQuizId}`);
      setResponse(response.data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Empecemos! {selectedQuizId} {JSON.stringify(response)}
      </Text>
    </View>
  );
}

export default StartQuiz;