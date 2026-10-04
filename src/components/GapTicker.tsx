"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gaps } from "@/lib/site";

// 슬로건 첫 줄의 괄호 안 '○○와 ○○ 사이'를 번갈아 바꿈.
// 괄호 폭은 지금 문구의 길이에 맞춰 부드럽게 늘었다 줄어듦.
// 마우스를 올리면 멈추고, 누르면 해당 프로젝트로.
export default function GapTicker() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [widths, setWidths] = useState<number[]>([]);
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  // 각 문구의 실제 폭을 재 둠 (글꼴 로딩·창 크기 변경 후 다시)
  useEffect(() => {
    const measure = () => setWidths(refs.current.map((el) => el?.offsetWidth ?? 0));
    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((n) => (n + 1) % gaps.length), 2400);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <Link
      href={`/work/${gaps[i].id}/`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="group whitespace-nowrap"
      aria-label={`${gaps[i].pair} 사이`}
    >
      (
      <span
        className="relative inline-block align-bottom overflow-hidden transition-[width] duration-500 ease-out"
        style={widths[i] ? { width: widths[i] } : undefined}
      >
        {gaps.map((g, n) => (
          <span
            key={g.pair}
            ref={(el) => {
              refs.current[n] = el;
            }}
            aria-hidden
            className={`inline-block px-[0.15em] text-mute group-hover:text-ink transition-[opacity,color] duration-500 ${
              n === i ? "relative opacity-100" : "absolute left-0 top-0 opacity-0"
            }`}
          >
            {g.pair} 사이
          </span>
        ))}
      </span>
      )
    </Link>
  );
}
