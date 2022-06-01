import { Text, Button, View, Image, SafeAreaView } from 'react-native'
import { useEffect, useState } from 'react';


const Finish = ({ route, navigation }) => {

  const { score, languagId } = route.params;

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
        </View>
    </SafeAreaView>
    </>
  );
};

export default Finish;
