import { useEffect, useRef, useState } from "react";
import { projectsByRecency } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";

const AUTOPLAY_MS = 3500;
const TRANSITION_MS = 650;
const CLONES = 3;

export default function ProjectsSlider() {
  const total = projectsByRecency.length;
  const items = [...projectsByRecency, ...projectsByRecency.slice(0, CLONES)];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const pendingPrev = useRef(false);

  // Reached the cloned tail: once the slide finishes, jump back to the real start without animation.
  useEffect(() => {
    if (!animate || index < total) return undefined;
    const id = setTimeout(() => {
      setAnimate(false);
      setIndex(index - total);
    }, TRANSITION_MS);
    return () => clearTimeout(id);
  }, [animate, index, total]);

  // After an instant jump, re-enable the animation (and finish a pending "prev" wrap-around).
  useEffect(() => {
    if (animate) return undefined;
    const id = setTimeout(() => {
      setAnimate(true);
      if (pendingPrev.current) {
        pendingPrev.current = false;
        setIndex(total - 1);
      }
    }, 60);
    return () => clearTimeout(id);
  }, [animate, total]);

  const next = () => {
    if (!animate || index >= total) return;
    setIndex(index + 1);
  };

  const prev = () => {
    if (!animate) return;
    if (index === 0) {
      pendingPrev.current = true;
      setAnimate(false);
      setIndex(total);
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    const id = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(id);
  });

  return (
    <div className="projects-slider">
      <div className="projects-slider-viewport">
        <div
          className={`projects-slider-track${animate ? " animate" : ""}`}
          style={{ "--index": index }}
        >
          {items.map((project, i) => (
            <div className="projects-slider-item" key={`${project.slug}-${i}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="projects-slider-arrow projects-slider-prev"
        aria-label="Previous"
        onClick={prev}
      >
        <ChevronLeftIcon />
      </button>
      <button
        type="button"
        className="projects-slider-arrow projects-slider-next"
        aria-label="Next"
        onClick={next}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
