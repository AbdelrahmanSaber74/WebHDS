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
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Stack gap="3">
      {items.map((item) => {
        const isOpen = item.id === openId;

        return (
          <Box
            key={item.id}
            bg="bg.surface"
            border="1px solid"
            borderColor={isOpen ? "brand.primary" : "border.subtle"}
            boxShadow={isOpen ? "sm" : "none"}
            rounded="card"
            transition="all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
            overflow="hidden"
          >
            <Collapsible.Root open={isOpen}>
              <Collapsible.Trigger asChild>
                <Button
                  aria-expanded={isOpen}
                  justifyContent="space-between"
                  variant="ghost"
                  w="full"
                  h="auto"
                  py="4.5"
                  px="5"
                  color="fg.default"
                  fontWeight="semibold"
                  fontSize="md"
                  textAlign="start"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  _hover={{ bg: "transparent", color: "brand.primary" }}
                  _active={{ bg: "transparent" }}
                >
                  <Text as="span" pe="4">
                    {item.title}
                  </Text>
                  <Box
                    as="span"
                    flexShrink={0}
                    transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                    transition="transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                    display="inline-flex"
                  >
                    <ChevronDown aria-hidden="true" size={18} />
                  </Box>
                </Button>
              </Collapsible.Trigger>
              <Collapsible.Content>
                <Box px="5" pb="5" pt="1">
                  <Text color="fg.muted" fontSize="sm" lineHeight="relaxed">
                    {item.content}
                  </Text>
                </Box>
              </Collapsible.Content>
            </Collapsible.Root>
          </Box>
        );
      })}
    </Stack>
  );
}
