import { View, Text, Pressable } from "react-native";


const CustomButton = (props) => {

    return (
      <>
      {!props.hideit && <>
        <Pressable
        style={({ pressed }) => [ {
            backgroundColor: pressed
              ? '#292d3e50'
              : '#292d3e',
            borderColor:"#000",
            borderWidth: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingTop: 15,
            paddingBottom: 15,
            marginBottom: 20,
            borderRadius:5
            
          }]}
          
          onPress={props.onPress}
          
        >
        <View>

        <Text style={
            {fontSize: 15, 
             color: '#bfc7d5'
            }}>{props.buttonText}</Text>
        </View>
        </Pressable>
      </>}
      </>
    )

}

export default CustomButton;