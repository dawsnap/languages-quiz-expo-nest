import { Text, Button, View, Image, SafeAreaView, TextInput } from 'react-native'
import { useEffect, useState } from 'react';

import CustomButton from '../components/CustomButton';


const Finish = ({ route, navigation }) => {

  const { score, languagId } = route.params;

  const [nickname, onChangeNickname] = useState(null)

  useEffect(() => {
  }, []);

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
