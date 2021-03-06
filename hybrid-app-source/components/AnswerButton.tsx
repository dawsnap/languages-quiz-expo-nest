import { View, Text, Pressable } from "react-native";


const AnswerButton = (props) => {

    const selectAnswer = () => {
        props.selectAnswerFunc(props)
    }


    return (
        <>
        {props.value && <>
        <Pressable
        style={({ pressed }) => [ {
            backgroundColor: pressed
              ? '#292d3e50'
              : '#292d3e',
            flex: 2,
            marginHorizontal:35,
            marginVertical:25,
            borderColor:"#000",
            borderWidth: 1.5,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'space-around'
          }]}
        onPress={selectAnswer}>
        <View>

        <Text style={
            {fontSize: 20, 
             color: '#bfc7d5'
            }}> {props.value.word}</Text>
        </View>
        </Pressable>
        </>}
        </>
    )

}

export default AnswerButton;