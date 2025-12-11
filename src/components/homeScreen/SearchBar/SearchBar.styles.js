import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 20,
    elevation: 3
  },
  input: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  resultsContainer : {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginTop: 12,
    paddingVertical: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    zIndex: 999,
    position: 'absolute',
    top: 70,
    width: '100%'
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 8,
    borderBottomColor: '#DFE1DE',
    borderRadius: 12,
    marginVertical: 6,
    marginHorizontal: 8,
    paddingHorizontal: 8,
  },
  resultText: {
    fontSize: 22,
    fontWeight: "600"
  },
  arrow: {
    fontSize: 22,
    fontWeight: "400",
    color: "#B3B3AD",
  },
});
