import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";
import React from "react";

type Props = IButtonProps & {
  title: string;
  textSize?: number;
  mb?: number;
};

export const Button = ({ title, textSize, mb, variant, ...rest }: Props) => {
  return (
    <ButtonNativeBase
      bgColor={variant === "outline" ? "transparent" : "yellow.300"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={"yellow.700"}
      w="full"
      className="h-14"
      _pressed={{
        bg: variant === "outline" ? "yellow.50" : "yellow.200",
      }}
      _spinner={{
        color: "black",
      }}
      {...rest}
    >
      <Text
        className="font-raleway700"
        color={variant === "outline" ? "yellow.700" : "black"}
        fontSize={textSize}
        mb={mb}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
};
