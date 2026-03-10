const Footer = () => (
  <footer className="py-8 px-4 border-t border-border">
    <div className="container mx-auto text-center">
      <p className="font-mono text-xs text-muted-foreground">
        {"// "} © {new Date().getFullYear()} Luis Benvenuto. Hecho con {"<"}código{"/>"} y ☕
      </p>
    </div>
  </footer>
);

export default Footer;
