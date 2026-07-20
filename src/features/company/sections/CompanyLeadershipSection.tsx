import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useI18n } from "@/shared/i18n";
import { SectionContainer } from "@/shared/layouts";
import { Card } from "@/shared/ui";
import type { CompanyLeadershipMember } from "@/features/company/types";

export type CompanyLeadershipSectionProps = {
  leadership: CompanyLeadershipMember[];
};

export function CompanyLeadershipSection({ leadership }: CompanyLeadershipSectionProps) {
  const { t } = useI18n();

  if (leadership.length === 0) {
    return null;
  }

  return (
    <SectionContainer>
      <Stack gap="8">
        <Heading as="h2" fontSize={{ base: "3xl", md: "5xl" }}>
          {t("company.leadership.title")}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="5">
          {leadership.map((member) => (
            <Card key={member.id} h="full">
              <Stack gap="2">
                <Heading as="h3" fontSize="xl">
                  {member.name}
                </Heading>
                <Text color="brand.primary" fontWeight="semibold">
                  {t(member.role)}
                </Text>
                <Text color="fg.muted">{t(member.bio)}</Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </SectionContainer>
  );
}
