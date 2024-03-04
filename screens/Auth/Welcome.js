import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  images,
  constants,
} from "../../constants";
import { IconTextBtn, TextButton, BottomModal } from "../../components";
import LinearGradient from "react-native-linear-gradient";

const Welcome = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const renderHeaderImage = () => {
    return (
      <View>
        <Image
          source={images.Shamba}
          style={{
            width: SIZES.width,
            height: 250,
          }}
        />
        <LinearGradient
          colors={["rgba(0,0,0,0)", COLORS.gray900]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
      </View>
    );
  };
  const HandleModalShown = (Modal) => {
    setShowModal((prev) => !prev)
    setModalType(Modal)
  };
  function renderLoginDetails() {
    return (
      <View
        style={{
          flex: 1,
          padding: SIZES.padding,
        }}
      >
        <View>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.gray50,
            }}
          >
            Log In
          </Text>
          <Text
            style={{
              ...FONTS.ps3,
              color: COLORS.gray50,
            }}
          >
            Please choose how you would like to log in
          </Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: SIZES.padding,
          }}
        >
          <IconTextBtn
            icon={icons.smartphone}
            label="Continue with Phone Number"
            onPress={() => HandleModalShown(constants.login)}
            containerStyle={{
              borderColor: COLORS.primary500,
              backgroundColor: COLORS.primary500,
            }}
          />
          <IconTextBtn
            icon={icons.google_logo}
            label="Continue with Google"
            onPress={() => console.log("Google is clicked")}
          />
          <IconTextBtn
            icon={icons.apple_logo}
            label="Continue with Apple"
            onPress={() => console.log("Apple is clicked")}
          />
          <IconTextBtn
            icon={icons.fb_logo}
            label="Continue with Facebook"
            onPress={() => console.log("Fb is clicked")}
          />
          <View
            style={{
              width: "100%",
            }}
          >
            <Text
              style={{
                ...FONTS.l3,
                textAlign: "center",
                color: COLORS.gray400,
              }}
            >
              Dont have an account?
            </Text>
            <TextButton
              contentStyle={{
                marginTop: SIZES.padding,
                width: "100%",
              }}
              Label="Create an Account"
            />
          </View>
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.gray400,
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.gray900,
          flex: 1,
          overflow: "hidden",
        }}
      >
        {renderHeaderImage()}
        {renderLoginDetails()}
        {/* modal */}
        <BottomModal isShown={ showModal} HandleArrow={HandleModalShown} modalType={modalType} />
      </View>
    </View>
  );
};

export default Welcome;
