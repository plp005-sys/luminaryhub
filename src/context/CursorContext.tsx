import { createContext, useCallback, useContext, useMemo, useRef } from "react";
import type { ReactNode } from "react";

type CursorVariant = "default" | "view" | "explore" | "play" | "drag" | "nav";

interface CursorContextValue {
  setVariant: (variant: CursorVariant) => void;
  resetVariant: () => void;
}

const CursorContext = createContext<CursorContextValue | null>(null);

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) {
    return { setVariant: () => {}, resetVariant: () => {} };
  }
  return ctx;
}

export function CursorProvider({
  children,
  onVariantChange,
}: {
  children: ReactNode;
  onVariantChange: (variant: CursorVariant) => void;
}) {
  const current = useRef<CursorVariant>("default");

  const setVariant = useCallback(
    (variant: CursorVariant) => {
      current.current = variant;
      onVariantChange(variant);
    },
    [onVariantChange]
  );

  const resetVariant = useCallback(() => {
    current.current = "default";
    onVariantChange("default");
  }, [onVariantChange]);

  const value = useMemo(() => ({ setVariant, resetVariant }), [setVariant, resetVariant]);

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
}

export type { CursorVariant };
