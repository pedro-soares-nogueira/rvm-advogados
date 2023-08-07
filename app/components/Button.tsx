import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";
import React from "react";

type Props = IButtonProps & {
  title: string;
};

export const Button = ({ title, variant, ...rest }: Props) => {
  return (
    <ButtonNativeBase
      bgColor={variant === "outline" ? "transparent" : "yellow.300"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor={"gray.500"}
      w="full"
      className="h-14"
      _pressed={{
        bg: variant === "outline" ? "gray.100" : "yellow.200",
      }}
      {...rest}
    >
      <Text
        className="font-raleway700"
        color={variant === "outline" ? "gray.500" : "black"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
};
