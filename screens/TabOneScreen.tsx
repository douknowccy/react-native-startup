import * as React from "react";
import { StyleSheet, SafeAreaView, PixelRatio } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
const { getPixelSizeForLayoutSize, getFontScale, get } = PixelRatio;
export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  console.log({
    rpx: getPixelSizeForLayoutSize(10),
    getFontScale: getFontScale(),
    get: get(),
  });
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: getPixelSizeForLayoutSize(10),
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
