import React, {useState} from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  ImageSourcePropType,
  GestureResponderEvent,
  TouchableOpacity,
  ImageURISource,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import {ImageModel} from '../utils/AlertUitls';
import MyColors from '../values/MyColors';

interface ImageCardWithEditProps {
  editable: boolean;
  source: ImageSourcePropType;
  showPopup?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  onClick?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ImageStyle>;
}
const ImageCardWithEdit = ({
  editable,
  source,
  onPress,
  onClick,
  containerStyle,
  style,
  showPopup = false,
}: ImageCardWithEditProps) => {
  const [imageVisible, setImageVisible] = useState(false);
  return (
    <TouchableOpacity
      onPress={event => {
        if (showPopup) {
          setImageVisible(!imageVisible);
        } else {
          if (onClick) {
            onClick(event);
          }
        }
      }}
      style={[
        {
          backgroundColor: MyColors.grey,
          borderRadius: 5,
          marginBottom: 20,
          height: 200,
          width: '100%',
        },
        containerStyle,
      ]}>
      <ImageModel
        visible={imageVisible}
        onPress={function (): void {
          setImageVisible(false);
        }}
        url={(source as ImageURISource).uri}
      />
      <Image
        source={source}
        resizeMode={'stretch'}
        style={[{flex: 1, borderRadius: 5}, style]}
      />

      <View style={{position: 'absolute', top: 5, right: 5}}>
        <TouchableHighlight
          underlayColor={MyColors.secondary}
          onPress={onPress}>
          <>
            {editable ? (
              <Image
                style={{padding: 10}}
                source={require('../values/assets/images/edit_img.png')}
              />
            ) : null}
          </>
        </TouchableHighlight>
      </View>
    </TouchableOpacity>
  );
};

export default ImageCardWithEdit;
