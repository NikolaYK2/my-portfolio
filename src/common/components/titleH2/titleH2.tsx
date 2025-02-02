import React, {ReactNode, useRef} from 'react';
import s from './titleH2.module.scss'
import {useInView} from "framer-motion";

const truncateString = (title: string): string => {
  const index = title.indexOf(' ');
  return title.slice(index);
}

type Props = {
  title: string,
}
export const TitleH2 = ({title}: Props) => {

  return (
    <div className={s.containerTitleH2}>
      <Section className={s.backgroundTitleH2}>
        {truncateString(title)}
      </Section>
      <Section>
        <h2 className={s.title}>{title}</h2>
      </Section>
    </div>
  );
};

type SectionProps = {
  children: ReactNode;
  className?: string;
}

function Section({children, className}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <section ref={ref}>
      <div className={className}
           style={{
             transform: isInView ? "none" : "translateX(-100%)",
             opacity: isInView ? 1 : 0,
             transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
           }}
      >
        {children}
      </div>
    </section>
  );
}
