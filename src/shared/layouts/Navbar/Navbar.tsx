import { Box, HStack, IconButton, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import {
  ChevronDown,
  Languages,
  Menu,
  Moon,
  Search,
  Sun,
  X,
  Code2,
  Smartphone,
  Palette,
  Cloud,
} from "lucide-react";
import type { ReactNode } from "react";
import { useCallback, useState } from "react";
import { useScrollState } from "@/shared/hooks";
import { Button } from "@/shared/ui";
import { Container } from "../Container";

export type NavbarItem = {
  label: string;
  href: string;
  isEnabled?: boolean;
};

export type NavbarMegaMenuItem = NavbarItem & {
  description?: string;
};

export type NavbarMegaMenu = {
  label: string;
  items: NavbarMegaMenuItem[];
};

export type NavbarLanguageOption = {
  label: string;
  locale: string;
};

export type NavbarProps = {
  brand: ReactNode;
  closeLabel: string;
  currentPath: string;
  items: NavbarItem[];
  language: {
    activeLocale: string;
    label: string;
    options: NavbarLanguageOption[];
    onChange: (locale: string) => void;
  };
  menuLabel: string;
  searchLabel: string;
  servicesMenu?: NavbarMegaMenu;
  theme: {
    isDark: boolean;
    label: string;
    onToggle: () => void;
  };
  cta?: {
    label: string;
    href: string;
  };
};

function isActivePath(currentPath: string, href: string) {
  if (href === "/") {
    return currentPath === href;
  }

  return currentPath === href || currentPath.startsWith(`${href}/`);
}

function getServiceIcon(href: string) {
  const path = href.toLowerCase();
  if (path.includes("web")) {
    return {
      icon: <Code2 size={20} color="#00f2fe" />,
      bg: "rgba(0, 242, 254, 0.1)",
    };
  }
  if (path.includes("mobile")) {
    return {
      icon: <Smartphone size={20} color="#3b82f6" />,
      bg: "rgba(59, 130, 246, 0.1)",
    };
  }
  if (path.includes("design") || path.includes("ux")) {
    return {
      icon: <Palette size={20} color="#ec4899" />,
      bg: "rgba(236, 72, 153, 0.1)",
    };
  }
  return {
    icon: <Cloud size={20} color="#10b981" />,
    bg: "rgba(16, 185, 129, 0.1)",
  };
}

export function Navbar({
  brand,
  closeLabel,
  cta,
  currentPath,
  items,
  language,
  menuLabel,
  searchLabel,
  servicesMenu,
  theme,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const { isScrolled } = useScrollState();
  const visibleItems = items.filter((item) => item.isEnabled ?? true);
  const visibleMegaItems = servicesMenu?.items.filter((item) => item.isEnabled ?? true) ?? [];

  const nextLanguageOption =
    language.options.find((option) => option.locale !== language.activeLocale) ??
    language.options[0];

  const toggleMenu = useCallback(() => setIsOpen((current) => !current), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);
  const openMegaMenu = useCallback(() => setIsMegaOpen(true), []);
  const closeMegaMenu = useCallback(() => setIsMegaOpen(false), []);
  const toggleTheme = useCallback(() => theme.onToggle(), [theme]);

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      transition="background var(--hds-transition-normal), box-shadow var(--hds-transition-normal)"
    >
      <Box
        borderBottom="1px solid"
        borderColor={isScrolled ? "border.subtle" : "transparent"}
        bg={isScrolled ? "bg.glass" : "transparent"}
        backdropFilter={isScrolled ? "blur(22px) saturate(145%)" : "none"}
        boxShadow={isScrolled ? "nav" : "none"}
      >
        <Container>
          <HStack
            as="nav"
            aria-label={menuLabel}
            minH={{ base: "16", lg: isScrolled ? "16" : "20" }}
            justify="space-between"
          >
            <Box>{brand}</Box>

            <HStack as="ul" display={{ base: "none", lg: "flex" }} gap="1" listStyleType="none">
              {visibleItems.map((item) => {
                const isActive = isActivePath(currentPath, item.href);

                return (
                  <Box as="li" key={item.href}>
                    <Link
                      aria-current={isActive ? "page" : undefined}
                      href={item.href}
                      px="3"
                      py="2"
                      rounded="full"
                      color={isActive ? "fg.default" : "fg.muted"}
                      fontWeight={isActive ? "semibold" : "medium"}
                      position="relative"
                      _after={
                        isActive
                          ? {
                              bg: "brand.primary",
                              bottom: "1",
                              content: '""',
                              h: "0.5",
                              insetInline: "3",
                              position: "absolute",
                              rounded: "full",
                            }
                          : undefined
                      }
                      _hover={{ bg: "brand.soft", color: "fg.default", textDecoration: "none" }}
                    >
                      {item.label}
                    </Link>
                  </Box>
                );
              })}

              {servicesMenu ? (
                <Box
                  as="li"
                  onMouseEnter={openMegaMenu}
                  onMouseLeave={closeMegaMenu}
                  position="relative"
                >
                  <Button
                    aria-expanded={isMegaOpen}
                    aria-haspopup="menu"
                    onBlur={closeMegaMenu}
                    onFocus={openMegaMenu}
                    onMouseEnter={openMegaMenu}
                    size="sm"
                    variant="ghost"
                  >
                    {servicesMenu.label}
                    <ChevronDown aria-hidden="true" size={16} />
                  </Button>
                  {isMegaOpen ? (
                    <Box
                      bg="bg.panelGradient"
                      border="1px solid"
                      borderColor="border.subtle"
                      boxShadow="premium"
                      insetInlineStart="0"
                      minW="2xl"
                      p="5"
                      position="absolute"
                      rounded="panel"
                      top="calc(100% + var(--chakra-spacing-3))"
                    >
                      <SimpleGrid columns={2} gap="3" role="menu">
                        {visibleMegaItems.map((item) => {
                          const serviceInfo = getServiceIcon(item.href);
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              p="3"
                              rounded="panel"
                              role="menuitem"
                              display="flex"
                              alignItems="start"
                              transition="all 0.2s"
                              _hover={{
                                bg: "brand.soft",
                                textDecoration: "none",
                                transform: "translateY(-1px)",
                                boxShadow: "sm",
                              }}
                            >
                              <HStack gap="3.5" align="start" w="full">
                                <Box
                                  flexShrink={0}
                                  display="flex"
                                  alignItems="center"
                                  justifyContent="center"
                                  h="10"
                                  w="10"
                                  rounded="lg"
                                  bg={serviceInfo.bg}
                                >
                                  {serviceInfo.icon}
                                </Box>
                                <Stack gap="1">
                                  <Text color="fg.default" fontWeight="bold" fontSize="sm">
                                    {item.label}
                                  </Text>
                                  {item.description ? (
                                    <Text color="fg.muted" fontSize="xs" lineHeight="relaxed">
                                      {item.description}
                                    </Text>
                                  ) : null}
                                </Stack>
                              </HStack>
                            </Link>
                          );
                        })}
                      </SimpleGrid>
                    </Box>
                  ) : null}
                </Box>
              ) : null}
            </HStack>

            <HStack gap="2">
              <IconButton
                aria-label={searchLabel}
                display={{ base: "none", xl: "inline-flex" }}
                variant="ghost"
              >
                <Search aria-hidden="true" size={18} />
              </IconButton>
              {nextLanguageOption ? (
                <Button
                  aria-label={`${language.label}: ${nextLanguageOption.label}`}
                  display="inline-flex"
                  onClick={() => language.onChange(nextLanguageOption.locale)}
                  size="sm"
                  variant="ghost"
                  px={{ base: "2", sm: "3" }}
                >
                  <Languages aria-hidden="true" size={16} />
                  <Box as="span" display={{ base: "none", sm: "inline" }}>
                    {nextLanguageOption.label}
                  </Box>
                </Button>
              ) : null}
              <IconButton aria-label={theme.label} onClick={toggleTheme} variant="ghost">
                {theme.isDark ? (
                  <Sun aria-hidden="true" size={18} />
                ) : (
                  <Moon aria-hidden="true" size={18} />
                )}
              </IconButton>
              {cta ? (
                <Button asChild display={{ base: "none", md: "inline-flex" }} size="sm">
                  <a href={cta.href}>{cta.label}</a>
                </Button>
              ) : null}
              <IconButton
                aria-label={isOpen ? closeLabel : menuLabel}
                display={{ base: "inline-flex", lg: "none" }}
                onClick={toggleMenu}
                variant="ghost"
              >
                {isOpen ? (
                  <X aria-hidden="true" size={20} />
                ) : (
                  <Menu aria-hidden="true" size={20} />
                )}
              </IconButton>
            </HStack>
          </HStack>
        </Container>
      </Box>

      {isOpen ? (
        <Box
          bg="bg.elevated"
          borderTop="1px solid"
          borderColor="border.subtle"
          display={{ lg: "none" }}
          h="calc(100vh - var(--chakra-sizes-16))"
          insetInline="0"
          overflowY="auto"
          position="fixed"
          top="16"
        >
          <Container>
            <VStack align="stretch" gap="5" py="8">
              <Stack as="ul" gap="2" listStyleType="none">
                {visibleItems.map((item) => {
                  const isActive = isActivePath(currentPath, item.href);

                  return (
                    <Box as="li" key={item.href}>
                      <Link
                        aria-current={isActive ? "page" : undefined}
                        display="block"
                        href={item.href}
                        onClick={closeMenu}
                        px="4"
                        py="4"
                        rounded="panel"
                        bg={isActive ? "bg.subtle" : "transparent"}
                        fontWeight="semibold"
                        _hover={{ bg: "brand.soft", textDecoration: "none" }}
                      >
                        {item.label}
                      </Link>
                    </Box>
                  );
                })}
              </Stack>

              {servicesMenu ? (
                <Stack gap="3">
                  <Text color="fg.muted" fontSize="sm" fontWeight="semibold">
                    {servicesMenu.label}
                  </Text>
                  <Stack gap="2">
                    {visibleMegaItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        p="4"
                        rounded="panel"
                        bg={isActivePath(currentPath, item.href) ? "bg.subtle" : "transparent"}
                        _hover={{ bg: "brand.soft", textDecoration: "none" }}
                      >
                        <Text fontWeight="semibold">{item.label}</Text>
                        {item.description ? (
                          <Text color="fg.muted" fontSize="sm" mt="1">
                            {item.description}
                          </Text>
                        ) : null}
                      </Link>
                    ))}
                  </Stack>
                </Stack>
              ) : null}

              {nextLanguageOption ? (
                <Button
                  aria-label={`${language.label}: ${nextLanguageOption.label}`}
                  onClick={() => language.onChange(nextLanguageOption.locale)}
                  size="sm"
                  variant="outline"
                >
                  <Languages aria-hidden="true" size={16} />
                  {nextLanguageOption.label}
                </Button>
              ) : null}

              {cta ? (
                <Button asChild size="lg">
                  <a href={cta.href}>{cta.label}</a>
                </Button>
              ) : null}
            </VStack>
          </Container>
        </Box>
      ) : null}
    </Box>
  );
}
