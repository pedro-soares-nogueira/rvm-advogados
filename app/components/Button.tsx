import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";
import React from "react";

type Props = IButtonProps & {
  title: string;
};

export const Button = ({ title, variant, ...rest }: Props) => {
  return (
    <ButtonNativeBase
      bgColor={variant === "outline" ? "transparent" : "yellow.900"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={"yellow.900"}
      w="full"
      h={"12"}
      _pressed={{
        bg: variant === "outline" ? "gray.100" : "yellow.800",
      }}
      {...rest}
    >
      <Text
        className="font-raleway700"
        color={variant === "outline" ? "yellow.800" : "white"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
};
