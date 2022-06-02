import { View, Text } from "react-native";
import { format } from "date-fns";

const RankingCard = (props) => {

    const { score, index } = props;
    const date = format(new Date(score.finish_time), "dd/MM/yyyy H:mm");

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
            <Text>{date}</Text>
        </View>
        </View>
        </>
    )

}

export default RankingCard;