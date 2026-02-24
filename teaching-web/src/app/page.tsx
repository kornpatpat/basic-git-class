"use client";

import Link from "next/link";
import lessonsData from "@/data/lessons.json";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#667eea] rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#764ba2] rounded-full blur-[120px]" />
          <div className="absolute top-40 right-40 w-48 h-48 bg-[#f093fb] rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 px-8 py-16 text-center max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <div className="text-7xl mb-6">🎨</div>
            <h1 className="text-6xl font-black mb-4">
              <span className="gradient-text">Web Design</span>
              <br />
              <span className="text-white/90">Workshop</span>
            </h1>
            <p className="text-xl text-white/60 mb-2">
              From Figma → Code
            </p>
            <p className="text-base text-white/40 mb-8">
              สำหรับนักศึกษาออกแบบอุตสาหกรรม ปี 3 | {lessonsData.workshop.duration}
            </p>

            {/* Quick links */}
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/playground"
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  color: "white",
                }}
              >
                🎮 CSS Playground
              </Link>
              <Link
                href="/exercises"
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 border border-white/20 text-white/80 hover:text-white"
              >
                📐 Layout Exercises
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Timeline / Schedule */}
      <section className="max-w-4xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
          ตารางเรียน
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-green)] via-[var(--accent-blue)] to-[var(--accent-pink)]" />

          <div className="space-y-4 stagger-children">
            {lessonsData.schedule.map((item, i) => (
              <div key={i} className="flex items-center gap-4 pl-1">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-lg z-10 shrink-0"
                  style={{ background: `${item.color}20`, border: `2px solid ${item.color}` }}
                >
                  {item.icon}
                </div>
                <div
                  className="flex-1 glow-card py-3 flex items-center justify-between"
                  style={{ borderColor: `${item.color}20` }}
                >
                  <span className="font-semibold" style={{ color: item.color }}>
                    {item.title}
                  </span>
                  <span className="text-sm text-[var(--text-secondary)] font-mono">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lesson Cards */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
          บทเรียน
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessonsData.lessons.map((lesson) => (
            <Link
              key={lesson.id}
              href={`/lesson/${lesson.id}`}
              className="glow-card group hover:scale-[1.02] transition-transform block"
            >
              <div className="flex items-start gap-4">
                <div
                  className="text-4xl w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: `${lesson.color}15` }}
                >
                  {lesson.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded"
                      style={{
                        background: `${lesson.color}15`,
                        color: lesson.color,
                      }}
                    >
                      Lesson {lesson.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: lesson.color }}>
                    {lesson.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-2">
                    {lesson.subtitle}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] opacity-60">
                    {lesson.description}
                  </p>
                </div>
              </div>
              <div
                className="mt-4 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: lesson.color }}
              >
                เข้าสู่บทเรียน →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="max-w-5xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
          เครื่องมือ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/playground" className="glow-card text-center hover:scale-[1.02] transition-transform block">
            <div className="text-5xl mb-4">🎮</div>
            <h3 className="text-xl font-bold text-[var(--accent-blue)] mb-2">
              CSS Playground
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              เขียน HTML/CSS แล้วเห็นผลทันที — ทดลอง Flexbox, Position, และอื่นๆ
            </p>
          </Link>
          <Link href="/exercises" className="glow-card text-center hover:scale-[1.02] transition-transform block">
            <div className="text-5xl mb-4">📐</div>
            <h3 className="text-xl font-bold text-[var(--accent-pink)] mb-2">
              Layout Exercises
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              ดูแบบ → ลอก! ฝึกจัด Layout จากแบบที่ให้ มีหลายระดับ
            </p>
          </Link>
          <a
            href="https://github.com/note5lab/basic-git-class"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card text-center hover:scale-[1.02] transition-transform block"
          >
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-xl font-bold text-[var(--accent-green)] mb-2">
              GitHub Repository
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Clone โปรเจคนี้ แล้วเปิดดูโค้ดทั้งหมดได้
            </p>
          </a>
        </div>
      </section>

      {/* Quick Start */}
      <section className="max-w-3xl mx-auto px-8 py-12">
        <div className="glow-card" style={{ borderColor: "rgba(105, 240, 174, 0.2)" }}>
          <h2 className="text-2xl font-bold text-[var(--accent-green)] mb-4">
            🚀 Quick Start
          </h2>
          <div className="font-mono text-sm space-y-3 bg-[var(--code-bg)] rounded-lg p-5">
            <div className="text-[var(--text-secondary)] text-xs"># 1. Clone โปรเจค</div>
            <div>
              <span className="text-[var(--accent-green)]">$</span>{" "}
              git clone https://github.com/note5lab/basic-git-class.git
            </div>
            <div>
              <span className="text-[var(--accent-green)]">$</span>{" "}
              cd basic-git-class/teaching-web
            </div>
            <div className="text-[var(--text-secondary)] text-xs mt-4"># 2. ติดตั้ง dependencies</div>
            <div>
              <span className="text-[var(--accent-green)]">$</span> npm install
            </div>
            <div className="text-[var(--text-secondary)] text-xs mt-4"># 3. เปิด dev server</div>
            <div>
              <span className="text-[var(--accent-green)]">$</span> npm run dev
            </div>
            <div className="text-[var(--accent-blue)] text-xs mt-2">
              → เปิด http://localhost:3000 ใน browser
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-[var(--text-secondary)] opacity-50">
        <p>Web Design Workshop — Industrial Design Year 3</p>
        <p className="mt-1">Built with Next.js + Tailwind CSS</p>
      </footer>
    </div>
  );
}
