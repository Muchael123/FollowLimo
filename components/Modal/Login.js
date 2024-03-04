import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAwareScrollView,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, icons } from "../../constants";
import FormInput from "../FormInput";
import IconButton from "../IconButton";
import CheckBox from "./CheckBox";
import TextButton from "../TextButton";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  function renderRememberMeForgotPassword() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <CheckBox
          isSelected={rememberMe}
          onPress={() => setRememberMe(!rememberMe)}
          label={"Remember Me"}
          containerStyle={{
            marginTop: SIZES.padding,
          }}
        />
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.primary500,
              marginTop: SIZES.padding,
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      <View style={{ marginBottom: SIZES.padding }}>
        <Text
          style={{
            fontSize: SIZES.h2,
          }}
        >
          Welcome Back
        </Text>
        <Text
          style={{
            color: COLORS.gray500,
          }}
        >
          Enter your phone Number To Log In
        </Text>
      </View>
      <View>
        <FormInput
          label="Phone Number"
          placeholder={"Enter your Phone Number"}
          value={phoneNumber}
          prependComponent={
            <Image
              source={icons.smartphone}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.contentPrimary,
                marginRight: SIZES.base,
              }}
            />
          }
          onChange={(text) => setPhoneNumber(text)}
        />
        <FormInput
          rootContainerStyle={{ marginTop: SIZES.padding }}
          placeholder={"Enter Your Password"}
          value={password}
          secureTextEntry={!isVisible}
          onChange={(text) => setPassword(text)}
          prependComponent={
            <Image
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.contentPrimary,
                marginRight: SIZES.base,
              }}
              source={icons.lock}
            />
          }
          AppendComponent={
            <IconButton
              icon={isVisible ? icons.eye_off : icons.eye}
              iconStyle={{
                tintColor: COLORS.contentPrimary,
              }}
              onPress={() => setIsVisible(!isVisible)}
            />
          }
        />
      </View>
      {renderRememberMeForgotPassword()}
    </View>
  );
};

export default Login;
