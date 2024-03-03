
import { Text, TouchableOpacity } from "react-native";
import React from 'react'
import { COLORS, FONTS, SIZES } from "../constants";

const TextButton = ({contentStyle, Label, labelStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        height: 55,
        justifyContent: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary500,
        ...contentStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...FONTS.l2,
          color: COLORS.white,
          ...labelStyle,
        }}
      >
        {Label}
      </Text>
    </TouchableOpacity>
  );
}

export default TextButton