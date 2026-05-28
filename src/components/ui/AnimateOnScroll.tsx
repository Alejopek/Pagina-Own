import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type AnimationVariant = "fade-up" | "fade-down" | "zoom-in" | "fade-in";

export interface AnimateOnScrollProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number; // Delay in milliseconds
  className?: string;
  as?: keyof typeof motion | string;
}

export function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  className,
  as = "div"
}: AnimateOnScrollProps) {
  const shouldReduceMotion = useReducedMotion();

  // If user prefers reduced motion, bypass animations completely
  if (shouldReduceMotion) {
    const Tag = as as any;
    return <Tag className={className}>{children}</Tag>;
  }

  const variants = {
    "fade-up": {
      hidden: { y: 24, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    },
    "fade-down": {
      hidden: { y: -16, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    },
    "zoom-in": {
      hidden: { scale: 0.96, y: 12, opacity: 0 },
      visible: { scale: 1, y: 0, opacity: 1 }
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    }
  };

  // Dynamically resolve Framer Motion component based on render tag
  const MotionComponent = (motion as any)[as] || motion.div;

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1], // easeOutQuart
        delay: delay / 1000
      }}
      variants={variants[variant]}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}
