import React from "react"
import { Text, View } from "react-native"
import style from "../styles/SpeciesStyle"

export default function SpecieTarget({ film }) {
  return (
    <View style={style.species}>
      {film.species.map((specie, key) => (
        <View key={key} style={style.targetSpecies}>
          <Text style={[style.textPropertySpecies, { fontSize: 25 }]}>
            {specie.name}
          </Text>
          <Text style={[style.textDetailSpecies, { marginBottom: 15 }]}>
            {specie.classification}
          </Text>
          <View
            style={[
              style.featureSpecie,
              {
                backgroundColor: "#c7c3fa"
              }
            ]}>
            <Text style={style.textPropertySpecies}>Language</Text>
            <Text style={style.textDetailSpecies}> {specie.language} </Text>
          </View>
          <View style={style.featureSpecie}>
            <Text style={style.textPropertySpecies}>Designation</Text>
            <Text style={style.textDetailSpecies}> {specie.designation} </Text>
          </View>
          <View style={[style.featureSpecie, { backgroundColor: "#c7c3fa" }]}>
            <Text style={style.textPropertySpecies}>Skin Color</Text>
            {specie.skinColor !== null ? 
              specie.skinColor.map((skinColor, key) => (
                <Text key={key} style={style.textDetailSpecies}>
                  {skinColor} -
                </Text>
              )) : (
                <Text key={key} style={style.textDetailSpecies}>
                  n/a
                </Text>)
            }
          </View>
          <View style={style.featureSpecie}>
            <Text style={style.textPropertySpecies}>Average Lifespan</Text>
            <Text style={style.textDetailSpecies}>
              {specie.averageLifespan} years
            </Text>
          </View>
        </View>
      ))}
    </View>
  )
}