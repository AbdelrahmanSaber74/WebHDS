import { Heading, Stack, Text } from "@chakra-ui/react";
import { Card } from "@/shared/ui";

export type AboutMetricCardProps = {
  label: string;
  value: string;
};

export function AboutMetricCard({ label, value }: AboutMetricCardProps) {
  return (
    <Card h="full" variant="glass">
      <Stack gap="2">
        <Heading as="p" color="brand.primary" fontSize={{ base: "3xl", md: "4xl" }}>
          {value}
        </Heading>
        <Text color="fg.muted" fontWeight="medium">
          {label}
        </Text>
      </Stack>
    </Card>
  );
}
