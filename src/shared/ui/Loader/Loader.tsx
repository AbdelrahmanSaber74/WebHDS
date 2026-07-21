import { Spinner, VStack, Text } from "@chakra-ui/react";

export type LoaderProps = {
  label?: string;
};

export function Loader({ label }: LoaderProps) {
  return (
    <VStack
      gap="3"
      role="status"
      aria-live="polite"
      minH="70vh"
      justifyContent="center"
      alignItems="center"
      w="full"
    >
      <Spinner color="brand.primary" size="lg" />
      {label ? <Text color="fg.muted" fontSize="sm">{label}</Text> : null}
    </VStack>
  );
}
