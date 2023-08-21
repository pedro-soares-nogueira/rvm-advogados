import { Text } from "native-base";
import React, { useEffect } from "react";
import { View } from "react-native";
import WebView from "react-native-webview";

const InstagramEmbedComp = () => {
  /*   const injectedJavaScript = "";

  useEffect(() => {
    const injectedJavaScript = `
    (function (d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/cdn/ht.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "EmbedSocialHashtagScript");
  `;
  }, []); */

  return (
    <View style={{ flex: 1 }}>
      <Text>Instagram</Text>
      <WebView
        source={{
          uri: "https://embedsocial.com/api/pro_hashtag/81ee1c1741253877c49f795f57ce0c084914e0ee%22%3E",
        }}
        style={{ flex: 1, width: "100%", height: "100%" }}
      />
    </View>
  );
};

export default InstagramEmbedComp;

/* import { View } from "native-base";
import { Component } from "react";

class InstagramEmbedComp extends Component {
  componentDidMount(): void {
    (function (d, s, id) {
      var js;
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://embedsocial.com/cdn/ht.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "EmbedSocialHashtagScript");
  }

  render() {
    return (
      <View
        className="embedsocial-hashtag"
        data-ref="81ee1c1741253877c49f795f57ce0c084914e0ee"
      ></View>
    );
  }
}

export default InstagramEmbedComp; */
