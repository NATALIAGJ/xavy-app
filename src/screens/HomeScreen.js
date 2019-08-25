import React from "react"
import gql from "graphql-tag"
import moment from "moment"
import { useQuery } from "@apollo/react-hooks"
import { Text, View, ScrollView, TouchableOpacity } from "react-native"
import { Header } from "../components/index"
import style from "../styles/UiStyle"
import styleHome from "../styles/HomeScreenStyle"

const ALL_FILMS_QUERY = gql`
  query {
    allFilms {
      id
      title
      createdAt
      director
      producers
    }
  }
`

export default function HomeScreen(props) {
  const { loading, error, data } = useQuery(ALL_FILMS_QUERY)
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error!!</Text>
  return (
    <View style={style.content}>
      <Header title={"Bienvenido a Xavy Wars!"} />
      <View style={style.contentPrincipal}>
        <ScrollView>
          {data.allFilms.map((film, key) => (
            <View key={key} style={styleHome.target}>
              <View
                style={{
                  flexDirection: "row"
                }}>
                <Text style={styleHome.title}>{film.title.toUpperCase()}</Text>
                <Text style={styleHome.createdAt}>
                  {moment(film.createdAt).format("LL")}
                </Text>
              </View>
              <Text style={styleHome.director}>{film.director}</Text>
              <View style={styleHome.producers}>
                {film.producers.map((producer, key) => (
                  <View key={key} style={styleHome.targetProducer}>
                    <Text>{producer}</Text>
                  </View>
                ))}
              </View>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate("Detail", { id: film.id })
                }>
                <Text style={styleHome.verMas}>Ver más &gt; </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}
