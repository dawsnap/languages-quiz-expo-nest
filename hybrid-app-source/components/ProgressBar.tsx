import { useEffect, useRef, useState } from "react";
import { View, Text, Animated } from "react-native";

const ProgressBar = (props) => {

  const barWidth = useRef(new Animated.Value(100)).current;
  const progressPercent = barWidth.interpolate({
      inputRange: [0, 100],
      outputRange: ["0%", `100%`],
  });

  const animation = Animated.timing(barWidth, {
    duration: 8000,
    toValue: 0,
    useNativeDriver: false
})

  useEffect(() => {
  
     animation.start();

  }, [])

  const restartProgressBar = () => {
    console.log(barWidth)
    barWidth.setValue(100)
    animation.reset()
    animation.start();
  }
  

  progressPercent.addListener((percentage) => {
      
      if (percentage.value  == "0%"){
        restartProgressBar();
      }
  })
  
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
            <View 
            ><Animated.View
            style={{
              width: progressPercent,
              backgroundColor: '#bfc7d5',
              height: 10
              
            }}
          /></View>
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