import { Input as ChakraInput } from "@chakra-ui/react";
import type { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export type InputProps = ChakraInputProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  return <ChakraInput ref={ref} variant="outline" {...props} />;
});
