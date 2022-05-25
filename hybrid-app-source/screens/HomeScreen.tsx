import { Text, Button, View } from 'react-native'
// @ts-ignore
import {API_REST_URL} from 'react-native-dotenv'
import useAxios from "axios-hooks"

const Homescreen = ({ navigation }) => {
  const [{ data: languageslist, loading, error }, refetch] = useAxios(
    `${API_REST_URL}/languageslist`
  );
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
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Empezar Quiz" onPress={()=> navigation.navigate('Quiz')} />
    </View>
  );
}

export default Homescreen;