import { View, Text } from "react-native";

const AnswerButton = (props) => {
    return (
        <View style={{ flex: 2, backgroundColor: "darkorange", alignItems: 'center', justifyContent: 'space-around' }}>

        <Text> {JSON.stringify((props.value))}</Text>
        </View>

    )

}

export default AnswerButton;