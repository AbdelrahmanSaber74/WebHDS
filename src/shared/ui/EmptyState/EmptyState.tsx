import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type EmptyStateProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  icon?: ReactNode;
};

export function EmptyState({ action, description, icon, title }: EmptyStateProps) {
  return (
    <Box border="1px solid" borderColor="border.subtle" p="8" rounded="card" textAlign="center">
      <VStack gap="4">
        {icon}
        <Heading size="md">{title}</Heading>
        {description ? <Text color="fg.muted">{description}</Text> : null}
        {action}
      </VStack>
    </Box>
  );
}
