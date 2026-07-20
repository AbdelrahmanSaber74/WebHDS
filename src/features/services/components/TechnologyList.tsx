import { Wrap } from "@chakra-ui/react";
import type { ServiceTechnology } from "@/features/services/types";
import { Badge } from "@/shared/ui";

export type TechnologyListProps = {
  technologies: ServiceTechnology[];
};

export function TechnologyList({ technologies }: TechnologyListProps) {
  return (
    <Wrap gap="3">
      {technologies.map((technology) => (
        <Badge key={technology.id} variant="subtle">
          {technology.name}
        </Badge>
      ))}
    </Wrap>
  );
}
