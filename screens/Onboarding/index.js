import React, { useRef, useState } from "react";
import { COLORS, FONTS, SIZES, constants } from "../../constants/index";
import { View, Text, FlatList, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import { TextButton } from "../../components";

const Onboarding = ({ navigation }) => {
  const ControlX = SIZES.width / 2;
  const currentIndex = useRef(0);
  const ScreenFlatListRef = useRef();
  const TitleFlatListRef = useRef();
  const [isLastItem, setIsLastItem] = useState(false);
  const HandleNextPress = () => {
    if (currentIndex.current < constants.onboarding_screens.length - 1) {
      console.log("currentIndex.current", currentIndex.current);
      currentIndex.current += 1;
      const nextIndex = currentIndex.current; // corrected
      const offset = nextIndex * SIZES.width;
      ScreenFlatListRef?.current?.scrollToOffset({
        offset,
        animated: true,
      });
      TitleFlatListRef?.current?.scrollToOffset({
        offset, // corrected
        animated: true,
      });
      if (currentIndex.current === constants.onboarding_screens.length - 1) {
        setIsLastItem(true);
      }
    } else {
      navigation.navigate("Welcome");
    }
     
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Images List */}
      <View style={{ flex: 2, backgroundColor: COLORS.primary50 }}>
        <FlatList
          ref={ScreenFlatListRef}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.onboarding_screens}
          keyExtractor={(item) => `onboarding${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: SIZES.width,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{
                    width: SIZES.width,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
      {/* Title and description */}
      <View style={{ flex: 1, backgroundColor: COLORS.gray900 }}>
        <Svg
          style={{
            position: "absolute",
            top: -100,
          }}
          width={SIZES.width}
          height={100}
        >
          <Path
            style={{ width: SIZES.width, height: 100 }}
            d={`M 0 20 Q ${ControlX} 100 ${SIZES.width} 20 L ${SIZES.width} 100 L 0 100 Z`}
            fill={COLORS.gray900}
          />
        </Svg>
        <FlatList
          ref={TitleFlatListRef}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          data={constants.onboarding_screens}
          keyExtractor={(item) => `onboarding${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  paddingHorizontal: SIZES.radius,
                  width: SIZES.width,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    ...FONTS.h1,
                    textAlign: "center",
                    color: COLORS.primary100,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    ...FONTS.pr2,
                    textAlign: "center",
                    color: COLORS.primary100,
                  }}
                >
                  {item.desc}
                </Text>
              </View>
            );
          }}
        />
        <TextButton
          Label={isLastItem ? "Let's Get Started" : "Next"}
          contentStyle={{
            marginHorizontal: SIZES.padding,
            marginBottom: SIZES.padding,
          }}
          onPress={HandleNextPress}
        />
      </View>
    </View>
  );
};

export default Onboarding;
