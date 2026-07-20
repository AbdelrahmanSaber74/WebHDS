import { Box, Link } from "@chakra-ui/react";
import type { PropsWithChildren, ReactNode } from "react";

export type RootLayoutProps = PropsWithChildren<{
  footer?: ReactNode;
  header?: ReactNode;
  skipLabel: string;
}>;

export function RootLayout({ children, footer, header, skipLabel }: RootLayoutProps) {
  return (
    <Box minH="100vh">
      <Link
        href="#main-content"
        position="fixed"
        top="3"
        insetInlineStart="3"
        zIndex="tooltip"
        bg="brand.primary"
        color="white"
        px="4"
        py="2"
        rounded="md"
        transform="translateY(-150%)"
        _focus={{ transform: "translateY(0)" }}
      >
        {skipLabel}
      </Link>
      {header}
      {children}
      {footer}
    </Box>
  );
}
