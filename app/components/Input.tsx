import { Input as InputNativeBase, IInputProps } from "native-base";
import React from "react";

export const Input = ({ ...rest }: IInputProps) => {
  return (
    <InputNativeBase
      bg="white"
      w="full"
      borderWidth={0}
      fontSize={"md"}
      _focus={{
        bg: "white",
        borderWidth: 1,
        borderColor: "yellow.400",
      }}
      {...rest}
    />
  );
};
