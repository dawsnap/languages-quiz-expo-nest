import { Text, Button, View } from 'react-native'
import { useState } from 'react';
// @ts-ignore
import {API_REST_URL} from 'react-native-dotenv'
import useAxios from "axios-hooks"
import DropDownPicker from 'react-native-dropdown-picker';

const Homescreen = ({ navigation }) => {

  const [{ data: languageslist, loading, error }, refetch] = useAxios(
    `${API_REST_URL}/languageslist`
  );
  console.log(languageslist)
  const info = languageslist.map(language => {
    return {
      label : language.name,
      value : language.id,
    }
  });
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(info);
  
  if (loading)
    return (
      <>
        <Text>Cargando...</Text>
      </>
    );
  if (error)
    return (
      <>
        <View>{JSON.stringify(error, null, 2)}</View>
        <Button
          onPress={() =>
            refetch({
              data: {
                delay: 2,
              },
            })
          }
          title="Reintentar"
        />
      </>
    );

  return (
    <>
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
        color: 'white',
        alignItems: 'center'
      }}
      >{`Selecciona un idioma para comenzar`}</Text>
      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      theme="DARK"
    />
    </View>
     <Button
     title={`Empezar Quiz`}
     onPress={() => navigation.navigate('Quiz')}
   /></>
  );
}

export default Homescreen;
