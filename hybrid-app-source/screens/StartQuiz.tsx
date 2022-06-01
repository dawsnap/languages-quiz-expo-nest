import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native'
// @ts-ignore
import {API_REST_URL} from 'react-native-dotenv'

import AnswerButton from '../components/AnswerButton';
import ProgressBar from '../components/ProgressBar';

const StartQuiz = ({ route, navigation }) => {

  const { selectedQuizId } = route.params;

  const [response, setResponse] = useState(null);

  const [Quiz, setQuiz] = useState([]);
  let QuizIndex = 0;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API_REST_URL}/listOfWords/${selectedQuizId}`);
      setResponse(response.data);
    };

    fetchData();
  }, []);

  if (response && Quiz.length === 0) {
    const Quiz = response.map(question =>{
      question.wrongAnswers.push({id:question.rightQuestion.id, word:question.rightQuestion.word, correct:true});
      return {
        question : question.rightQuestion.meaning,
        answers: 
          question.wrongAnswers.map(answer => {
            return {id:answer.id, word:answer.word}
          }),
        }
      })
      setQuiz(Quiz);
    };

  if (!response || Quiz.length === 0)
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
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
    <View style={{
      flexDirection: "column", flex:1, backgroundColor: '#171717',
    }}>
      <ProgressBar quizIndex={QuizIndex} total={Quiz.length}/>
      <View style={{ flex: 3 }}>
        <View style={{
          flex: 5,
          backgroundColor: '#bfc7d599',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginHorizontal: 40,
          marginVertical: 80,
          borderRadius: 30,
        }}>
        <Text style={{
          fontSize: 40
        }}
        >{Quiz[QuizIndex].question}</Text>
        </View>
      </View>
      <View style={{ flex: 5, marginBottom: 40, marginHorizontal:20}}>
      {Quiz[QuizIndex].answers.map(answer => {
        return <AnswerButton key={answer.id} value={answer}/>
      })}
      </View>
    </View>

    </View>
    </>
  );
}

export default StartQuiz;