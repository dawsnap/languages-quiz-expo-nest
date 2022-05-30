import { Text, Button, View, Image } from 'react-native'
import { useEffect, useState } from 'react';
// @ts-ignore
import {API_REST_URL} from 'react-native-dotenv'
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

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
        disabled = { value ? false : true }
        title={`Empezar Quiz`}
        onPress={() => navigation.navigate('Quiz')}
      />
    </>
  );
};

export default Homescreen;
