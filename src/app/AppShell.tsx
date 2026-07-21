import { Link, Text } from "@chakra-ui/react";
import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube, Globe } from "lucide-react";
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
  return [contact.support].map((item) => ({
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
    phone: office.phone,
    email: office.email,
  }));
}

function getSocialIcon(id: string) {
  switch (id.toLowerCase()) {
    case "linkedin":
      return <Linkedin aria-hidden="true" size={16} />;
    case "github":
      return <Github aria-hidden="true" size={16} />;
    case "facebook":
      return <Facebook aria-hidden="true" size={16} />;
    case "instagram":
      return <Instagram aria-hidden="true" size={16} />;
    case "x":
      return <Twitter aria-hidden="true" size={16} />;
    case "youtube":
      return <Youtube aria-hidden="true" size={16} />;
    default:
      return <Globe aria-hidden="true" size={16} />;
  }
}

function buildFooterSocialLinks(
  t: (key: string) => string,
  socialLinks: ReturnType<typeof useSocialLinks>,
): FooterSocialLink[] {
  return socialLinks.map((link) => ({
    href: link.href,
    icon: getSocialIcon(link.id),
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
        <Link
          href={routesConfig.home.path}
          _hover={{ textDecoration: "none" }}
          display="flex"
          alignItems="center"
          gap="1.5"
        >
          <img
            src="/logo.png"
            alt={company.legalName}
            style={{
              height: "50px",
              objectFit: "contain",
              marginInlineStart: "-10px",
              marginInlineEnd: "-8px",
            }}
          />
          <Text color="fg.default" fontWeight="bold" fontSize="lg">
            {company.name}
          </Text>
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
        <Link
          href={routesConfig.home.path}
          _hover={{ textDecoration: "none" }}
          display="inline-flex"
          alignItems="center"
          gap="1.5"
        >
          <img
            src="/logo.png"
            alt={company.legalName}
            style={{
              height: "40px",
              objectFit: "contain",
              marginInlineStart: "-8px",
              marginInlineEnd: "-6px",
            }}
          />
          <Text color="fg.default" fontWeight="bold" fontSize="md">
            {company.name}
          </Text>
        </Link>
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
      officesTitle={t("company.footer.offices")}
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
