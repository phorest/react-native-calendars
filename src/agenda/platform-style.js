export default function platformStyles(appStyle) {
  return {
    knob: {
      width: 38,
      height: 7,
      marginTop: 10,
      borderRadius: 3,
      backgroundColor: appStyle.agendaKnobColor
    },
    weekdays: {
      position: "absolute",
      left: 0,
      right: 0,
      top: -10,
      flexDirection: "row",
      justifyContent: "space-between",
      paddingLeft: 24,
      paddingRight: 24,
      paddingTop: 30, // controls the space on top of the month/year in the agenda view
      paddingBottom: 8, // controls the space below of the month/year in the agenda view
      backgroundColor: appStyle.calendarBackground
    }
  };
}
