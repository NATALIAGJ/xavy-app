import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import moment from "moment"
import { Text, View, ScrollView } from "react-native"
import { Loader, Error, Species } from "../components/index"
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
        averageLifespan
        skinColor
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
  if (loading) return <Loader />
  if (error) return <Error />
  return (
    <View style={style.content}>
      <View style={style.headerDetail}>
        <Text style={style.letterTitle}>{film.title}</Text>
      </View>
      <View style={style.contentPrincipal}>
        <View style={[styleHome.targetDetail]}>
          <View style={{ left: 20 }}>
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
              Is Released:
              <Text style={style.textDetail}> true</Text>
            </Text>
          </View>
        </View>
        <Text style={[style.textProperty, style.textSpecies]}>SPECIES</Text>
        <ScrollView>
          <Species film={film} />
        </ScrollView>
      </View>
    </View>
  )
}
