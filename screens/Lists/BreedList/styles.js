import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  buttonView: {
    flex: 1,
    justifyContent: "center",
  },
  clearButton: {
    width: "100%",
    backgroundColor: "#0047AB",
    borderColor: "#00000",
    borderRadius: 15,
    height: 50,
    justifyContent: "center",
  },
  buttonText: {
    alignSelf: "center",
    color: "#FFF",
    fontSize: 30,
  },
});
