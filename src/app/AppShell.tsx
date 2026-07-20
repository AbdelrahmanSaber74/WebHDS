import { HStack, Link, Stack, Text } from "@chakra-ui/react";
import { ExternalLink } from "lucide-react";
import { Outlet, useLocation } from "react-router";
import { footerContent, navigationContent } from "@/app/content";
import type { Locale } from "@/config";
import { isSupportedLocale, routesConfig, supportedLocales } from "@/config";
import { useCompany, useCompanyContact, useOffices, useSocialLinks } from "@/features/company";
import { useServices } from "@/features/services";
import { useThemeMode } from "@/shared/hooks";
import { useI18n } from "@/shared/i18n";
import { Footer, Navbar, RootLayout } from "@/shared/layouts";
import type {
  FooterColumn,
  FooterContactItem,
  FooterOffice,
  FooterSocialLink,
  NavbarItem,
} from "@/shared/layouts";

function buildNavigationItems(t: (key: string) => string): NavbarItem[] {
  return navigationContent.items.map((item) => ({
    href: item.href,
    label: t(item.label),
  }));
}

function buildFooterColumns(
  t: (key: string) => string,
  services: ReturnType<typeof useServices>["services"],
): FooterColumn[] {
  return [
    {
      title: t("company.footer.services"),
      links: services.map((service) => ({
        label: t(service.title),
        href: `${routesConfig.services.path}/${service.slug}`,
      })),
    },
  ];
}

function buildFooterContactItems(
  t: (key: string) => string,
  contact: ReturnType<typeof useCompanyContact>,
): FooterContactItem[] {
  return [contact.sales, contact.support, contact.careers].map((item) => ({
    label: t(item.label),
    value: item.value,
    href: item.href ?? `mailto:${item.value}`,
  }));
}

function buildFooterOffices(
  t: (key: string) => string,
  offices: ReturnType<typeof useOffices>,
): FooterOffice[] {
  return offices.map((office) => ({
    id: office.id,
    label: `${t(office.city)}, ${t(office.country)}`,
    address: t(office.address),
    contactHref: `mailto:${office.email}`,
  }));
}

function buildFooterSocialLinks(
  t: (key: string) => string,
  socialLinks: ReturnType<typeof useSocialLinks>,
): FooterSocialLink[] {
  return socialLinks.map((link) => ({
    href: link.href,
    icon: <ExternalLink aria-hidden="true" size={16} />,
    label: t(link.label),
  }));
}

export function AppShell() {
  const { locale, setLocale, t } = useI18n();
  const { isDark, toggleThemeMode } = useThemeMode();
  const { pathname } = useLocation();
  const company = useCompany();
  const contact = useCompanyContact();
  const offices = useOffices();
  const socialLinks = useSocialLinks();
  const { services } = useServices();

  const handleLocaleChange = (nextLocale: string) => {
    if (isSupportedLocale(nextLocale)) {
      setLocale(nextLocale);
    }
  };

  const header = (
    <Navbar
      brand={
        <Link href={routesConfig.home.path} _hover={{ textDecoration: "none" }}>
          <HStack gap="3">
            <Stack
              align="center"
              bg="brand.primary"
              color="white"
              h="11"
              justify="center"
              rounded="panel"
              w="11"
            >
              <Text fontWeight="bold">{company.name}</Text>
            </Stack>
            <Stack display={{ base: "none", sm: "flex" }} gap="0">
              <Text color="fg.default" fontWeight="bold" lineHeight="snug">
                {company.legalName}
              </Text>
              <Text color="fg.muted" fontSize="xs" lineHeight="snug">
                {t(company.tagline)}
              </Text>
            </Stack>
          </HStack>
        </Link>
      }
      closeLabel={t("navigation.close")}
      currentPath={pathname}
      cta={{ href: navigationContent.cta.href, label: t(navigationContent.cta.label) }}
      items={buildNavigationItems(t)}
      language={{
        activeLocale: locale,
        label: t("navigation.language"),
        onChange: handleLocaleChange,
        options: supportedLocales.map((supportedLocale: Locale) => ({
          label: t(`navigation.locale.${supportedLocale}`),
          locale: supportedLocale,
        })),
      }}
      menuLabel={t("navigation.menu")}
      searchLabel={t("navigation.search")}
      servicesMenu={{
        label: t(navigationContent.servicesLabel),
        items: services.map((service) => ({
          description: t(service.shortDescription),
          href: `${routesConfig.services.path}/${service.slug}`,
          label: t(service.title),
        })),
      }}
      theme={{ isDark, label: t("navigation.theme"), onToggle: toggleThemeMode }}
    />
  );

  const footer = (
    <Footer
      brand={
        <Stack gap="1">
          <Text fontSize="lg" fontWeight="bold">
            {company.legalName}
          </Text>
          <Text color="fg.muted" fontSize="sm">
            {t(company.tagline)}
          </Text>
        </Stack>
      }
      columns={buildFooterColumns(t, services)}
      contactItems={buildFooterContactItems(t, contact)}
      copyright={t("company.footer.copyright")}
      description={t(company.description)}
      legalLinks={footerContent.legalLinks.map((link) => ({
        href: link.href,
        label: t(link.label),
      }))}
      newsletter={{
        description: t(footerContent.newsletter.description),
        inputLabel: t(footerContent.newsletter.inputLabel),
        inputPlaceholder: t(footerContent.newsletter.inputPlaceholder),
        submitLabel: t(footerContent.newsletter.submitLabel),
        title: t(footerContent.newsletter.title),
      }}
      offices={buildFooterOffices(t, offices)}
      socialLinks={buildFooterSocialLinks(t, socialLinks)}
      trustItems={company.certifications.map((certification) => t(certification))}
    />
  );

  return (
    <RootLayout footer={footer} header={header} skipLabel={t("common.actions.skipToContent")}>
      <Outlet />
    </RootLayout>
  );
}
