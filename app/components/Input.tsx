import {
  Input as InputNativeBase,
  IInputProps,
  Text,
  FormControl,
} from "native-base";
import React from "react";

type Props = IInputProps & {
  errorMessage?: string | null;
};

export const Input = ({ errorMessage = null, isInvalid, ...rest }: Props) => {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid}>
      <InputNativeBase
        bg="white"
        w="full"
        fontSize={"md"}
        className="h-14"
        isInvalid={invalid}
        _focus={{
          bg: "white",
          borderWidth: 1,
          borderColor: "gray.400",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage _text={{ color: "red.500" }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
