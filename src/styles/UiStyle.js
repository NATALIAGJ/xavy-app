import { StyleSheet } from "react-native"

export default StyleSheet.create({
  content: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  header: {
    flex: 0,
    height: 80,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#c3cfd9"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  border: {
    borderWidth: 2,
    borderColor: "#c3cfd9"
  },
  letterHeader: {
    color: "#6558f5",
    fontSize: 30
  },
  headerDetail: {
    flex: 0,
    height: 80,
    alignSelf: "stretch",
    backgroundColor: "#E3E3E3"
  },
  letterTitle: {
    left: 30,
    top: 20,
    color: "#788896",
    fontSize: 30,
    fontWeight: "bold"
  },
  flexUno: {
    flex: 1
  },
  contentPrincipal: {
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
    paddingBottom: 20
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  textDetail: {
    color: "#000",
    fontSize: 16,
    top: 5,
    fontWeight: "normal"
  },
  textProperty: {
    color: "#000",
    fontSize: 16,
    top: 5,
    fontWeight: "bold"
  },
  textSpecies: {
    fontSize: 17,
    marginLeft: 30,
    marginBottom: 10,
    marginTop: 5
  },
  textDetailSpecies: {
    color: "#788896",
    fontSize: 16,
    fontWeight: "normal"
  },
  textPropertySpecies: {
    color: "#788896",
    fontSize: 16,
    fontWeight: "bold"
  },
  title: {
    color: "#788896",
    fontSize: 16,
    fontWeight: "bold",
    top: 10
  },
  titleError: {
    color: "#6558f5",
    fontSize: 16,
    fontWeight: "bold",
    top: 10
  }
})
