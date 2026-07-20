import { Box } from "@chakra-ui/react";
import type { PropsWithChildren, ReactNode } from "react";
import { Container } from "../Container";
import { RootLayout } from "../RootLayout";

export type LegalLayoutProps = PropsWithChildren<{
  footer: ReactNode;
  header: ReactNode;
  skipLabel: string;
}>;

export function LegalLayout({ children, footer, header, skipLabel }: LegalLayoutProps) {
  return (
    <RootLayout footer={footer} header={header} skipLabel={skipLabel}>
      <Box as="main" id="main-content" py="sectionY">
        <Container size="md">{children}</Container>
      </Box>
    </RootLayout>
  );
}
