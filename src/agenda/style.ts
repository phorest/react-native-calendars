import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';
import platformStyles from './platform-style';
import {Theme} from '../types';

export default function /*  */styleConstructor(theme: Theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  const {knob, weekdays} = platformStyles(appStyle);

  return StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'hidden'
    },
    animatedContainer: {
      flex: 1
    },
    knob,
    weekdays,
    header: {
      overflow: 'hidden',
      justifyContent: 'flex-end',
      position: 'absolute',
      height: '100%',
      width: '100%'
    }, 
    calendar: {
      flex: 1,
      borderBottomWidth: 1,
      // borderColor: appStyle.separatorColor,
    },
    knobContainer: {
      flex: 1,
      position: 'absolute',
      left: 0,
      right: 0,
      height: 24,
      bottom: 0,
      alignItems: 'center',
      backgroundColor: appStyle.calendarBackground
    },
    dayHeader: {
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight,
      color: appStyle.textSectionTitleColor
    }, 
    weekday: {
      width: 32,
      textAlign: 'center',
      color: appStyle.textSectionTitleColor,
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      fontWeight: appStyle.textDayHeaderFontWeight,
    },
    month: {
      textAlign: 'center',
      fontSize: 17,
      fontFamily: 'Montserrat-Medium',
      color: '#626e84',
      marginBottom: 10,
    },
  reservations: {
      flex: 1,
      marginTop: 155,
      // @ts-ignore
      backgroundColor: appStyle.reservationsBackgroundColor || appStyle.backgroundColor //TODO: remove 2nd in V2
  },
    scrollPadStyle: {
      position: 'absolute',
      width: '100%',
      alignSelf: 'center'
    },
    // @ts-ignore
    ...(theme['stylesheet.agenda.main'] || {})
  });
}
