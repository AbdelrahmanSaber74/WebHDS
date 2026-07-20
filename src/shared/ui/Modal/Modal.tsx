import { Box, Heading, IconButton, Portal, Text } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/react";
import { X } from "lucide-react";
import type { PropsWithChildren } from "react";

export type ModalProps = PropsWithChildren<{
  closeLabel: string;
  isOpen: boolean;
  title: string;
  description?: string;
  onClose: () => void;
}> &
  BoxProps;

export function Modal({
  children,
  closeLabel,
  description,
  isOpen,
  onClose,
  title,
  ...props
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <Box position="fixed" inset="0" bg="blackAlpha.700" zIndex="modal" />
      <Box position="fixed" inset="0" zIndex="modal" display="grid" placeItems="center" p="4">
        <Box
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          bg="bg.surface"
          border="1px solid"
          borderColor="border.subtle"
          boxShadow="premium"
          maxW="lg"
          p="6"
          rounded="panel"
          w="full"
          {...props}
        >
          <Box display="flex" alignItems="start" justifyContent="space-between" gap="4">
            <Box>
              <Heading id="modal-title" size="lg">
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
      </Box>
    </Portal>
  );
}
