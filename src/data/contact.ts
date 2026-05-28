export interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: string;
  ariaLabel: string;
}

export const contactInfo = {
  description: "¿Querés trabajar conmigo o conversar sobre un proyecto? Escribime, estoy disponible para nuevas oportunidades.",
  cvPath: "/assets/CV_Alejo_Diaz.pdf",
  methods: [
    {
      label: "Email",
      value: "alejopek62@gmail.com",
      href: "mailto:alejopek62@gmail.com",
      icon: "✉️",
      ariaLabel: "Enviar email"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/alejo-diaz",
      href: "https://linkedin.com/in/alejo-diaz",
      icon: "💼",
      ariaLabel: "Perfil de LinkedIn"
    },
    {
      label: "Teléfono",
      value: "+54 299 464 8151",
      href: "tel:+542994648151",
      icon: "📱",
      ariaLabel: "Llamar por teléfono"
    }
  ] as ContactMethod[]
};
