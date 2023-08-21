import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const EmbeddedWebView = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://embedsocial.com/api/pro_hashtag/81ee1c1741253877c49f795f57ce0c084914e0ee",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EmbeddedWebView;
