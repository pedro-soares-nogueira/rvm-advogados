import { Box, Text, View } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";
import InstagramEmbed from "react-native-embed-instagram";

const InstagramEmbedComp = () => {
  const captionText = "Embed ERROR";

  return (
    <Box className="mx-4 mb-10 flex h-52 items-center justify-center rounded-sm border-2 border-red-600">
      {/* <InstagramEmbed
        avatarStyle={{
          width: 200,
          height: 200,
          borderRadius: 100,
        }}
        nameStyle={{
          fontSize: 20,
          fontWeight: "bold",
          color: "blue",
        }}
        renderCaption={(teste) => {
          return <Text>{teste}</Text>;
        }}
        thumbnailStyle={{}}
        showAvatar
        showCaption
        showStats
        id="18855602738"
        style={{ width: "100%" }}
      /> */}
      <Text className="font-raleway800 text-2xl text-red-600">
        {captionText}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InstagramEmbedComp;

/* 

<div class="embedsocial-hashtag" data-ref="566ba190bb31b5ee6199a9cb3f576528cefe187c"> <a class="feed-powered-by-es feed-powered-by-es-feed-new" href="https://embedsocial.com/social-media-aggregator/" target="_blank" title="Widget by EmbedSocial"> Widget by EmbedSocial<span>→</span> </a> </div> <script> (function(d, s, id) { var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName("head")[0].appendChild(js); }(document, "script", "EmbedSocialHashtagScript")); </script>

<script src="https://embedsocial.com/js/iframe.js"></script>
<iframe 
  style="border: 0; 
  width: 100%; 
  height: 100%;" 
  scrolling="no" 
  src="https://embedsocial.com/api/pro_hashtag/566ba190bb31b5ee6199a9cb3f576528cefe187c">
</iframe>
<script>iFrameResize();</script>

*/

/* 

id
style
showAvatar
showCaption
showStats
avatarStyle
nameStyle
thumbnailStyle
renderCaption

*/
