import { Box, HStack, IconButton, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { ChevronDown, Languages, Menu, Moon, Search, Sun, X } from "lucide-react";
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
  const { direction, isScrolled } = useScrollState();
  const visibleItems = items.filter((item) => item.isEnabled ?? true);
  const visibleMegaItems = servicesMenu?.items.filter((item) => item.isEnabled ?? true) ?? [];

  const shouldHide = direction === "down" && isScrolled && !isOpen;

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
      transform={shouldHide ? "translateY(-100%)" : "translateY(0)"}
      transition="transform var(--hds-transition-normal), background var(--hds-transition-normal), box-shadow var(--hds-transition-normal)"
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
            minH={isScrolled ? "16" : "20"}
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
                      minW="xl"
                      p="4"
                      position="absolute"
                      rounded="panel"
                      top="calc(100% + var(--chakra-spacing-3))"
                    >
                      <SimpleGrid columns={2} gap="2" role="menu">
                        {visibleMegaItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            p="4"
                            rounded="panel"
                            role="menuitem"
                            _hover={{ bg: "brand.soft", textDecoration: "none" }}
                          >
                            <Text color="fg.default" fontWeight="semibold">
                              {item.label}
                            </Text>
                            {item.description ? (
                              <Text color="fg.muted" fontSize="sm" mt="1">
                                {item.description}
                              </Text>
                            ) : null}
                          </Link>
                        ))}
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
              <HStack display={{ base: "none", lg: "flex" }} gap="1">
                {language.options.map((option) => (
                  <Button
                    aria-label={`${language.label}: ${option.label}`}
                    aria-pressed={language.activeLocale === option.locale}
                    key={option.locale}
                    onClick={() => language.onChange(option.locale)}
                    size="sm"
                    variant={language.activeLocale === option.locale ? "subtle" : "ghost"}
                  >
                    <Languages aria-hidden="true" size={16} />
                    {option.label}
                  </Button>
                ))}
              </HStack>
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
          bg="bg.panelGradient"
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

              <HStack gap="2" wrap="wrap">
                {language.options.map((option) => (
                  <Button
                    aria-label={`${language.label}: ${option.label}`}
                    aria-pressed={language.activeLocale === option.locale}
                    key={option.locale}
                    onClick={() => language.onChange(option.locale)}
                    size="sm"
                    variant={language.activeLocale === option.locale ? "subtle" : "outline"}
                  >
                    {option.label}
                  </Button>
                ))}
              </HStack>

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
