import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 1,
  },
  touchable: {
    height: 55,
    margin: 10,
    backgroundColor: "#33a9f4",
    padding: 8,
    justifyContent: "center",
  },
  touchableText: {
    fontSize: 18,
    fontWeight: "500",
    alignSelf: "center",
    color: "#FFF",
  },
});
