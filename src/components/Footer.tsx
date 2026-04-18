import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();
  const isEn = i18n.language.startsWith("en");

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="font-mono text-xs text-muted-foreground">
          {"// "} © {year} Luis Benvenuto. {isEn ? "Made with" : "Hecho con"} {"<"}
          {isEn ? "code" : "código"}
          {"/>"} {isEn ? "and" : "y"} ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;