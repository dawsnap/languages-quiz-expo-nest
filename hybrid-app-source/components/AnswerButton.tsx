import { View, Text } from "react-native";

const AnswerButton = (props) => {
    return (
        <View style={{ flex: 2,
            marginHorizontal:35,
            marginVertical:25,
            marginTop:20,
            backgroundColor: "#292d3e",
            borderColor:"#000",
            borderWidth: 2,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'space-around',
            }}>

        <Text style={
            {fontSize: 25, 
             color: '#bfc7d5'
            }}> {props.value.word}</Text>
        </View>

    )

}

export default AnswerButton;