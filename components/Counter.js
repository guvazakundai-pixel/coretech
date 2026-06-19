'use client';
import { useState, useEffect, useRef } from 'react';

export default function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!vis) return;
    let s = 0;
    const step = target / 125;
    const t = setInterval(() => { s += step; if (s >= target) { setCount(target); clearInterval(t); } else { setCount(Math.floor(s)); } }, 16);
    return () => clearInterval(t);
  }, [vis, target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}
