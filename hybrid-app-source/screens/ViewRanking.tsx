import { Text, View, SafeAreaView, ScrollView } from 'react-native'
import { useEffect, useState } from 'react';
// @ts-ignore
import {API_REST_URLLOCALL} from 'react-native-dotenv'

import axios from 'axios';
import RankingCard from '../components/RankingCard';
import CustomButton from '../components/CustomButton';


const ViewRanking = ({ route, navigation }) => {

  const { selectedQuizId } = route.params;

  const [response, setResponse] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(`${API_REST_URLLOCALL}/viewRanking/${selectedQuizId}`);
        setResponse(response.data);
      };
  
      fetchData();

  }, []);

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
        <Text>Cargando....{`${API_REST_URLLOCALL}/viewRanking`}</Text>
      </View>
      </>
    );
  return (
    <>
    <View
    style={{
      flex:1,
      backgroundColor: '#171717',
    }}>
    <SafeAreaView
      style={{
        flex:1,
        backgroundColor: '#171717',
        marginTop: 30,
      }}>
        <View
        style={{
          alignItems: 'center',
            justifyContent: 'center',
        }}>

        <Text
             style={{

               marginVertical: 15,
               fontSize: 20,
               color: '#bfc7d5',
               alignItems: 'center'
             }}
           >{`Ranking`}</Text>
        </View>
      <ScrollView style={{marginHorizontal: 10}}>
      {response.map(score => {
        return <RankingCard key={response.indexOf(score)} index={response.indexOf(score)} score={score}/>
      })}
      </ScrollView>
      <CustomButton 
             onPress={() =>
              navigation.navigate('Home')}
             buttonText={'Cerrar'}/>
        
    </SafeAreaView>
    </View>
    </>
  );
};

export default ViewRanking;
