import { StyleSheet, Platform, StatusBar } from "react-native";
import theme from "./theme";

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: theme.color.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});