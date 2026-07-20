import { Box, HStack, Input, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Button, Card } from "@/shared/ui";
import { Container } from "../Container";

export type FooterLink = {
  label: string;
  href: string;
  isEnabled?: boolean;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterContactItem = {
  label: string;
  value: string;
  href: string;
};

export type FooterOffice = {
  id: string;
  label: string;
  address: string;
  contactHref: string;
};

export type FooterSocialLink = FooterLink & {
  icon?: ReactNode;
};

export type FooterNewsletter = {
  title: string;
  description: string;
  inputLabel: string;
  inputPlaceholder: string;
  submitLabel: string;
};

export type FooterProps = {
  brand: ReactNode;
  columns: FooterColumn[];
  contactItems?: FooterContactItem[];
  copyright: string;
  description?: string;
  legalLinks?: FooterLink[];
  newsletter?: FooterNewsletter;
  offices?: FooterOffice[];
  socialLinks?: FooterSocialLink[];
  trustItems?: string[];
};

export function Footer({
  brand,
  columns,
  contactItems = [],
  copyright,
  description,
  legalLinks = [],
  newsletter,
  offices = [],
  socialLinks = [],
  trustItems = [],
}: FooterProps) {
  return (
    <Box
      as="footer"
      bg="bg.footer"
      borderTop="1px solid"
      borderColor="border.subtle"
      color="fg.default"
      pt="sectionYCompact"
    >
      <Container>
        <SimpleGrid columns={{ base: 1, lg: 12 }} gap={{ base: "8", lg: "10" }} pb="10">
          <Stack gap="5" gridColumn={{ lg: "span 4" }}>
            <Box>{brand}</Box>
            {description ? (
              <Text color="fg.muted" maxW="md">
                {description}
              </Text>
            ) : null}
            {socialLinks.length > 0 ? (
              <HStack gap="2" wrap="wrap">
                {socialLinks
                  .filter((link) => link.isEnabled ?? true)
                  .map((link) => (
                    <Link
                      aria-label={link.label}
                      bg="bg.surface"
                      border="1px solid"
                      borderColor="border.subtle"
                      color="fg.muted"
                      display="inline-flex"
                      h="10"
                      href={link.href}
                      key={link.href}
                      placeContent="center"
                      rounded="full"
                      w="10"
                      _hover={{
                        color: "brand.primary",
                        textDecoration: "none",
                        transform: "translateY(-2px)",
                      }}
                    >
                      {link.icon ?? link.label}
                    </Link>
                  ))}
              </HStack>
            ) : null}
          </Stack>

          <SimpleGrid columns={{ base: 1, sm: 2, xl: 3 }} gap="7" gridColumn={{ lg: "span 5" }}>
            {columns.map((column) => (
              <Stack key={column.title} gap="3">
                <Text fontWeight="semibold">{column.title}</Text>
                <Stack gap="2">
                  {column.links
                    .filter((link) => link.isEnabled ?? true)
                    .map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        color="fg.muted"
                        _hover={{ color: "brand.primary", textDecoration: "none" }}
                      >
                        {link.label}
                      </Link>
                    ))}
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>

          <Stack gap="4" gridColumn={{ lg: "span 3" }}>
            {newsletter ? (
              <Card variant="feature" p="5">
                <Stack gap="3">
                  <Text fontWeight="semibold">{newsletter.title}</Text>
                  <Text color="fg.muted" fontSize="sm">
                    {newsletter.description}
                  </Text>
                  <Stack as="form" gap="2">
                    <Input
                      aria-label={newsletter.inputLabel}
                      placeholder={newsletter.inputPlaceholder}
                      type="email"
                    />
                    <Button type="button" size="sm">
                      {newsletter.submitLabel}
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            ) : null}

            {contactItems.length > 0 ? (
              <Stack gap="2">
                {contactItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    color="fg.muted"
                    _hover={{ color: "brand.primary", textDecoration: "none" }}
                  >
                    <Text as="span" fontWeight="semibold" color="fg.default">
                      {item.label}
                    </Text>{" "}
                    {item.value}
                  </Link>
                ))}
              </Stack>
            ) : null}
          </Stack>
        </SimpleGrid>

        {offices.length > 0 || trustItems.length > 0 ? (
          <SimpleGrid
            borderTop="1px solid"
            borderColor="border.subtle"
            columns={{ base: 1, lg: 2 }}
            gap="6"
            py="8"
          >
            {offices.length > 0 ? (
              <SimpleGrid columns={{ base: 1, sm: 2 }} gap="4">
                {offices.map((office) => (
                  <Link
                    key={office.id}
                    href={office.contactHref}
                    _hover={{ textDecoration: "none" }}
                  >
                    <Card
                      p="4"
                      variant="outline"
                      _hover={{ borderColor: "brand.primary", boxShadow: "sm" }}
                    >
                      <Text fontWeight="semibold">{office.label}</Text>
                      <Text color="fg.muted" fontSize="sm" mt="1">
                        {office.address}
                      </Text>
                    </Card>
                  </Link>
                ))}
              </SimpleGrid>
            ) : null}

            {trustItems.length > 0 ? (
              <HStack align="start" gap="2" justify={{ lg: "flex-end" }} wrap="wrap">
                {trustItems.map((item) => (
                  <Box
                    border="1px solid"
                    borderColor="border.subtle"
                    color="fg.muted"
                    fontSize="sm"
                    fontWeight="medium"
                    key={item}
                    px="3"
                    py="2"
                    rounded="full"
                  >
                    {item}
                  </Box>
                ))}
              </HStack>
            ) : null}
          </SimpleGrid>
        ) : null}

        <HStack
          borderTop="1px solid"
          borderColor="border.subtle"
          justify="space-between"
          py="6"
          wrap="wrap"
        >
          <Text color="fg.muted" fontSize="sm">
            {copyright}
          </Text>
          {legalLinks.length > 0 ? (
            <HStack gap="4" wrap="wrap">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  color="fg.muted"
                  fontSize="sm"
                  _hover={{ color: "brand.primary", textDecoration: "none" }}
                >
                  {link.label}
                </Link>
              ))}
            </HStack>
          ) : null}
        </HStack>
      </Container>
    </Box>
  );
}
