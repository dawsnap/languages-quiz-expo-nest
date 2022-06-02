import { View, Text, Pressable } from "react-native";

const RankingCard = (props) => {

    const { score, index } = props;

    return (
        <>
        <View 
            style={{
             backgroundColor:'#bfc7d599',
             marginVertical: 2,
             flexDirection: 'row'
            }}>

        <View style={{
        flex: 0.3,
        }}><Text>{index + 1}</Text></View>
        <View style={{
          flex: 1.7,
        }}><Text>{score.username}</Text></View>
        <View style={{
          flex: 1.5,
        }}>
            <Text>{score.score} puntos</Text>
            <Text>{score.finish_time}</Text>
        </View>
        </View>
        </>
    )

}

export default RankingCard;