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
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
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
