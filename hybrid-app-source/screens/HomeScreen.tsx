import { Text, Button, View, Image, SafeAreaView } from 'react-native'
import { useEffect, useState } from 'react';
// @ts-ignore
import {API_REST_URL} from 'react-native-dotenv'
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import CustomButton from '../components/CustomButton';

const getImage  = (language) => {
  switch (language) {
    case "Inglés":
      return require('../assets/english_flag.png');
    case "Francés":
      return require('../assets/french_flag.png');
  }
}

const Homescreen = ({ navigation }) => {
  const [response, setResponse] = useState(null);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API_REST_URL}/languageslist`);
      setResponse(response.data);
    };

    fetchData();
  }, []);

  if (response && items.length === 0) {
    const info = response.map((language) => {
      return {
        label: language.name,
        value: language.id,
        icon: () => <Image style={{width:25, height:25}} source={getImage(language.name)} />
      };
    });
    setItems(info);
  }

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
        <Text>Cargando....{`${API_REST_URL}/languageslist`}</Text>
      </View>
      </>
    );

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
          >{`Selecciona un idioma para comenzar`}</Text>
          <DropDownPicker
            placeholder='Selecciona un ítem'
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            theme="DARK"
          />
        <View
        style={{
          width:'50%',
          marginTop:5
        }}>
        <CustomButton 
        onPress={() => navigation.navigate('ViewRanking',
        {
          selectedQuizId: value,
        })}
        hideit={!value}
        buttonText={'Ver ránking'}/>
        </View>
        </View>
        <CustomButton 
        onPress={() => navigation.navigate('Quiz',
        {
          selectedQuizId: value,
        })}
        hideit={!value}
        buttonText={'Empezar Quiz'}/>
    </SafeAreaView>
    </>
  );
};

export default Homescreen;
