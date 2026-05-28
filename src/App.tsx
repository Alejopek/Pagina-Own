import { Helmet, HelmetProvider } from "react-helmet-async";
import { Header } from "./components/layout/Header";
import { MobileDrawer } from "./components/layout/MobileDrawer";
import { Footer } from "./components/layout/Footer";
import { SmoothScrollProvider } from "./components/layout/SmoothScrollProvider";
import { ScrollPanelTransition } from "./components/sections/ScrollPanelTransition";
import { Journey } from "./components/sections/Journey";
import { Contact } from "./components/sections/Contact";
import { useMobileMenu } from "./hooks/useMobileMenu";

export default function App() {
  const { isOpen: isMenuOpen, toggle: toggleMenu, close: closeMenu } = useMobileMenu();

  return (
    <HelmetProvider>
      <Helmet>
        <html lang="es" />
        <title>Alejo Tomas Diaz | Full Stack Developer Junior</title>
        <meta
          name="description"
          content="Portfolio técnico de Alejo Tomas Diaz, Full Stack Developer junior. Proyectos, habilidades, experiencia y contacto."
        />
        <meta name="author" content="Alejo Tomas Diaz" />
        <meta
          name="keywords"
          content="Alejo Tomas Diaz, Full Stack Developer, portfolio, desarrollo web, frontend, backend, junior developer"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Alejo Diaz | Backend & Linux Specialist" />
        <meta
          property="og:description"
          content="Portfolio de Alejo Diaz: Estudiante de programación técnica enfocado en Backend, Arch Linux y HomeLab."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pagina-own.vercel.app/" />
        <meta property="og:image" content="/assets/og-image.png" />
      </Helmet>

      <SmoothScrollProvider>
        <div className="relative min-h-screen bg-bg text-text selection:bg-accent selection:text-bg">
          <Header isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
          <MobileDrawer isOpen={isMenuOpen} onClose={closeMenu} />

          <main>
            <ScrollPanelTransition />
            <div className="relative z-30 bg-bg">
              <Journey />
              <Contact />
            </div>
          </main>

          <Footer />
        </div>
      </SmoothScrollProvider>
    </HelmetProvider>
  );
}
