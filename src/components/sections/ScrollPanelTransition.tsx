import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import SelectedWorks from "./SelectedWorks";
import "./ScrollPanelTransition.css";

export function ScrollPanelTransition() {
  const backgroundScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: backgroundScrollRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);

  return (
    <section className="scroll-panel-transition" aria-label="Hero, profile and projects transition">
      <motion.div className="scroll-panel-transition__background">
        <motion.div className="scroll-panel-transition__background-track" style={{ y: backgroundY }}>
          <div className="scroll-panel-transition__background-panel">
            <About id={undefined} title="Background & Data" />
          </div>
          <div className="scroll-panel-transition__background-panel scroll-panel-transition__background-panel--skills">
            <Skills id={undefined} />
          </div>
        </motion.div>
      </motion.div>

      <div className="scroll-panel-transition__hero">
        <Hero />
      </div>

      <div ref={backgroundScrollRef} className="scroll-panel-transition__spacer">
        <span id="about" className="scroll-panel-transition__anchor scroll-panel-transition__anchor--about" />
        <span id="skills" className="scroll-panel-transition__anchor scroll-panel-transition__anchor--skills" />
      </div>

      <div className="scroll-panel-transition__work">
        <SelectedWorks />
      </div>
    </section>
  );
}
