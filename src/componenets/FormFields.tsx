import {t} from 'i18next';
import React, {useState} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Rating} from 'react-native-elements';
import {Checkbox, RadioButton} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import {formattedMonthNameDate} from '../utils/CommonUtils';
import MyColors from '../values/colours';
import {KeyValueViewModel} from '../viewmodel/KeyValueModel';

interface DataProps {
  maxLength: number;
}
interface TextInputFieldProps {
  inputProps: TextInputProps;
  errorTxt: string | null | undefined;
  errorStyle?: StyleProp<TextStyle>;
  ref?: React.LegacyRef<TextInput>;
  valueStyle?: StyleProp<TextStyle>;
}
export const TextInputField = ({
  inputProps,
  errorTxt,
  errorStyle,
  ref,
  valueStyle,
}: TextInputFieldProps) => {
  return (
    <View>
      <TextInput
        ref={ref}
        value={inputProps.value}
        onChangeText={txt => {
          inputProps.onChangeText(txt);
        }}
        style={[
          {
            borderColor: MyColors.secondary,
            borderWidth: 2,
            marginVertical: 10,
            borderRadius: 5,
            paddingHorizontal: 10,
            fontSize: 14,
            color: inputProps.editable
              ? MyColors.primary
              : MyColors.disableGrey,
          },
          valueStyle,
        ]}
        // autoFocus={true}
        {...inputProps}
      />
      {errorTxt ? (
        <Text style={[{color: MyColors.red}, errorStyle]}>{errorTxt} </Text>
      ) : null}
    </View>
  );
};
interface TextInputFieldProps {
  inputProps: TextInputProps;
  errorTxt: string | null | undefined;
  errorStyle?: StyleProp<TextStyle>;
  ref?: React.LegacyRef<TextInput>;
  valueStyle?: StyleProp<TextStyle>;
}
export const TextInputField1 = ({
  inputProps,
  errorTxt,
  errorStyle,
  ref,
  valueStyle,
}: TextInputFieldProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        ref={ref}
        value={inputProps.value}
        onChangeText={txt => {
          inputProps.onChangeText(txt);
        }}
        style={[
          {
            borderColor: MyColors.secondary,
            borderWidth: 2,

            borderRadius: 5,
            paddingHorizontal: 10,
            width: '45%',
            fontSize: 14,
            color: inputProps.editable
              ? MyColors.primary
              : MyColors.disableGrey,
          },
          valueStyle,
        ]}
        // autoFocus={true}
        {...inputProps}
      />
      {errorTxt ? (
        <Text style={[{color: MyColors.red}, errorStyle]}>{errorTxt} </Text>
      ) : null}
    </View>
  );
};

interface RatingInputFieldProps {
  onChange: (rating: number) => void;
  value: number;
  error?: string;
  errorStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
export const RatingInputField = ({
  onChange,
  value,
  error,
  containerStyle,
  errorStyle,
}: RatingInputFieldProps) => {
  return (
    <View style={[containerStyle]}>
      <Rating
        imageSize={40}
        startingValue={value || 0}
        onFinishRating={onChange}
        minValue={1}
        ratingColor={MyColors.primary}
        style={{color: MyColors.primary}}
      />
      {error ? (
        <Text style={[{color: MyColors.red}, errorStyle]}>{error} </Text>
      ) : null}
    </View>
  );
};

export const TextAreaInputField = ({
  inputProps,
  errorTxt,
  errorStyle,
}: TextInputFieldProps) => {
  return (
    <View>
      <TextInput
        style={{
          borderColor: MyColors.secondary,
          borderWidth: 2,
          paddingHorizontal: 10,
          borderRadius: 5,
          fontSize: 16,
          color: inputProps.editable ? MyColors.primary : MyColors.disableGrey,
          marginTop: 10,
        }}
        multiline={true}
        numberOfLines={2}
        {...inputProps}
      />
      {errorTxt ? (
        <Text style={[{color: MyColors.red}, errorStyle]}>{errorTxt} </Text>
      ) : null}
    </View>
  );
};

export const getKeyboardType = (type: string): string => {
  let keyboardType: any = {
    '0': 'default',
    '1': 'email-address',
    '2': 'numeric',
    '3': 'phone-pad',
    '4': 'number-pad',
    '5': 'decimal-pad',
  };

  return keyboardType[type];
};

interface RadioGroupInputFieldProps {
  onChange: (value: any) => void;
  value: any;
  listItems: any[];
  readOnly: boolean;
  error?: string;
  optionStyle?: StyleProp<ViewStyle>;
}
export const RadioGroupInputField = (props: RadioGroupInputFieldProps) => {
  return (
    <View>
      <RadioButton.Group
        onValueChange={(value: string) => props.onChange(value)}
        value={props.value}>
        <View style={[props.optionStyle]}>
          {props.listItems.map((v: any) => {
            return (
              <RadioButton.Item
                key={v.label}
                label={t(v.label)}
                disabled={props.readOnly || v.disabled}
                color={MyColors.primary}
                position="trailing"
                labelStyle={{fontSize: 16}}
                value={v.value}
              />
            );
          })}
        </View>
      </RadioButton.Group>
      {props.error ? (
        <Text style={{color: MyColors.red}}>{props.error} </Text>
      ) : null}
    </View>
  );
};

export const RadioGroupInputField2 = (props: any) => {
  return (
    <View>
      <RadioButton.Group
        onValueChange={(value: string) => props.input.onChange(value)}
        value={props.input.value}>
        <View>
          {props.listItems.map((v: any) => {
            return (
              <RadioButton.Item
                key={v.label}
                label={t(v.label)}
                disabled={props.readOnly}
                color={MyColors.primary}
                position="trailing"
                labelStyle={{fontSize: 22}}
                value={v.value}
              />
            );
          })}
        </View>
      </RadioButton.Group>
      {props.meta.error ? (
        <Text style={{color: MyColors.red}}>{props.meta.error} </Text>
      ) : null}
    </View>
  );
};

interface CheckBoxGroupInputFieldProps {
  listItems: KeyValueViewModel[];
  value: any;
  readOnly: boolean;
  onChange: (value: any) => void;
  error: string;
}

export const CheckBoxGroupInputField = (
  props: CheckBoxGroupInputFieldProps,
) => {
  return (
    <View>
      <CheckBoxGroup
        onChange={(value: any) => {
          if (!props.value) {
            props.onChange([value]);
            return;
          }
          if (props.value && !props.value.includes(value)) {
            props.onChange([...props.value, value]);
          } else {
            const v = props.value.filter(v => v !== value);
            props.onChange(v);
          }
        }}
        readOnly={props.readOnly}
        listItem={props.listItems}
        values={props?.value || []}
      />

      {props.error ? (
        <Text style={{color: MyColors.red}}>{props.error} </Text>
      ) : null}
    </View>
  );
};

export const CheckBoxGroupInputField2 = (props: any) => {
  return (
    <View>
      <CheckBoxGroup
        onChange={(value: any) => {
          value = value.split(',').filter(Boolean).toString();
          if (value.includes(props.noneValue)) {
            value = value
              .split(',')
              .filter((v: string) => v === props.noneValue)
              .toString();
            props.input.onChange(value);
          } else {
            props.input.onChange(value);
          }
        }}
        noneValue={props.noneValue}
        readOnly={props.readOnly}
        listItem={props.listItems}
        values={props.input.value}
      />

      {props.meta.error ? (
        <Text style={{color: MyColors.red}}>{props.meta.error} </Text>
      ) : null}
    </View>
  );
};

interface InputProps {
  value: string;
  onChange: (v: any) => void;
}
interface MetaProps {
  error?: string;
}
interface DropdownInputFieldProps {
  onChange: (v: any) => void;
  listItems: KeyValueViewModel[];
  value: any;
  disabled: boolean;
  errorTxt: string | null | undefined;
}
export const DropdownInputField = (props: DropdownInputFieldProps) => {
  return (
    <>
      <RNPickerSelect
        pickerProps={{
          mode: 'dialog',
          numberOfLines: 3,
          itemStyle: {fontSize: 36, color: MyColors.DarkRed},
        }}
        textInputProps={{multiline: true}}
        placeholder={{
          label: 'தேர்ந்தெடுக்கவும்',
          value: undefined,
          color: MyColors.grey,
        }}
        useNativeAndroidPickerStyle={false}
        style={{
          viewContainer: {
            alignItems: 'stretch',
          },
          inputAndroidContainer: {
            marginVertical: 10,
            borderWidth: 2,
            borderRadius: 5,
            borderColor: MyColors.secondary,
          },
          inputAndroid: {
            color: MyColors.primary,
            fontSize: 12,
          },
        }}
        value={props.value}
        onValueChange={value => props.onChange(value)}
        items={props.listItems}
        disabled={props.disabled}
      />

      {props.errorTxt ? (
        <Text style={{color: MyColors.red}}>{props.errorTxt} </Text>
      ) : null}
    </>
  );
};

export const DatePickerInputField = (props: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <View>
        <TouchableOpacity
          onPress={() => {
            setOpen(true);
          }}>
          <TextInput
            keyboardType="numeric"
            defaultValue=""
            value={
              props.input.value ? formattedMonthNameDate(props.input.value) : ''
            }
            style={{
              borderBottomColor: '#d3d3d3',
              borderBottomWidth: 2,
              fontSize: 20,
              color: MyColors.black,
            }}
            //pointerEvents="none"
            editable={false}
            caretHidden={true}
          />
        </TouchableOpacity>
        <DatePicker
          maximumDate={props?.maximumDate}
          minimumDate={props?.minimumDate}
          mode="date"
          modal={true}
          open={open}
          date={new Date()}
          onCancel={() => {
            setOpen(false);
          }}
          onConfirm={(date: any) => {
            props.input.onChange(date);
            setOpen(false);
          }}
        />
        {props.meta.error ? (
          <Text style={{color: MyColors.red}}>{props.meta.error} </Text>
        ) : null}
      </View>
    </>
  );
};

const CheckBoxGroup = ({listItem, values, onChange, readOnly}: any) => {
  const onValueChange = (vi: any) => {
    onChange(vi);
  };

  return (
    <View>
      {listItem.map((value: any) => {
        return (
          <View
            key={value.label}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox.Item
              disabled={readOnly}
              label={value.label}
              color={MyColors.primary}
              position={'leading'}
              uncheckedColor={MyColors.primary}
              status={
                values && values?.includes(value?.value)
                  ? 'checked'
                  : 'unchecked'
              }
              onPress={() => {
                onValueChange(value.value);
              }}
            />
            {/* <Text
              style={{
                fontSize: 16,
                color: MyColors.primary,
                fontWeight: value.mandatory ? 'bold' : 'normal',
              }}>
              {t(value.label)}
              {value.mandatory ? (
                <Text style={{color: MyColors.red}}>*</Text>
              ) : null}
            </Text> */}
          </View>
        );
      })}
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 20,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: MyColors.secondary,
    borderRadius: 5,
    // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 40,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: MyColors.secondary,
    borderRadius: 8,
    height: 50,

    // to ensure the text is never behind the icon
  },
});
