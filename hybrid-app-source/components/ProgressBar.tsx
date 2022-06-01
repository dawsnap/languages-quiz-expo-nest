import { View, Text } from "react-native";

const ProgressBar = (props) => {
    return (
        <>
        <View style={{
            backgroundColor: "#292d3e",
            borderRadius: 5,
            marginVertical: 30
            }}>
          <View style={{
              marginVertical: 10
          }}>
          </View>
        </View>
        <View style={{alignItems: 'center', marginTop:15}}>
          <Text style={{fontSize: 20, 
             color: '#bfc7d5'
            }}>Pregunta {props.quizIndex+1} / {props.total}</Text>
        </View>
          </>
    )

}

export default ProgressBar;