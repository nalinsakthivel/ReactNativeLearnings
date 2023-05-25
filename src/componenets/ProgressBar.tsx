/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Animated, StyleProp, ViewStyle} from 'react-native';

interface ProgressProps {
  value?: string;
  vHeight?: string | number;
  vWidth?: string | number;
  vBackgroundColor?: string;
  vProgressColor?: string;
  vBorderRadius?: number;
  viewStyle?: StyleProp<ViewStyle>;
}
const ProgressBar = ({
  value,
  vHeight,
  vWidth,
  vBackgroundColor,
  vProgressColor,
  vBorderRadius,
  viewStyle: style,
}: ProgressProps) => {
  return (
    <View
      style={[
        {
          width: vWidth,
          height: vHeight,
          borderRadius: vBorderRadius,
          backgroundColor: vBackgroundColor,
          justifyContent: 'center',
        },
        style,
      ]}>
      <Animated.View
        style={[
          {
            flexWrap: 'wrap',
            width: '100%',
            height: '100%',
            borderRadius: vBorderRadius,
            backgroundColor: vProgressColor,
          },
          {width: value + '%'},
        ]}
      />
    </View>
  );
};

ProgressBar.defaultProps = {
  vHeight: 15,
  vWidth: '100%',
  vProgressColor: 'green',
  vBackgroundColor: 'grey',
  value: 30,
  style: {},
  vBorderRadius: 6,
};

export default ProgressBar;
