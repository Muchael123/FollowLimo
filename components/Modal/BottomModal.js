import { View, Text } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import React, { useEffect, useState } from "react";
import { COLORS, SIZES, FONTS, icons } from "../../constants";
import IconButton from "../IconButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import Login from "./Login";

const BottomModal = ({ isShown, HandleArrow, modalType }) => {
  return (
    <View
      style={{
        width: SIZES.width,
        position: "absolute",
        bottom: 0,
        display: isShown ? "flex" : "none",
        padding: SIZES.padding,
        height: SIZES.height - SIZES.height * 0.1,
        maxHeight: SIZES.height - SIZES.height * 0.09,
        backgroundColor: COLORS.backgroundPrimary,
        borderTopLeftRadius: SIZES.radius * 3,
        borderTopRightRadius: SIZES.radius * 3,
      }}
    >
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        keyboardDismissMode="on-drag"
        extraScrollHeight={SIZES.height * 0.1}
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            gap: SIZES.padding / 2,
          }}
        >
          <TouchableOpacity onPress={HandleArrow}>
            <IconButton icon={icons.angle_arrow_left} />
          </TouchableOpacity>
        </View>
        {modalType === "LOGIN" && <Login />}
        <Text></Text>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default BottomModal;
