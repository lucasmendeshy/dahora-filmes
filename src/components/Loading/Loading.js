import { ActivityIndicator, View } from "react-native";
import React from "react";
import estilos from "./LoadingEstilos.js";

const Loading = () => {
  return (
    <View style={estilos.viewLoading}>
      <ActivityIndicator size="large" color="#5451a6" />
    </View>
  );
};

export default Loading;
