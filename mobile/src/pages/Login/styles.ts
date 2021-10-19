import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-evenly",
    backgroundColor: "#f0f4fd",
  },
  containerLogo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#070606",
    marginLeft: 12
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#070606",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "normal",
    marginTop: 16,
    color: "#aeafb4",
  },
  button: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 24,
    marginVertical: 8,
    borderRadius: 10,
  },
  contentButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
      fontSize: 16,
      color: "#070606"
  },
  arrowButton: {
      alignItems: "center",
      justifyContent: "center",
      padding: 8,
      borderRadius: 10,
      backgroundColor: "#f0f4fd"
  },
  createAccountContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 12
  },
  createAccount: {
      fontSize: 14,
      color: "#070606"
  },
  createAccountLink: {
      fontSize: 14,
      color: "#7baefb",
      fontWeight: "bold"
  }
});
