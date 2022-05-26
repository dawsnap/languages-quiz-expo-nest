import { Text, Button, View } from 'react-native'
import { useEffect, useState } from 'react';
// @ts-ignore
import {API_REST_URL} from 'react-native-dotenv'
import useAxios from "axios-hooks"
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

const Homescreen = ({ navigation }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

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
      };
    });
    setItems(info);
  }

  if (!response)
    return (
      <>
        <Text>Cargando...</Text>
      </>
    );
  if (error)
    return (
      <>
        <View>{JSON.stringify(error, null, 2)}</View>
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
      />
    </>
  );
};

export default Homescreen;
