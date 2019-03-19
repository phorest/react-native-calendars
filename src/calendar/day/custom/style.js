import { StyleSheet, Platform } from "react-native";
import * as defaultStyle from "./DefaultStyle";

const STYLESHEET_ID = "stylesheet.day.single";

export default function styleConstructor(theme = {}) {
  const appStyle = { ...defaultStyle, ...theme };
  return StyleSheet.create({
    base: {
      width: 50,
      height: 50,
      alignItems: "center",
      backgroundColor: "#f9fafb"
    },
    text: {
      marginTop: Platform.OS === "android" ? 14 : 16,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: "500",
      color: "#d1d6df",
      backgroundColor: "rgba(255, 255, 255, 0)"
    },
    alignedText: {
      marginTop: Platform.OS === "android" ? 4 : 6
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
      borderRadius: 2
    },
    today: {
      backgroundColor: appStyle.todayBackgroundColor
    },
    todayText: {
      color: appStyle.todayTextColor
    },
    selectedText: {
      color: appStyle.selectedDayTextColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
