import { Circle, Text } from "@chakra-ui/react";
import type { CircleProps } from "@chakra-ui/react";

export type AvatarProps = CircleProps & {
  name: string;
  src?: string;
};

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Avatar({ name, src, ...props }: AvatarProps) {
  return (
    <Circle aria-label={name} bg="bg.subtle" overflow="hidden" size="12" {...props}>
      {src ? <img src={src} alt={name} /> : <Text fontWeight="semibold">{getInitials(name)}</Text>}
    </Circle>
  );
}
