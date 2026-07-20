import { Box, Heading, IconButton, Portal, Text } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import { X } from "lucide-react";
import type { PropsWithChildren } from "react";

export type DrawerPlacement = "start" | "end";

export type DrawerProps = PropsWithChildren<{
  closeLabel: string;
  isOpen: boolean;
  title: string;
  description?: string;
  placement?: DrawerPlacement;
  onClose: () => void;
}> &
  BoxProps;

export function Drawer({
  children,
  closeLabel,
  description,
  isOpen,
  onClose,
  placement = "end",
  title,
  ...props
}: DrawerProps) {
  if (!isOpen) {
    return null;
  }

  const insetInlineStart = placement === "start" ? "0" : undefined;
  const insetInlineEnd = placement === "end" ? "0" : undefined;

  return (
    <Portal>
      <Box position="fixed" inset="0" bg="blackAlpha.700" zIndex="modal" />
      <Box
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        position="fixed"
        top="0"
        bottom="0"
        insetInlineStart={insetInlineStart}
        insetInlineEnd={insetInlineEnd}
        zIndex="modal"
        bg="bg.surface"
        borderInlineStart={placement === "end" ? "1px solid" : undefined}
        borderInlineEnd={placement === "start" ? "1px solid" : undefined}
        borderColor="border.subtle"
        boxShadow="premium"
        maxW="sm"
        p="6"
        w="full"
        {...props}
      >
        <Box display="flex" alignItems="start" justifyContent="space-between" gap="4">
          <Box>
            <Heading id="drawer-title" size="lg">
              {title}
            </Heading>
            {description ? <Text color="fg.muted">{description}</Text> : null}
          </Box>
          <IconButton aria-label={closeLabel} size="sm" variant="ghost" onClick={onClose}>
            <X aria-hidden="true" size={18} />
          </IconButton>
        </Box>
        <Box mt="6">{children}</Box>
      </Box>
    </Portal>
  );
}
