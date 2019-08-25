import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import moment from "moment"
import { Text, View, ScrollView } from "react-native"
import { Header } from "../components/index"
import style from "../styles/UiStyle"
import styleHome from "../styles/HomeScreenStyle"

const FILM_QUERY = gql`
  query getFilm($id: ID!) {
    Film(id: $id) {
      id
      title
      releaseDate
      director
      species {
        name
        classification
        language
        designation
        hairColor
        eyeColor
        averageHeight
        averageLifespan
      }
    }
  }
`

export default function HomeScreen(props) {
  const { id } = props.navigation.state.params
  const { loading, error, data } = useQuery(FILM_QUERY, {
    variables: { id }
  })
  const film = data.Film
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error!!</Text>
  return (
    <View style={style.content}>
      <Header title={film.title} />
      <View style={style.contentPrincipal}>
        <ScrollView>
          <View style={styleHome.target}>
            <Text style={style.textProperty}>
              Director:
              <Text style={style.textDetail}> {film.director}</Text>
            </Text>
            <Text style={style.textProperty}>
              Release Date:
              <Text style={style.textDetail}>
                {moment(film.releaseDate).format("LL")}
              </Text>
            </Text>
            <Text style={style.textProperty}>
              ISrelfjf:
              <Text style={style.textDetail}> ALGO</Text>
            </Text>
            <Text style={style.title}>Especies</Text>
            <View style={styleHome.producers}>
              {film.species.map((specie, key) => (
                <View
                  key={key}
                  style={[
                    styleHome.target,
                    {
                      minWidth: "90%",
                      borderRadius: 10,
                      borderColor: "#6558f5",
                      fontSize: 16,
                    }
                  ]}>
                  <Text>Name: {specie.name}</Text>
                  <Text>Classification: {specie.classification}</Text>
                  <Text>Language: {specie.language}</Text>
                  <Text>Designation: {specie.designation}</Text>
                  <Text>Hair Color: {specie.hairColor}</Text>
                  <Text>Eye Color: {specie.eyeColor}</Text>
                  <Text>Average Height: {specie.averageHeight}</Text>
                  <Text>Average Lifespan: {specie.averageLifespan}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
