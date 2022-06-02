import { Text, SafeAreaView } from 'react-native'
import { useEffect, useState } from 'react';
// @ts-ignore
import {API_REST_URL} from 'react-native-dotenv'

import axios from 'axios';


const ViewRanking = ({ route, navigation }) => {

  const { selectedQuizId } = route.params;

  const [response, setResponse] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(`${API_REST_URL}/viewRanking/${selectedQuizId}`);
        setResponse(response.data);
      };
  
      fetchData();

  }, []);


  return (
    <>
    <SafeAreaView
      style={{
        flex:1,
        backgroundColor: '#171717'
      }}>
        
    </SafeAreaView>
    </>
  );
};

export default ViewRanking;
