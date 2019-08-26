import React from "react"
import { View, Image, Text } from "react-native"
import style from "../styles/UiStyle"

export default function Error() {
  return (
    <View style={[style.center, style.flexUno]}>
      <Image
        style={{ width: 90, height: 90 }}
        source={require("../../assets/danger.png")}
      />
      <Text style={style.titleError}>Oops!</Text>
    </View>
  )
}
