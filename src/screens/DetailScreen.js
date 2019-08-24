import React from "react"
import gql from "graphql-tag"
import moment from "moment"
import { useQuery } from "@apollo/react-hooks"
import { Text, View, ScrollView } from "react-native"

const ALL_FILMS_QUERY = gql`
  query{
    allFilms{
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ 
        flex: 0,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch", 
        borderWidth: 2,
        borderColor: "#c3cfd9" 
      }}>
        <Text style={{ color: "#6558f5", fontSize: 30 }}> a Xavy Wars!</Text>
      </View>

      <View style={{ 
        flex: 1,
        width: "100%",
        alignSelf: "stretch",
        paddingBottom: 20
      }} >
        <ScrollView>
          {data.allFilms.map((film, key) => (
             <View key={key} style={{
                minHeight: 120,
                borderWidth: 2,
                borderColor: "#c3cfd9",
                marginTop: 20,
                marginLeft: 20,
                marginRight: 20,
                padding: 10
              }}>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>{film.title.toUpperCase()}</Text>
                  <Text style={{ color: "#788896", fontSize: 15, right: 0, position: "absolute" }}>{moment(film.createdAt).format('LL')}</Text>
                </View>
                <Text style={{ color: "#788896", fontSize: 15, top: 5 }}>{film.director}</Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {film.producers.map((producer, key) => (
                    <View key={key} style={{ 
                      borderWidth: 2,
                      borderColor: "#6558f5",
                      alignSelf: "stretch",
                      marginTop: 10,
                      marginRight: 10,
                      padding: 3,
                      height: 28,
                      borderRadius: 50,
                      backgroundColor: "#c7c3fa"
                    }}>
                      <Text style={{ color: "#6e61f6", fontSize: 15 }}>{producer}</Text>
                    </View>
                  ))}
                </View>
                <Text style={{ color: "#67c9bf", fontSize: 15, right: 0, position: "absolute", bottom: 0 }}>Ver más ></Text>
              </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}
