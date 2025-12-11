import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EEF0F4",
  },

  sectionTitle: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    elevation: 2
  },

  label: {
    fontSize: 18,
    fontWeight: "600",
  },

  toggleRow: {
    flexDirection: "row",
  },

  toggleButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#E5E7EB",
  },

  activeButton: {
    backgroundColor: "#4C79A2",
  },

  toggleText: {
    fontSize: 16,
    color: "#444",
  },

  activeText: {
    color: "white",
    fontWeight: "600",
  }
});