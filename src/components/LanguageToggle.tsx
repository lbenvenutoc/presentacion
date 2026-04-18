import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const current = i18n.language.startsWith("en") ? "en" : "es";
  const next = current === "es" ? "en" : "es";

  return (
    <button
      onClick={() => i18n.changeLanguage(next)}
      title={t("language.switch")}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-border font-mono text-xs text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
      aria-label={t("language.switch")}
    >
      <Languages size={14} />
      <span className="uppercase">{next}</span>
    </button>
  );
};

export default LanguageToggle;
