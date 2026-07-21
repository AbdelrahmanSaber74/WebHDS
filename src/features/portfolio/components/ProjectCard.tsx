import { Box, Heading, HStack, Image, Link, Stack, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import { Card, Badge } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import type { PortfolioProject } from "@/features/portfolio/types";

export type ProjectCardProps = {
  project: PortfolioProject;
  priority?: boolean;
};

export function ProjectCard({ priority = false, project }: ProjectCardProps) {
  const { t } = useI18n();

  return (
    <Card
      as="article"
      borderColor={project.featured ? "border.strong" : "border.subtle"}
      h="full"
      overflow="hidden"
      p="0"
      role="group"
      transition="transform var(--hds-transition-normal), box-shadow var(--hds-transition-normal), border-color var(--hds-transition-normal)"
      variant={project.featured ? "feature" : "glass"}
      _hover={{ borderColor: "brand.primary", boxShadow: "ambient", transform: "translateY(-6px)" }}
    >
      <Box overflow="hidden" position="relative">
        <Image
          alt={t(project.featuredImageAlt)}
          aspectRatio={16 / 10}
          loading={priority ? "eager" : "lazy"}
          objectFit="cover"
          src={project.featuredImage}
          transition="transform var(--hds-transition-slow)"
          _groupHover={{ transform: "scale(1.03)" }}
        />
        <Box
          aria-hidden="true"
          bg="linear-gradient(180deg, transparent 22%, rgba(7, 17, 31, 0.58))"
          inset="0"
          opacity={project.featured ? "1" : "0"}
          position="absolute"
          transition="opacity var(--hds-transition-normal)"
          _groupHover={{ opacity: "1" }}
        />
      </Box>
      <Stack gap="5" p={{ base: "5", md: "6" }} position="relative">
        <HStack gap="2" wrap="wrap">
          <Badge>{t(project.industry)}</Badge>
          <Text color="fg.muted" fontSize="sm">
            {project.year}
          </Text>
        </HStack>
        <Stack gap="3">
          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} lineHeight="snug">
            <Link
              href={`/portfolio/${project.slug}`}
              _hover={{ color: "brand.primary", textDecoration: "none" }}
            >
              {t(project.title)}
            </Link>
          </Heading>
          <Text color="fg.muted" lineHeight="relaxed">
            {t(project.subtitle)}
          </Text>
        </Stack>
        <HStack gap="2" wrap="wrap">
          {project.technologies.slice(0, 3).map((technology) => (
            <Box
              key={technology}
              bg="brand.soft"
              border="1px solid"
              borderColor="border.subtle"
              color="fg.default"
              fontSize="sm"
              px="3"
              py="1"
              rounded="full"
            >
              {technology}
            </Box>
          ))}
        </HStack>
        <Link
          color="brand.primary"
          fontWeight="semibold"
          href={`/portfolio/${project.slug}`}
          _hover={{ textDecoration: "none" }}
        >
          <HStack as="span" gap="2">
            <Text as="span">{t("portfolio.card.readCaseStudy")}</Text>
            <ArrowRight aria-hidden="true" size={16} />
          </HStack>
        </Link>
      </Stack>
    </Card>
  );
}
