"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface SlideLayoutProps {
  slides: React.ReactNode[];
  lessonTitle: string;
  lessonNumber: number;
  accentColor: string;
}

export default function SlideLayout({
  slides,
  lessonTitle,
  lessonNumber,
  accentColor,
}: SlideLayoutProps) {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const next = useCallback(() => {
    setCurrent((c) => Math.min(c + 1, total - 1));
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((c) => Math.max(c - 1, 0));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "Home") {
        e.preventDefault();
        setCurrent(0);
      }
      if (e.key === "End") {
        e.preventDefault();
        setCurrent(total - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev, total]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <nav
        className="flex items-center justify-between px-8 py-3 border-b"
        style={{ borderColor: `${accentColor}30` }}
      >
        <Link
          href="/"
          className="text-sm opacity-60 hover:opacity-100 transition-opacity"
        >
          ← กลับหน้าหลัก
        </Link>
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-mono px-2 py-1 rounded"
            style={{ background: `${accentColor}20`, color: accentColor }}
          >
            Lesson {lessonNumber}
          </span>
          <span className="text-sm font-semibold">{lessonTitle}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="opacity-60">
            {current + 1} / {total}
          </span>
          <span className="text-xs opacity-40 ml-2">← → Space</span>
        </div>
      </nav>

      {/* Slide content */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div
          key={current}
          className="w-full max-w-5xl animate-fade-in-up slide-content"
        >
          {slides[current]}
        </div>
      </main>

      {/* Bottom navigation */}
      <footer className="flex items-center justify-between px-8 py-4">
        <button
          onClick={prev}
          disabled={current === 0}
          className="px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-20"
          style={{
            background: `${accentColor}15`,
            color: accentColor,
          }}
        >
          ← ก่อนหน้า
        </button>

        {/* Progress dots */}
        <div className="flex gap-1.5 flex-wrap justify-center max-w-md">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-2.5 h-2.5 rounded-full transition-all"
              style={{
                background:
                  i === current ? accentColor : `${accentColor}30`,
                transform: i === current ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={current === total - 1}
          className="px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-20"
          style={{
            background: `${accentColor}15`,
            color: accentColor,
          }}
        >
          ถัดไป →
        </button>
      </footer>
    </div>
  );
}
