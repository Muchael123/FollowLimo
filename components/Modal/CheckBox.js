import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, icons } from "../../constants";

const CheckBox = ({ containerStyle, isSelected, onPress, label }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: SIZES.base,
        ...containerStyle,
      }}
    >
      <TouchableOpacity
        onPress={onPress}
      >
        <Image
          source={isSelected ? icons.checkbox_on : icons.checkbox_off}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.contentPrimary,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          ...FONTS.body4,
          color: COLORS.contentPrimary,
          marginLeft: SIZES.base,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default CheckBox;
