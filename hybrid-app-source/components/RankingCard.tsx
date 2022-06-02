import { View, Text } from "react-native";
import { format } from "date-fns";

const RankingCard = (props) => {

    const { score, index } = props;
    const date = format(new Date(score.finish_time), "dd/MM/yyyy");

    return (
        <>
        <View 
            style={{
             backgroundColor:'#bfc7d599',
             marginTop: 8,
             flexDirection: 'row',
             paddingVertical: 5,
             borderRadius: 5,
             justifyContent: 'center',
            }}>

        <View style={{
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        }}>
            <Text>{index + 1}</Text>
        </View>
        <View style={{
          flex: 1.7,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
            <Text>{score.username}</Text>
        </View>
        <View style={{
          flex: 1.5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
            <Text>{score.score} puntos</Text>
            <Text>{date}</Text>
        </View>
        </View>
        </>
    )

}

export default RankingCard;