import { Button as ChakraButton } from "@chakra-ui/react";
import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { forwardRef } from "react";

export type AppButtonVariant = "solid" | "outline" | "ghost" | "subtle";
export type AppButtonSize = "sm" | "md" | "lg";

export type ButtonProps = Omit<ChakraButtonProps, "size" | "variant"> & {
  isLoading?: boolean;
  size?: AppButtonSize;
  variant?: AppButtonVariant;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, disabled, isLoading = false, loadingText, size = "md", variant = "solid", ...props },
  ref,
) {
  return (
    <ChakraButton
      ref={ref}
      aria-busy={isLoading || undefined}
      colorPalette="teal"
      disabled={disabled || isLoading}
      fontWeight="semibold"
      loading={isLoading}
      loadingText={loadingText}
      size={size}
      transition="transform var(--hds-transition-fast), box-shadow var(--hds-transition-fast), background var(--hds-transition-fast), border-color var(--hds-transition-fast), opacity var(--hds-transition-fast)"
      variant={variant}
      _active={{ transform: "translateY(0) scale(0.98)" }}
      _focusVisible={{ boxShadow: "0 0 0 3px token(colors.brand.soft)" }}
      _hover={{
        boxShadow: variant === "solid" ? "glow" : variant === "outline" ? "sm" : undefined,
        opacity: variant === "ghost" ? "0.88" : undefined,
        transform: "translateY(-1px)",
      }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
});
