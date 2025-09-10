
import { useCallback } from "react";
import { openExternalLink } from "@/utils/socialUtils";

export const useExternalLinks = () => {
  const openLink = useCallback((url: string) => {
    openExternalLink(url);
  }, []);

  return { openLink };
};
