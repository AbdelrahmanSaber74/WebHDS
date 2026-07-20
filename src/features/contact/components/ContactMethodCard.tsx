import { Box, Heading, Stack, Text, chakra } from "@chakra-ui/react";
import { Headphones, Mail, Phone, Send } from "lucide-react";
import type { ReactNode } from "react";
import { Card } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import type { CompanyContactChannel } from "@/features/company/types";
import type { ContactMethodContent } from "@/features/contact/types";

const methodIcons: Record<ContactMethodContent["id"], ReactNode> = {
  email: <Mail aria-hidden="true" size={22} />,
  phone: <Phone aria-hidden="true" size={22} />,
  sales: <Send aria-hidden="true" size={22} />,
  support: <Headphones aria-hidden="true" size={22} />,
};

export type ContactMethodCardProps = {
  channel: CompanyContactChannel;
  method: ContactMethodContent;
};

export function ContactMethodCard({ channel, method }: ContactMethodCardProps) {
  const { t } = useI18n();

  return (
    <Card as="article" h="full" p="6" variant="elevated">
      <Stack gap="5" h="full">
        <Box
          alignItems="center"
          aria-hidden="true"
          bg="brand.soft"
          color="brand.solid"
          display="inline-flex"
          h="11"
          justifyContent="center"
          rounded="lg"
          w="11"
        >
          {methodIcons[method.id]}
        </Box>
        <Stack gap="2">
          <Heading as="h3" fontSize="xl">
            {t(method.title)}
          </Heading>
          <Text color="fg.muted" lineHeight="relaxed">
            {t(method.description)}
          </Text>
        </Stack>
        <Box mt="auto">
          <Text color="fg.subtle" fontSize="sm">
            {t(channel.label)}
          </Text>
          <chakra.a
            color="brand.solid"
            fontWeight="semibold"
            href={channel.href}
            wordBreak="break-word"
          >
            {channel.value}
          </chakra.a>
        </Box>
      </Stack>
    </Card>
  );
}
