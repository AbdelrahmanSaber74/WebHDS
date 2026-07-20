import { Box, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import { usePortfolioProject } from "@/features/portfolio/hooks";
import { buildProjectSchema } from "@/features/portfolio/utils";
import { PortfolioCtaSection } from "@/features/portfolio/sections";
import { ProjectCard } from "@/features/portfolio/components/ProjectCard";
import { Badge, Card, EmptyState } from "@/shared/ui";
import { SectionContainer } from "@/shared/layouts";
import { useSeo, useSeoMetadata } from "@/shared/hooks";
import { useI18n } from "@/shared/i18n";

export type PortfolioDetailsFeatureProps = {
  slug: string | undefined;
};

function MissingProjectDetails() {
  useSeo("notFound");
  const { t } = useI18n();

  return (
    <Box as="main" id="main-content">
      <SectionContainer>
        <EmptyState
          action={<a href="/portfolio">{t("portfolio.notFound.action")}</a>}
          description={t("portfolio.notFound.description")}
          title={t("portfolio.notFound.title")}
        />
      </SectionContainer>
    </Box>
  );
}

export function PortfolioDetailsFeature({ slug }: PortfolioDetailsFeatureProps) {
  const { t } = useI18n();
  const { project, relatedProjects } = usePortfolioProject(slug);

  const metadata = useMemo(() => {
    if (!project) {
      return undefined;
    }

    return {
      canonicalPath: project.seo.canonicalPath,
      description: t(project.seo.description),
      imageUrl: project.featuredImage,
      keywords: t(project.seo.keywords),
      structuredData: buildProjectSchema(project, {
        description: t(project.subtitle),
        industry: t(project.industry),
        title: t(project.seo.title),
      }),
      title: t(project.seo.title),
      type: "article" as const,
    };
  }, [project, t]);

  useSeoMetadata(metadata);

  if (!project) {
    return <MissingProjectDetails />;
  }

  return (
    <Box as="main" id="main-content">
      <SectionContainer bg="bg.hero">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap="10" alignItems="center">
          <Stack gap="6">
            <Badge alignSelf="flex-start">{t(project.industry)}</Badge>
            <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} lineHeight="tight">
              {t(project.title)}
            </Heading>
            <Text color="fg.muted" fontSize={{ base: "lg", md: "xl" }} lineHeight="relaxed">
              {t(project.subtitle)}
            </Text>
          </Stack>
          <Card p="2" variant="feature">
            <Box overflow="hidden" rounded="panel">
              <Image
                alt={t(project.featuredImageAlt)}
                aspectRatio={16 / 10}
                loading="eager"
                objectFit="cover"
                src={project.featuredImage}
              />
            </Box>
          </Card>
        </SimpleGrid>
      </SectionContainer>

      <SectionContainer>
        <SimpleGrid columns={{ base: 1, md: 4 }} gap="5">
          <Card>
            <Text color="fg.muted">{t("portfolio.case.client")}</Text>
            <Heading as="h2" fontSize="xl">
              {project.clientName}
            </Heading>
          </Card>
          <Card>
            <Text color="fg.muted">{t("portfolio.case.location")}</Text>
            <Heading as="h2" fontSize="xl">
              {t(project.location)}
            </Heading>
          </Card>
          <Card>
            <Text color="fg.muted">{t("portfolio.case.duration")}</Text>
            <Heading as="h2" fontSize="xl">
              {t(project.duration)}
            </Heading>
          </Card>
          <Card>
            <Text color="fg.muted">{t("portfolio.case.team")}</Text>
            <Heading as="h2" fontSize="xl">
              {project.teamSize}
            </Heading>
          </Card>
        </SimpleGrid>
      </SectionContainer>

      <SectionContainer bg="bg.subtle">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap="6">
          <Card h="full">
            <Stack gap="3">
              <Badge alignSelf="flex-start">{t("portfolio.case.challenge")}</Badge>
              <Text color="fg.muted" lineHeight="relaxed">
                {t(project.challenge)}
              </Text>
            </Stack>
          </Card>
          <Card h="full">
            <Stack gap="3">
              <Badge alignSelf="flex-start">{t("portfolio.case.solution")}</Badge>
              <Text color="fg.muted" lineHeight="relaxed">
                {t(project.solution)}
              </Text>
            </Stack>
          </Card>
        </SimpleGrid>
      </SectionContainer>

      <SectionContainer>
        <Stack gap="8">
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }}>
            {t("portfolio.case.architecture")}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="5">
            {project.architectureHighlights.map((item, index) => (
              <Card key={`${item}-${index}`}>
                <Text color="fg.muted">{t(item)}</Text>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </SectionContainer>

      <SectionContainer bg="bg.subtle">
        <Stack gap="8">
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }}>
            {t("portfolio.case.process")}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="5">
            {project.implementation.map((item, index) => (
              <Card key={`${item}-${index}`}>
                <Text color="brand.primary" fontWeight="bold">
                  {String(index + 1).padStart(2, "0")}
                </Text>
                <Text color="fg.muted" mt="3">
                  {t(item)}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </SectionContainer>

      <SectionContainer>
        <Stack gap="8">
          <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }}>
            {t("portfolio.case.results")}
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="5">
            {project.metrics.map((metric) => (
              <Card key={metric.id} variant="glass">
                <Heading as="p" color="brand.primary" fontSize="4xl">
                  {metric.value}
                </Heading>
                <Text color="fg.muted">{t(metric.label)}</Text>
              </Card>
            ))}
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap="5">
            {project.businessResults.map((item, index) => (
              <Card key={`${item}-${index}`}>
                <Text color="fg.muted">{t(item)}</Text>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </SectionContainer>

      <SectionContainer bg="bg.subtle">
        <Card p={{ base: "7", md: "10" }} variant="glass">
          <Stack gap="4">
            <Text fontSize={{ base: "xl", md: "2xl" }} lineHeight="relaxed">
              "{t(project.testimonial.quote)}"
            </Text>
            <Text color="fg.muted">
              {t(project.testimonial.author)} / {t(project.testimonial.role)}
            </Text>
          </Stack>
        </Card>
      </SectionContainer>

      {relatedProjects.length > 0 ? (
        <SectionContainer>
          <Stack gap="8">
            <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }}>
              {t("portfolio.case.related")}
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap="5">
              {relatedProjects.map((relatedProject) => (
                <ProjectCard key={relatedProject.id} project={relatedProject} />
              ))}
            </SimpleGrid>
          </Stack>
        </SectionContainer>
      ) : null}

      <PortfolioCtaSection data={project.cta} />
    </Box>
  );
}
