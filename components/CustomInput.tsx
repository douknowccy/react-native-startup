import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  PixelRatio,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { pxToDp } from "../utils/common";
import type {
  Animated as AnimatedType,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
  TouchableWithoutFeedbackProps,
  ViewStyle,
} from "react-native";
interface InputProps {
  containerStyle?: StyleProp<ViewStyle>;
  TextStyle?: StyleProp<TextStyle>;
  value: string;
  updateValue: (value: string) => void;
  errorMessage?: string;
}

const CustomInput = (props: InputProps) => {
  const { TextStyle, value, errorMessage, updateValue, containerStyle } = props;
  const [isTextFocus, setIsTextFocus] = useState(false);
  const textRef = useRef<TextInput>(null);
  const fadeAnim = useRef(new Animated.Value(pxToDp(24))).current;
  const labelStyle = () => {
    Animated.timing(fadeAnim, {
      toValue: pxToDp(16),
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const inputOnPress = () => {
    setIsTextFocus(true);

    textRef.current?.focus();
    labelStyle();
  };

  return (
    <TouchableWithoutFeedback onPress={() => inputOnPress()}>
      <View style={styles.container}>
        <Animated.Text style={[styles.title, { fontSize: fadeAnim }]}>
          5566
        </Animated.Text>

        <TextInput
          style={isTextFocus ? { display: "flex" } : { display: "none" }}
          ref={textRef}
          value={value}
          onChangeText={(text) => updateValue(text)}
          onBlur={() => textRef.current?.blur()}
          onSubmitEditing={() => textRef.current?.blur()}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: pxToDp(64),
    width: pxToDp(335),
    paddingHorizontal: pxToDp(15),
    paddingVertical: pxToDp(5),
    borderRadius: pxToDp(10),
    backgroundColor: "rgb(44, 46, 48)",
    justifyContent: "center",
  },
  title: {
    color: "grey",
  },
});
export default CustomInput;
