import { chakra } from "@chakra-ui/react";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

export type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectProps = Omit<
  ComponentPropsWithoutRef<"select">,
  "children" | "onChange" | "size"
> & {
  options: SelectOption[];
  placeholder?: string;
  onChange?: (value: string) => void;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { disabled, onChange, options, placeholder, value, ...props },
  ref,
) {
  return (
    <chakra.select
      ref={ref}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      value={value}
      onChange={(event) => onChange?.(event.currentTarget.value)}
      px="4"
      h="11"
      rounded="md"
      border="1px solid"
      borderColor="border.subtle"
      bg="bg.surface"
      color="fg.default"
      {...props}
    >
      {placeholder ? <option value="">{placeholder}</option> : null}
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </chakra.select>
  );
});
