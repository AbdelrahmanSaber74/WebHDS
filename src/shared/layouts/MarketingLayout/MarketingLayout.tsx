import type { PropsWithChildren, ReactNode } from "react";
import { RootLayout } from "../RootLayout";

export type MarketingLayoutProps = PropsWithChildren<{
  footer: ReactNode;
  header: ReactNode;
  skipLabel: string;
}>;

export function MarketingLayout({ children, footer, header, skipLabel }: MarketingLayoutProps) {
  return (
    <RootLayout footer={footer} header={header} skipLabel={skipLabel}>
      {children}
    </RootLayout>
  );
}
