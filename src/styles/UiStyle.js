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
  flexUno: {
    flex: 1
  },
  contentPrincipal: {
    flex: 1,
    width: "100%",
    alignSelf: "stretch",
    paddingBottom: 20
  },
  textDetail: {
    color: "#788896",
    fontSize: 16,
    top: 5,
    fontWeight: "normal"
  },
  textProperty: {
    color: "#788896",
    fontSize: 16,
    top: 5,
    fontWeight: "bold"
  },
  title: {
    color: "#788896",
    fontSize: 16,
    fontWeight: "bold",
    top: 10
  }
})
