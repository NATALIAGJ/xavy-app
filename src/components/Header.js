import React from "react"
import { Text, View } from "react-native"
import style from "../styles/UiStyle"

export default function Header() {
  return (
    <View style={style.header}>
      <Text style={style.letterHeader}>Bienvenido a Xavy Wars!</Text>
    </View>
  )
}
