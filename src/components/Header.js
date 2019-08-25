import React from "react"
import { Text, View } from "react-native"
import style from "../styles/UiStyle"

export default function Header({ title }) {
  return (
    <View style={style.header}>
      <Text style={style.letterHeader}>{title}</Text>
    </View>
  )
}
