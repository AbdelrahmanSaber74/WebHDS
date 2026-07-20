import { Box, SimpleGrid, Stack } from "@chakra-ui/react";
import { Card } from "../Card";
import { Skeleton } from "../Skeleton";

export type CardSkeletonProps = {
  lines?: number;
};

export type GridSkeletonProps = {
  count?: number;
};

export function CardSkeleton({ lines = 3 }: CardSkeletonProps) {
  return (
    <Card aria-hidden="true">
      <Stack gap="4">
        <Skeleton h="iconLg" w="iconLg" />
        <Skeleton h="5" w="70%" />
        {Array.from({ length: lines }).map((_, index) => (
          <Skeleton key={index} h="3" w={index === lines - 1 ? "82%" : "full"} />
        ))}
      </Stack>
    </Card>
  );
}

export function GridSkeleton({ count = 6 }: GridSkeletonProps) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="5">
      {Array.from({ length: count }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </SimpleGrid>
  );
}

export function PageHeroSkeleton() {
  return (
    <SimpleGrid alignItems="center" columns={{ base: 1, lg: 2 }} gap={{ base: "8", lg: "12" }}>
      <Stack gap="5">
        <Skeleton h="5" w="32" />
        <Skeleton h={{ base: "16", md: "20" }} w="full" />
        <Skeleton h="5" w="90%" />
        <Skeleton h="5" w="72%" />
        <Stack direction={{ base: "column", sm: "row" }} gap="3">
          <Skeleton h="11" w="36" />
          <Skeleton h="11" w="36" />
        </Stack>
      </Stack>
      <Box>
        <Skeleton aspectRatio={16 / 10} rounded="panel" />
      </Box>
    </SimpleGrid>
  );
}
