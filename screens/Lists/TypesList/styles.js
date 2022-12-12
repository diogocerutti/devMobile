import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },
  box: {
    padding: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "white",
    flexDirection: "row",
  },
  boxContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: "#151515",
  },
  description: {
    fontSize: 15,
    color: "#646464",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    height: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: 50,
    marginRight: 5,
    marginTop: 5,
  },
  view: {
    backgroundColor: "#eee",
  },
  profile: {
    backgroundColor: "#1E90FF",
  },
  message: {
    backgroundColor: "#228B22",
  },
});
