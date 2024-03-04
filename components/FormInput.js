import { View, Text, TextInput } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

const FormInput = ({
  rootContainerStyle,
  containerStyle,
  placeholder,
  inputContainerStyle,
  prependComponent,
  AppendComponent,
  inputStyle,
  label = "",
  value = "",
  onChange,
  onPress,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  maxLength,
  placeholderTextColor = COLORS.contentInverseTertiary,
  editable,
}) => {
  return (
    <View
      styles={{
        ...rootContainerStyle,
      }}
    >
      {label !== "" && (
        <Text
          style={{
            ...FONTS.l3,
            color: COLORS.contentPrimary,
          }}
        >
          {label}
        </Text>
      )}
      <View
        style={{
          marginTop: SIZES.base,
          ...containerStyle,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 55,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            alignItems: "center",
            backgroundColor: COLORS.backgroundSecondary,
            ...inputContainerStyle,
          }}
        >
          {prependComponent}
          <TextInput
            style={{
              flex: 1,
              paddingVertical: 0,
              color: COLORS.contentPrimary,
              ...FONTS.pr2,
              ...inputStyle,
            }}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            autoCompleteType={autoCompleteType}
            maxLength={maxLength}
            onChange={onChange}
            onPressIn={onPress}
            editable={editable}
          />
          {AppendComponent}
        </View>
      </View>
    </View>
  );
};

export default FormInput;
