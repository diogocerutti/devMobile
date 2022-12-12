import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  topImage: {
    height: 100,
    width: 100,
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#FFF",
    margin: 10,
    padding: 8,
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    alignItems: "center",
    flex: 1,
  },
  buttons: {
    width: 350,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  submit: {
    backgroundColor: "#4CBB17",
    justifyContent: "center",
    borderRadius: 14,
    height: 55,
    width: 130,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  cancel: {
    backgroundColor: "#DC143C",
    justifyContent: "center",
    borderRadius: 14,
    height: 55,
    width: 130,
  },
  imageText: {
    color: "grey",
    fontWeight: "500",
    fontSize: 18,
  },
});
