import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Header from './components/Header';
import DrawnGrid from './components/DrawnGrid'
import TimeCol from './components/TimeCol'
import styles from './components/styles';
import HrLine from './components/HrLine'
import NowBar from './components/NowBar'
import ScheduledData from './components/ScheduledData'
import SmartScroll from './components/SmartScroll'
import DatePickeMe from './components/DatePickeMe'
import {ContextProvider} from './components/ContextProvider'
import tinycolor from 'tinycolor2';
import Colors from './constants/colors';
import procData from './services/procData';

const RNSchedule = ({hourSize, dataArray, headerColor, leftIcon, accentColor, status_bar, onEventPress, selectedDate}) => {
  const [data, setData] = useState(!!dataArray && procData(dataArray, hourSize));

  useEffect(() => {
    setData(!!dataArray && procData(dataArray, hourSize));
  }, [dataArray.length]);

  return (
    <ContextProvider hour_size={hourSize}>
      <View style={styles.container}>
        <DatePickeMe />
        <SmartScroll hour_size={hourSize}>
          <View style={styles.body}>
            <View style={styles.hour_col}>
              <TimeCol hour_size={hourSize}/>
            </View>
            <View style={styles.schedule_col}>
              <DrawnGrid/>
              <NowBar hour_size={hourSize}/>
              { !!data && <ScheduledData dataArray={data} onEventPress={onEventPress} selectedDate={selectedDate} /> }
            </View>
          </View>
        </SmartScroll>
      </View>
    </ContextProvider>
  )
}

RNSchedule.propTypes = {
  hourSize: PropTypes.number,
  dataArray: PropTypes.array,
  headerColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  leftIcon: PropTypes.node,
  accentColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  onEventPress: PropTypes.func,
  status_bar: PropTypes.bool,
}

RNSchedule.defaultProps = {
  hourSize: Dimensions.get('window').height / 13.34,
  headerColor: Colors.light_gray,
  leftIcon: null,
  accentColor: Colors.blue,
  status_bar: true,
  onEventPress: () => {},
}

export default RNSchedule
