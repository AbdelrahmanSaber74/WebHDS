import { Box, Stack, Text, chakra } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type FormFieldProps = {
  children: ReactNode;
  error?: string;
  helperText?: string;
  id: string;
  label: string;
  required?: boolean;
};

export function FormField({ children, error, helperText, id, label, required }: FormFieldProps) {
  const errorId = `${id}-error`;
  const helperId = `${id}-helper`;

  return (
    <Stack gap="2">
      <chakra.label color="fg.default" fontSize="sm" fontWeight="semibold" htmlFor={id}>
        {label}
        {required ? (
          <Text as="span" color="danger" ms="1">
            *
          </Text>
        ) : null}
      </chakra.label>
      {children}
      {helperText ? (
        <Text color="fg.subtle" fontSize="xs" id={helperId}>
          {helperText}
        </Text>
      ) : null}
      {error ? (
        <Box color="danger" fontSize="sm" id={errorId} role="alert">
          {error}
        </Box>
      ) : null}
    </Stack>
  );
}
