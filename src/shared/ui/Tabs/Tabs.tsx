import { Box, Button, HStack } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

export type TabsProps = {
  activeId: string;
  items: TabItem[];
  onChange: (id: string) => void;
};

export function Tabs({ activeId, items, onChange }: TabsProps) {
  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <Box>
      <HStack as="div" role="tablist" gap="2" flexWrap="wrap">
        {items.map((item) => (
          <Button
            key={item.id}
            aria-selected={item.id === activeItem.id}
            role="tab"
            size="sm"
            variant={item.id === activeItem.id ? "solid" : "subtle"}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </Button>
        ))}
      </HStack>
      <Box mt="6" role="tabpanel">
        {activeItem.content}
      </Box>
    </Box>
  );
}
