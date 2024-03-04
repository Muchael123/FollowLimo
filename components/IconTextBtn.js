import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants";

const IconTextBtn = ({ containerStyle, onPress, icon, label }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        height: 55,
        borderWidth: 1,
        borderRadius: 30,
        width: '100%',
        borderColor: COLORS.gray500,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
        }}
      />
      <Text
        style={{
          ...FONTS.l2,
          marginLeft: SIZES.radius,
          color: COLORS.gray50,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default IconTextBtn;
