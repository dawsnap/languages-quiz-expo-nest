import { View, Text } from "react-native";

const AnswerButton = (props) => {
    return (
        <View style={{ flex: 2,
            marginHorizontal:30,
            marginTop:30,
            padding: 4,
            backgroundColor: "#292d3e",
            borderColor:"#000",
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'space-around',
            }}>

        <Text> {JSON.stringify((props.value))}</Text>
        </View>

    )

}

export default AnswerButton;