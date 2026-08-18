"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Counter({
  value,
  suffix = "",
  duration = 2.4,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <span ref={ref} className="tabular-nums">
      {inView ? (
        <CountUp end={value} duration={duration} suffix={suffix} />
      ) : (
        `0${suffix}`
      )}
    </span>
  );
}
