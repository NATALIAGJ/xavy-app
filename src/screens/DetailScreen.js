import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import moment from "moment"
import { Text, View, ScrollView } from "react-native"
import { Loader, Error, Species } from "../components/index"
import style from "../styles/UiStyle"
import styleDetail from "../styles/DetailScreenStyle"

const FILM_QUERY = gql`
  query getFilm($id: ID!) {
    Film(id: $id) {
      id
      title
      releaseDate
      isPublished
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
      <View style={styleDetail.headerDetail}>
        <Text style={styleDetail.letterTitle}>{film.title}</Text>
      </View>
      <View style={style.contentPrincipal}>
        <View style={[styleDetail.targetDetail]}>
          <View style={{ left: 20 }}>
            <Text style={styleDetail.textProperty}>
              Director:
              <Text style={styleDetail.textDetail}> {film.director}</Text>
            </Text>
            <Text style={styleDetail.textProperty}>
              Release Date:
              <Text style={styleDetail.textDetail}>
                {moment(film.releaseDate).format("LL")}
              </Text>
            </Text>
            <Text style={styleDetail.textProperty}>
              Is Published:
              <Text style={styleDetail.textDetail}>
                {film.isPublished ? ` Yes` :  ` No`}
              </Text>
            </Text>
          </View>
        </View>
        <Text style={[styleDetail.textProperty, styleDetail.textSpecies]}>
          SPECIES
        </Text>
        <ScrollView>
          <Species film={film} />
        </ScrollView>
      </View>
    </View>
  )
}
