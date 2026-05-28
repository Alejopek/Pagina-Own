import { SectionHead } from "../ui/SectionHead";
import { TimelineItem } from "../ui/TimelineItem";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";
import { journey } from "../../data/journey";

export function Journey() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="py-[clamp(80px,12vw,140px)] relative select-text">
      <div className="w-full max-w-[1100px] mx-auto px-[clamp(20px,5vw,60px)]">
        <AnimateOnScroll variant="fade-up" delay={0}>
          <SectionHead title="Journey" id="journey-title" />
        </AnimateOnScroll>

        <div className="relative pl-8">
          {/* Vertical timeline divider line */}
          <div
            className="absolute left-[5px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-accent via-accent-2 to-transparent pointer-events-none select-none"
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-0 list-none m-0 p-0">
            {journey.map((event, index) => {
              const delay = index * 100;
              return (
                <AnimateOnScroll
                  key={event.id}
                  variant="fade-up"
                  delay={delay}
                  as="li"
                >
                  <TimelineItem event={event} />
                </AnimateOnScroll>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
