import React, { useState } from "react";
import { StyleSheet, SafeAreaView, PixelRatio } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import CustomInput from "../components/CustomInput";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [formData, setFormData] = useState<formDataType>({
    username: "",
    password: "",
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <CustomInput
          value={formData.username as string}
          updateValue={(value) => setFormData({ ...formData, username: value })}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 500,
  },
});
