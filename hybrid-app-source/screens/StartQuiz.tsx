import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native'
// @ts-ignore
import {API_REST_URL} from 'react-native-dotenv'


const StartQuiz = ({ route, navigation }) => {

  const { selectedQuizId } = route.params;

  const [response, setResponse] = useState(null);

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API_REST_URL}/listOfWords/${selectedQuizId}`);
      setResponse(response.data);
    };

    fetchData();
  }, []);

  if (response && quizQuestions.length === 0) {
    const Quiz = response.map(question =>{
      return {
        question : question.rightQuestion.meaning,
        answers: 
          [{id:question.rightQuestion.id, word:question.rightQuestion.word, right:true},
          question.wrongAnswers.map(answer => {
            return {id:answer.id, word:answer.word}
          })],
        }
      })
      setQuizQuestions(Quiz);
    };

  if (!response)
  return (
    <>
     <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
      }}
      >
      <Text>Cargando....{`${API_REST_URL}`}</Text>
    </View>
    </>
  );

  return (
    <>
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        {JSON.stringify(quizQuestions)}
      </Text>

    </View>
    </>
  );
}

export default StartQuiz;