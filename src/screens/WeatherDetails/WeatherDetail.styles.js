import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cityName: {
    fontSize: 22,
    fontWeight: "600",
    marginVertical: 10,
    textAlign: "center"
  },
  mainCard: {
    backgroundColor: "#6392BB",
    borderRadius: 18,
    padding: 20,
    alignItems: "flex-start",
    marginBottom: 20,
  },
  temperature: {
    fontSize: 50,
    fontWeight: "700",
    color: "white",
    marginLeft: 10,
  },
  icon: { width: 60, height: 60 , marginRight: 25 },
  subText: { fontSize: 18, color: "white", marginTop: 5 },
  feelsText: { fontSize: 14, color: "white", marginTop: 5 },

  statsRow: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 12,
    justifyContent: "space-between",
    marginBottom: 15,
    height: 100
  },
  statItem: { alignItems: "center", width: "33%" },
  statIcon: { width: 28, height: 28, marginBottom: 5 },
  statLabel: { fontSize: 13, color: "#555" },
  statValue: { fontSize: 14, fontWeight: "700" },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDDFE3',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0
  },
  tabText: {
    fontSize: 16,
    color: "#777",
  },
  activeTab: {
    color: "#1A73E8",
    fontWeight: "700",
  },
  activeIndicator: {
    height: 3,
    backgroundColor: "#1A73E8",
    marginTop: 5,
    borderRadius: 5,
  },

  sunRow: { flexDirection: "row", justifyContent: "space-between" },
  sunCard: {
    width: "48%",
    backgroundColor: "#FFF",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  sunIcon: { width: 30, height: 30 },
  sunLabel: { marginTop: 6, fontSize: 14, color: "#444" },
  sunTime: { fontSize: 17, fontWeight: "700", marginTop: 2 },

  overviewCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 15,
  },
  overviewTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
  },
  overviewText: { fontSize: 14, color: "#555" },
  hourCard: {
    width: 70,
    paddingVertical: 12,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hourTime: {
    fontSize: 14,
    marginBottom: 6,
  },

  hourIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    marginBottom: 6,
  },

  hourTemp: {
    fontSize: 16,
    fontWeight: '600',
  },
  dailyContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 16
  },
  
  dailyRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.1)",
  },
  
  dailyDay: {
    fontSize: 16,
    width: 60,
  },
  
  dailyIcon: {
    width: 36,
    height: 36,
    marginLeft: -10,
  },
  
  dailyTemp: {
    fontSize: 16,
    fontWeight: "600",
    width: 90,
    textAlign: "center",
  },
  dailyRain: {
    fontSize: 14,
    width: 60,
    textAlign: "right",
  },
  
});
