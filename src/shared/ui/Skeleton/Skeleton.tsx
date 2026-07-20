import { Skeleton as ChakraSkeleton } from "@chakra-ui/react";
import type { SkeletonProps as ChakraSkeletonProps } from "@chakra-ui/react";

export type SkeletonProps = ChakraSkeletonProps;

export function Skeleton(props: SkeletonProps) {
  return <ChakraSkeleton rounded="md" {...props} />;
}
