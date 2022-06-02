import { View, Text, Pressable } from "react-native";

const RankingCard = (props) => {

    const { score } = props;

    return (
        <>
        <View>
            <Text>{JSON.stringify(props.score)}</Text>
        </View>
        </>
    )

}

export default RankingCard;