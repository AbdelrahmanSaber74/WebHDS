import { Box, Button, Collapsible, Stack, Text } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

export type AccordionProps = {
  items: AccordionItem[];
};

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <Stack gap="3">
      {items.map((item) => {
        const isOpen = item.id === openId;

        return (
          <Box key={item.id} border="1px solid" borderColor="border.subtle" rounded="card">
            <Collapsible.Root open={isOpen}>
              <Collapsible.Trigger asChild>
                <Button
                  aria-expanded={isOpen}
                  justifyContent="space-between"
                  variant="ghost"
                  w="full"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  {item.title}
                  <ChevronDown aria-hidden="true" size={18} />
                </Button>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Text color="fg.muted" px="4" pb="4">
                  {item.content}
                </Text>
              </Collapsible.Content>
            </Collapsible.Root>
          </Box>
        );
      })}
    </Stack>
  );
}
