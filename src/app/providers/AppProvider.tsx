import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";
import { AppErrorBoundary } from "@/app/error-boundary";
import { queryClient } from "@/lib/query";
import { I18nProvider } from "@/shared/i18n";
import { system } from "@/theme";

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <ChakraProvider value={system}>
      <AppErrorBoundary>
        <I18nProvider>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </I18nProvider>
      </AppErrorBoundary>
    </ChakraProvider>
  );
}
