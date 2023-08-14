import React from 'react';
import {View, Text, StyleProp, ViewStyle, TextStyle} from 'react-native';
import MyColors from '../values/MyColors';

interface TextLabelProps {
  label?: string;
  fontSize?: number;
  width?: string | number;
  style?: StyleProp<TextStyle>;
}
const MandatoryTextLabel = ({
  label,
  fontSize,
  width,
  style,
}: TextLabelProps) => {
  let containerStyle: StyleProp<ViewStyle> = {flexDirection: 'row'};

  if (width) {
    containerStyle = {flexDirection: 'row', width: width};
  }
  return (
    <View style={containerStyle}>
      <Text style={[{fontSize: fontSize, color: MyColors.black}, style]}>
        {label}
      </Text>
      <Text style={{fontSize: 10, color: MyColors.red}}>*</Text>
    </View>
  );
};

MandatoryTextLabel.defaultProps = {
  fontSize: 20,
  lineHeight: 30,
  label: '',
  style: {
    color: MyColors.black,
  },
};

export default MandatoryTextLabel;
