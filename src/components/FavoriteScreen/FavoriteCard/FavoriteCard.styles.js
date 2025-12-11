import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3
  },
  city: {
    fontSize: 22,
    fontWeight: "500",
    color: "#424342"
  },
  temp: {
    fontSize: 22,
    marginTop: 4,
    fontWeight: "600",
     color: "#424342"
  },
  desc: {
    fontSize: 18,
    color: "#70706E",
    marginTop: 2,
  },
  icon: {
    width: 50,
    height: 50,
  }
});
