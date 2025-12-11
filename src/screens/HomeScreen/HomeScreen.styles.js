import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
   
  },
  footerText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#777',
  },
  content: {
    zIndex: 0
  },
  sectionHeader:{
    flexDirection: 'row', 
    marginTop: 25,
    marginBottom: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
