import { StyleSheet } from "react-native"

export default StyleSheet.create({
  target: {
    minHeight: 150,
    borderWidth: 2,
    borderColor: "#c3cfd9",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 10
  },
  letterTarget: {
    color: "#788896",
    fontSize: 15
  },
  title: {
    fontSize: 15,
    fontWeight: "bold"
  },
  createdAt: {
    color: "#788896",
    fontSize: 15,
    right: 0,
    position: "absolute"
  },
  director: {
    color: "#788896",
    fontSize: 15,
    top: 5
  },
  producers: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    top: 20
  },
  species: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  targetProducer: {
    borderWidth: 2,
    borderColor: "#6558f5",
    alignSelf: "stretch",
    marginTop: 10,
    marginRight: 10,
    padding: 3,
    height: 28,
    borderRadius: 50,
    backgroundColor: "#c7c3fa",
    color: "#6e61f6",
    fontSize: 15
  },
  verMas: {
    color: "#67c9bf",
    fontSize: 17,
    right: 0,
    position: "absolute",
    bottom: 0
  }
})
