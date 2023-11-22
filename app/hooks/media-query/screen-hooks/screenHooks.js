import { useMediaQuery } from "../mediaQuery";

export const useIsSmall = () => useMediaQuery('(min-width: 640px)');
export const useIsMedium = () => useMediaQuery('(min-width: 768px)');
export const useIsLarge = () => useMediaQuery('(min-width: 1024px)');
export const useIsXtraLarge = () => useMediaQuery('(min-width: 1280px)');
export const useIs2XtraLarge = () => useMediaQuery('(min-width: 1536px)');