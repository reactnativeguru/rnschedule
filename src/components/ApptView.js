import React from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native';
import tinycolor from 'tinycolor2';
import Colors from '../constants/colors';
import { hrsToStart } from '../services/hrsToPx';

const ApptView = ({ topTime, appt, hour_size, onEventPress, borderColor, multiple }) => { // new prop
  const color = tinycolor(appt.color).isValid() ? tinycolor(appt.color).toHexString() : Colors.red;
  const margin = hrsToStart(appt.start, topTime) * hour_size;

  const categoryTextColor = appt.color
  return (
    // change here
    <TouchableOpacity
      onPress={() => onEventPress(appt)}
      style={{ margin: 0, padding: 0, flex: 1 }}
    >
      <View style={[styles.container, { borderLeftColor: appt.color, borderLeftWidth: 5 }]}>
        {/* <View style={styles.innerContainer}> */}
        {/* <View
        style={{
          flex: 1,
          marginTop: margin,
          height: appt.height,
          backgroundColor: '#fff', // change here
          borderRadius: 0,
          padding: 2,
          overflow: 'hidden',
          padding: 10
        }}
      > */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            overflow: 'hidden',

          }}
        >
          <View style={styles.eventTitle}>
            <Text style={styles.eventTitleTextStyle}>{appt.title}</Text>
            <Text style={styles.eventSubTitleTextStyle}>{appt.subtitle}</Text>
          </View>
          {
            !multiple ? (<View style={[styles.eventCategory, { backgroundColor: appt.categoryColor }]}>
              <Text style={{ color: appt.color }}> {appt.category} </Text>

              {/* <Text style={[styles.eventCategoryTextStyle, { color: appt.color }]}>{appt.category}</Text> */}
            </View>) : null
          }

        </View>
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 2,
    backgroundColor: 'white',
    minHeight: 80,
    overflow: 'hidden',
    // padding: 10
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  eventSubTitleTextStyle: {
    color: '#999'
  },
  eventCategory: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  eventTitleTextStyle: {},
  eventCategoryTextStyle: {}

});

export default ApptView;
