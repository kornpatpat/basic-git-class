"use client";

import SlideLayout from "@/components/SlideLayout";
import CodeBlock from "@/components/CodeBlock";
import TerminalBlock from "@/components/TerminalBlock";
import Callout from "@/components/Callout";

const slides = [
  // Slide 1: Title
  <div key="title" className="text-center">
    <div className="text-8xl mb-6">🌿</div>
    <h1 className="text-5xl font-black mb-4 gradient-text">
      Git & GitHub
    </h1>
    <p className="text-2xl text-[var(--text-secondary)]">
      Version Control สำหรับ Designer
    </p>
    <div className="mt-8 flex justify-center gap-4 text-lg">
      <span className="px-4 py-2 rounded-full" style={{ background: "rgba(105,240,174,0.1)", color: "var(--accent-green)" }}>
        Repository
      </span>
      <span className="px-4 py-2 rounded-full" style={{ background: "rgba(79,195,247,0.1)", color: "var(--accent-blue)" }}>
        Commit
      </span>
      <span className="px-4 py-2 rounded-full" style={{ background: "rgba(179,136,255,0.1)", color: "var(--accent-purple)" }}>
        Push & Pull
      </span>
    </div>
  </div>,

  // Slide 2: Why Git?
  <div key="why">
    <h2 className="text-4xl font-bold mb-8" style={{ color: "var(--accent-green)" }}>
      ทำไมต้อง Git? 🤔
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
      <div className="glow-card">
        <div className="text-3xl mb-3">😱</div>
        <h3 className="font-bold text-lg mb-2 text-[var(--accent-orange)]">ปัญหาแบบเดิม</h3>
        <div className="font-mono text-sm space-y-1 text-[var(--text-secondary)]">
          <p>📁 project_final.psd</p>
          <p>📁 project_final_v2.psd</p>
          <p>📁 project_final_v2_fix.psd</p>
          <p>📁 project_REAL_final.psd</p>
          <p>📁 project_REAL_final_ForReal.psd</p>
        </div>
      </div>
      <div className="glow-card">
        <div className="text-3xl mb-3">✨</div>
        <h3 className="font-bold text-lg mb-2 text-[var(--accent-green)]">ใช้ Git แทน</h3>
        <div className="font-mono text-sm space-y-1 text-[var(--text-secondary)]">
          <p>📁 project/</p>
          <p className="pl-4">├── ย้อนเวลาได้ทุก version</p>
          <p className="pl-4">├── ทำงานร่วมกับทีมได้</p>
          <p className="pl-4">├── เห็นว่าใครแก้อะไร</p>
          <p className="pl-4">└── มี backup บน cloud</p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 3: Git Concepts Diagram
  <div key="concepts">
    <h2 className="text-4xl font-bold mb-8" style={{ color: "var(--accent-green)" }}>
      Git ทำงานยังไง?
    </h2>
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {/* Working Directory */}
      <div className="glow-card text-center min-w-[180px]">
        <div className="text-4xl mb-2">💻</div>
        <h3 className="font-bold text-[var(--accent-blue)]">Working Directory</h3>
        <p className="text-xs text-[var(--text-secondary)] mt-1">ไฟล์ที่กำลังทำงาน</p>
      </div>
      <div className="text-3xl text-[var(--accent-green)]">→</div>
      <div className="text-center text-sm text-[var(--accent-yellow)] font-mono">git add</div>
      <div className="text-3xl text-[var(--accent-green)]">→</div>
      {/* Staging Area */}
      <div className="glow-card text-center min-w-[180px]">
        <div className="text-4xl mb-2">📦</div>
        <h3 className="font-bold text-[var(--accent-purple)]">Staging Area</h3>
        <p className="text-xs text-[var(--text-secondary)] mt-1">เตรียมจะบันทึก</p>
      </div>
      <div className="text-3xl text-[var(--accent-green)]">→</div>
      <div className="text-center text-sm text-[var(--accent-yellow)] font-mono">git commit</div>
      <div className="text-3xl text-[var(--accent-green)]">→</div>
      {/* Repository */}
      <div className="glow-card text-center min-w-[180px]">
        <div className="text-4xl mb-2">📚</div>
        <h3 className="font-bold text-[var(--accent-pink)]">Repository</h3>
        <p className="text-xs text-[var(--text-secondary)] mt-1">ประวัติทั้งหมด</p>
      </div>
    </div>
  </div>,

  // Slide 4: Create Repository
  <div key="create-repo">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-green)" }}>
      สร้าง Repository ✨
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-xl font-bold mb-4 text-[var(--accent-blue)]">
          วิธีที่ 1: สร้างใหม่
        </h3>
        <TerminalBlock
          commands={[
            { input: "mkdir my-project", comment: "สร้างโฟลเดอร์" },
            { input: "cd my-project" },
            { input: "git init", output: "Initialized empty Git repository" },
          ]}
        />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4 text-[var(--accent-purple)]">
          วิธีที่ 2: Clone จาก GitHub
        </h3>
        <TerminalBlock
          commands={[
            {
              input: "git clone https://github.com/user/repo.git",
              comment: "โคลนจาก GitHub",
              output: "Cloning into 'repo'...",
            },
            { input: "cd repo" },
          ]}
        />
      </div>
    </div>
    <Callout type="tip" title="สำหรับวันนี้">
      เราจะใช้วิธี Clone เพื่อดึงโปรเจคนี้มาเล่นกัน!
    </Callout>
  </div>,

  // Slide 5: Basic Workflow
  <div key="workflow">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-green)" }}>
      Workflow ประจำวัน 🔄
    </h2>
    <div className="space-y-4">
      <div className="glow-card flex items-center gap-4">
        <span className="text-3xl w-12 h-12 rounded-xl bg-[rgba(79,195,247,0.15)] flex items-center justify-center">1</span>
        <div className="flex-1">
          <h3 className="font-bold text-[var(--accent-blue)]">แก้ไขไฟล์</h3>
          <p className="text-sm text-[var(--text-secondary)]">เขียนโค้ด, แก้ CSS, เพิ่มรูป ฯลฯ</p>
        </div>
        <code className="text-sm text-[var(--accent-yellow)]">เขียนโค้ดตามปกติ</code>
      </div>
      <div className="glow-card flex items-center gap-4">
        <span className="text-3xl w-12 h-12 rounded-xl bg-[rgba(179,136,255,0.15)] flex items-center justify-center">2</span>
        <div className="flex-1">
          <h3 className="font-bold text-[var(--accent-purple)]">Stage ไฟล์</h3>
          <p className="text-sm text-[var(--text-secondary)]">เลือกไฟล์ที่จะบันทึก</p>
        </div>
        <code className="text-sm text-[var(--accent-green)] font-mono">git add .</code>
      </div>
      <div className="glow-card flex items-center gap-4">
        <span className="text-3xl w-12 h-12 rounded-xl bg-[rgba(255,128,171,0.15)] flex items-center justify-center">3</span>
        <div className="flex-1">
          <h3 className="font-bold text-[var(--accent-pink)]">Commit</h3>
          <p className="text-sm text-[var(--text-secondary)]">บันทึกเป็น checkpoint</p>
        </div>
        <code className="text-sm text-[var(--accent-green)] font-mono">git commit -m &quot;message&quot;</code>
      </div>
      <div className="glow-card flex items-center gap-4">
        <span className="text-3xl w-12 h-12 rounded-xl bg-[rgba(105,240,174,0.15)] flex items-center justify-center">4</span>
        <div className="flex-1">
          <h3 className="font-bold text-[var(--accent-green)]">Push</h3>
          <p className="text-sm text-[var(--text-secondary)]">อัพขึ้น GitHub</p>
        </div>
        <code className="text-sm text-[var(--accent-green)] font-mono">git push</code>
      </div>
    </div>
  </div>,

  // Slide 6: Hands-on
  <div key="hands-on">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-green)" }}>
      ลองทำเลย! ✏️
    </h2>
    <TerminalBlock
      title="ทำตามทีละขั้น"
      commands={[
        { input: "git clone https://github.com/note5lab/basic-git-class.git", comment: "1. Clone โปรเจคนี้" },
        { input: "cd basic-git-class", comment: "2. เข้าโฟลเดอร์" },
        { input: "code .", comment: "3. เปิดใน VS Code" },
        { input: "", comment: "---" },
        { input: "# แก้ไขไฟล์ index.html ตามใจชอบ", comment: "4. แก้ไข" },
        { input: "", comment: "---" },
        { input: "git status", comment: "5. ดูว่ามีอะไรเปลี่ยน", output: "modified: index.html" },
        { input: "git add .", comment: "6. Stage ทั้งหมด" },
        { input: 'git commit -m "แก้หน้าแรก"', comment: "7. Commit!" },
        { input: "git push", comment: "8. Push ขึ้น GitHub" },
      ]}
    />
    <Callout type="exercise" title="ทดลอง">
      เปิด index.html → เปลี่ยนข้อความ → Commit → Push ดู!
    </Callout>
  </div>,

  // Slide 7: Pull
  <div key="pull">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-green)" }}>
      Git Pull — ดึงงานล่าสุด 📥
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <p className="text-lg mb-4 text-[var(--text-secondary)]">
          เมื่อเพื่อนในทีม push งานขึ้นไป เราต้อง pull ลงมา
        </p>
        <TerminalBlock
          commands={[
            { input: "git pull", comment: "ดึงงานล่าสุดจาก GitHub", output: "Updating a1b2c3d..e4f5g6h\nFast-forward\n index.html | 5 ++---\n 1 file changed" },
          ]}
        />
        <Callout type="tip" title="นิสัยที่ดี">
          <code>git pull</code> ก่อนเริ่มทำงานทุกครั้ง!
        </Callout>
      </div>
      <div className="glow-card text-center">
        <div className="text-6xl mb-4">🔄</div>
        <div className="space-y-3 text-left">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[rgba(105,240,174,0.2)] flex items-center justify-center text-sm">↑</span>
            <span><code>git push</code> — ส่งงานขึ้น</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[rgba(79,195,247,0.2)] flex items-center justify-center text-sm">↓</span>
            <span><code>git pull</code> — ดึงงานลง</span>
          </div>
        </div>
      </div>
    </div>
  </div>,

  // Slide 8: Summary
  <div key="summary">
    <h2 className="text-4xl font-bold mb-8" style={{ color: "var(--accent-green)" }}>
      สรุป Git Commands 📋
    </h2>
    <div className="grid grid-cols-2 gap-4 stagger-children">
      {[
        { cmd: "git init", desc: "สร้าง repo ใหม่", icon: "🌱" },
        { cmd: "git clone <url>", desc: "โคลน repo", icon: "📋" },
        { cmd: "git status", desc: "ดูสถานะไฟล์", icon: "👀" },
        { cmd: "git add .", desc: "stage ทุกไฟล์", icon: "📦" },
        { cmd: 'git commit -m "msg"', desc: "บันทึก checkpoint", icon: "💾" },
        { cmd: "git push", desc: "ส่งขึ้น GitHub", icon: "🚀" },
        { cmd: "git pull", desc: "ดึงงานล่าสุด", icon: "📥" },
        { cmd: "git log", desc: "ดูประวัติ commit", icon: "📜" },
      ].map((item) => (
        <div key={item.cmd} className="glow-card flex items-center gap-3">
          <span className="text-2xl">{item.icon}</span>
          <div>
            <code className="text-sm text-[var(--accent-green)]">{item.cmd}</code>
            <p className="text-xs text-[var(--text-secondary)]">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>,
];

export default function Lesson1() {
  return (
    <SlideLayout
      slides={slides}
      lessonTitle="Git & GitHub"
      lessonNumber={1}
      accentColor="#69f0ae"
    />
  );
}
