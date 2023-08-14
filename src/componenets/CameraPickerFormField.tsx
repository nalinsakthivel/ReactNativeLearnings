import React, {useState} from 'react';
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
} from 'react-native';
import ImageMarker, {Position} from 'react-native-image-marker';
import {Camera} from '../utils/Camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ImagePickerResponse} from 'react-native-image-picker';
import {formattedMonthNameDateTime} from '../utils/CommonUtils';
import MyColors from '../values/colours';
import {alertPremission} from '../utils/AlertUtils';
import {callLocation} from '../utils/CurrentGeolocation';
import ImageCardWithEdit from './ImageCardWithEdit';
import MandatoryTextLabel from './MandatoryText';

interface CameraPickerFormFieldProps {
  onChange: (url: string) => void;
  value: string;
  error?: string;
  latlong?: string;
  beneficiacryCode?: string;
  stage?: string;
  category?: string;
}
const CameraPickerFormField = (props: CameraPickerFormFieldProps) => {
  const [imageVisible, setImageVisible] = useState<boolean>(false);
  const openCamera = async () => {
    await Camera()
      .then((imageURI: ImagePickerResponse) => {
        if (imageURI.errorCode) {
          alertPremission('Camera');
        } else {
          setTimeout(async () => {
            const latlong = await callLocation();
            if (imageURI.assets && imageURI.assets.length > 0) {
              let uri = await ImageMarker.markText({
                src: imageURI.assets[0].uri,
                text:
                  formattedMonthNameDateTime(new Date()) +
                  '\n\n' +
                  (latlong
                    ? latlong.latitude + ', ' + latlong.longitude
                    : '0.0'),
                position: Position.bottomLeft,
                color: MyColors.black, // '#ff0000aa' '#f0aa'
                fontName: 'Arial-BoldItalicMT',
                fontSize: 10,
                shadowStyle: {
                  dx: 1,
                  dy: 1,
                  radius: 10,
                  color: MyColors.white, // '#ff00ffad'
                },
                scale: 1,
                quality: 100,
              });

              props.onChange('file:///' + uri);
            }
          }, 500);
        }
      })
      .catch(error => {
        console.log('error>>>>', error);
      });
  };
  return (
    <View>
      {!(props.value && props.value !== '') ? (
        <TouchableOpacity
          onPress={() => {
            openCamera();
          }}
          style={{
            marginTop: 10,
            padding: 5,
            borderRadius: 5,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderRadius: 50,
              width: 70,
              alignItems: 'center',
              height: 100,

              justifyContent: 'center',
            }}>
            <Icon name="camera" size={50} color={MyColors.grey} />
            <MandatoryTextLabel label="Image" fontSize={14} />
          </View>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            borderRadius: 5,
            padding: 5,
            height: 100,
          }}>
          {/* <Image
            source={{uri: props.value}}
            style={{width: 100, height: 100}}
          /> */}
          <ImageCardWithEdit
            containerStyle={{width: 100, height: 100}}
            onPress={() => {}}
            source={{
              uri: props.value,
            }}
            showPopup={imageVisible}
            onClick={() => {
              setImageVisible(!imageVisible);
            }}
            editable={false}
          />
          <View style={{position: 'absolute', top: 10, right: 5}}>
            <TouchableHighlight
              underlayColor={MyColors.secondary}
              onPress={() => {
                Alert.alert(
                  'Confirm',
                  'Do you want to delete the photo?',
                  [
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed!'),
                    },
                    {
                      text: 'OK',
                      onPress: () => props.onChange(''),
                    },
                  ],
                  {cancelable: false},
                );
              }}>
              <Image
                source={require('../values/assets/images/trash_img.png')}
                style={{
                  width: 10,
                  height: 10,
                }}
              />
            </TouchableHighlight>
          </View>
        </View>
      )}
      {props.error ? (
        <Text style={{color: '#f44336'}}>{props.error} </Text>
      ) : null}
    </View>
  );
};

export default CameraPickerFormField;
