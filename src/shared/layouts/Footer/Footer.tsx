import { Box, HStack, Input, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Button } from "@/shared/ui";
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
  phone?: string;
  email?: string;
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
  officesTitle?: string;
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
  officesTitle,
}: FooterProps) {
  return (
    <Box
      as="footer"
      bg="bg.footer"
      borderTop="1px solid"
      borderColor="border.subtle"
      color="fg.default"
      position="relative"
      pt="16"
      pb="8"
    >
      <Container>
        {/* Main Grid */}
        <SimpleGrid
          columns={{ base: 1, lg: 12 }}
          gap={{ base: "10", lg: "12" }}
          pb="12"
        >
          {/* Column 1: Brand details & Social Icons (span 3) */}
          <Stack gap="5" gridColumn={{ lg: "span 3" }} maxW="md">
            <Box>{brand}</Box>
            {description ? (
              <Text color="fg.muted" fontSize="sm" lineHeight="relaxed">
                {description}
              </Text>
            ) : null}
            {socialLinks.length > 0 ? (
              <HStack gap="3" wrap="wrap" pt="2">
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
                      h="9"
                      w="9"
                      href={link.href}
                      key={link.href}
                      placeContent="center"
                      rounded="full"
                      transition="all 0.2s"
                      _hover={{
                        color: "brand.primary",
                        borderColor: "brand.primary",
                        bg: "brand.soft",
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

          {/* Column 2: Navigation Links & Offices (span 6) */}
          <SimpleGrid columns={{ base: 1, sm: 2, xl: 5 }} gap="8" gridColumn={{ lg: "span 6" }}>
            {columns.map((column) => (
              <Stack key={column.title} gap="4">
                <Text fontWeight="semibold" fontSize="sm" color="fg.default" letterSpacing="wide">
                  {column.title}
                </Text>
                <Stack gap="3">
                  {column.links
                    .filter((link) => link.isEnabled ?? true)
                    .map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        color="fg.muted"
                        fontSize="sm"
                        display="inline-flex"
                        transition="color 0.2s"
                        _hover={{
                          color: "brand.primary",
                          textDecoration: "none",
                        }}
                      >
                        {link.label}
                      </Link>
                    ))}
                </Stack>
              </Stack>
            ))}

            {/* Offices Section */}
            {offices.length > 0 ? (
              <Stack gap="4" gridColumn={{ base: "1", sm: "span 2", xl: "span 2" }}>
                <Text fontWeight="semibold" fontSize="sm" color="fg.default" letterSpacing="wide">
                  {officesTitle || "Offices"}
                </Text>
                <HStack gap="6" align="start" wrap="wrap">
                  {offices.map((office) => (
                    <Stack key={office.id} gap="1" minW="140px" align="start">
                      <Text fontSize="xs" fontWeight="semibold" color="fg.default">
                        {office.label}
                      </Text>
                      <Text fontSize="xs" color="fg.muted" lineHeight="relaxed">
                        {office.address}
                      </Text>
                      {office.phone ? (
                        <Link href={`tel:${office.phone.replace(/\s+/g, '')}`} fontSize="xs" color="fg.muted" dir="ltr" display="inline-block" _hover={{ color: "brand.primary", textDecoration: "none" }}>
                          {office.phone}
                        </Link>
                      ) : null}
                      {office.email ? (
                        <Link href={`mailto:${office.email}`} fontSize="xs" color="fg.muted" _hover={{ color: "brand.primary", textDecoration: "none" }}>
                          {office.email}
                        </Link>
                      ) : null}
                    </Stack>
                  ))}
                </HStack>
              </Stack>
            ) : null}
          </SimpleGrid>

          {/* Column 3: Newsletter & Contact info (span 3) */}
          <Stack gap="5" gridColumn={{ lg: "span 3" }}>
            {newsletter ? (
              <Stack gap="3">
                <Text fontWeight="semibold" fontSize="sm" color="fg.default">
                  {newsletter.title}
                </Text>
                <Text color="fg.muted" fontSize="xs" lineHeight="relaxed">
                  {newsletter.description}
                </Text>
                <Stack as="form" gap="2.5" pt="1">
                  <Input
                    aria-label={newsletter.inputLabel}
                    placeholder={newsletter.inputPlaceholder}
                    type="email"
                    size="sm"
                    bg="bg.surface"
                    borderColor="border.subtle"
                    rounded="md"
                    px="3.5"
                    py="2"
                    fontSize="sm"
                    _focusVisible={{ borderColor: "brand.primary", boxShadow: "none" }}
                  />
                  <Button type="button" size="sm" w="full" rounded="md">
                    {newsletter.submitLabel}
                  </Button>
                </Stack>
              </Stack>
            ) : null}

            {contactItems.length > 0 ? (
              <Stack gap="2.5" pt="1">
                {contactItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    color="fg.muted"
                    fontSize="sm"
                    display="inline-flex"
                    transition="color 0.2s"
                    _hover={{
                      color: "brand.primary",
                      textDecoration: "none",
                    }}
                  >
                    <Text as="span" fontWeight="medium" color="fg.default" mr="1">
                      {item.label}:
                    </Text>{" "}
                    {item.value}
                  </Link>
                ))}
              </Stack>
            ) : null}

          </Stack>
        </SimpleGrid>

        {/* Bottom Panel: Copyright and Legal Links */}
        <Stack
          borderTop="1px solid"
          borderColor="border.subtle"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "start", md: "center" }}
          py="6"
          gap="4"
        >
          <Text color="fg.muted" fontSize="xs">
            {copyright}
          </Text>

          {legalLinks.length > 0 ? (
            <HStack gap="5" wrap="wrap">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  color="fg.muted"
                  fontSize="xs"
                  transition="color 0.2s"
                  _hover={{
                    color: "brand.primary",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </HStack>
          ) : null}
        </Stack>
      </Container>
    </Box>
  );
}
