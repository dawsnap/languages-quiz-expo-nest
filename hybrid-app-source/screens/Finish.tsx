import { Text, Button, View, Image, SafeAreaView, TextInput } from 'react-native'
import { useEffect, useState } from 'react';
// @ts-ignore
import {API_REST_URL} from 'react-native-dotenv'

import CustomButton from '../components/CustomButton';
import axios from 'axios';


const Finish = ({ route, navigation }) => {

  const { selectedQuizId, score, rawQuiz } = route.params;

  const [nickname, onChangeNickname] = useState(null)

  useEffect(() => {
  }, []);

  const [response, setResponse] = useState(null)

  const saveScore = () => {
    const reqBody = {
      selectedQuizId:selectedQuizId,
      score:score,
      rawQuiz:rawQuiz,
      nickname:nickname
    }
    const postData = async () => {
      const response = await axios.post(`${API_REST_URL}/newscore`, reqBody);
      setResponse(response.data);
      navigation.navigate('Home')
    };

    postData();
   
    
  };

  return (
    <>
    <SafeAreaView
      style={{
        flex:1,
        backgroundColor: '#171717'
      }}>
        <View
          style={{
            backgroundColor: '#171717',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 15
          }}
        >
          <Text
            style={{
              marginBottom: 15,
              fontSize: 20,
              color: '#bfc7d5',
              alignItems: 'center'
            }}
          >Tu puntuación es de {score} puntos</Text>
          <TextInput
            style={{  
              marginTop: 55,
              height: 40,
              width:'100%',
              backgroundColor: 'white',
              borderWidth: 1,
              padding: 10,}}
              placeholder="Introduce un nickname para guardar tu puntuación"
              onChangeText={onChangeNickname}
              value={nickname}
          />
          <View
            style={{
              width:'80%',
              marginTop: 10
            }}
          >
            <CustomButton 
             onPress={saveScore}
             buttonText={'Guardar puntuación'}/>

            <CustomButton 
             onPress={() =>
              navigation.navigate('Home')}
             buttonText={'Volver sin guardar'}/>
          </View>
        </View>
    </SafeAreaView>
    </>
  );
};

export default Finish;
