import { Input as InputNativeBase, IInputProps, Text } from "native-base";
import React from "react";

export const Input = ({ ...rest }: IInputProps) => {
  return (
    <>
      <InputNativeBase
        bg="white"
        w="full"
        fontSize={"md"}
        className="h-12"
        _focus={{
          bg: "white",
          borderWidth: 1,
          borderColor: "gray.400",
        }}
        {...rest}
      />
    </>
  );
};
