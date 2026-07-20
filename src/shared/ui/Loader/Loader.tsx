import { Spinner, VStack, Text } from "@chakra-ui/react";

export type LoaderProps = {
  label?: string;
};

export function Loader({ label }: LoaderProps) {
  return (
    <VStack gap="3" role="status" aria-live="polite">
      <Spinner color="brand.primary" />
      {label ? <Text color="fg.muted">{label}</Text> : null}
    </VStack>
  );
}
