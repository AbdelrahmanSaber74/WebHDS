import { Textarea as ChakraTextarea } from "@chakra-ui/react";
import type { TextareaProps as ChakraTextareaProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export type TextareaProps = ChakraTextareaProps;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(props, ref) {
    return <ChakraTextarea ref={ref} variant="outline" {...props} />;
  },
);
