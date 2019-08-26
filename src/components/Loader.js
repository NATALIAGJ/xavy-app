import React from "react"
import { View, ActivityIndicator } from "react-native"
import style from "../styles/UiStyle"

export default function Loader() {
  return (
    <View style={[style.container, style.horizontal]}>
      <ActivityIndicator size="large" color="#6558f5" />
    </View>
  )
}
