import { ChakraProvider } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { I18nProvider } from "@/shared/i18n";
import { system } from "@/theme";

export function TestProviders({ children }: PropsWithChildren) {
  return (
    <ChakraProvider value={system}>
      <I18nProvider>{children}</I18nProvider>
    </ChakraProvider>
  );
}
