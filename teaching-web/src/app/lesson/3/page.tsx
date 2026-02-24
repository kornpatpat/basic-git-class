"use client";

import SlideLayout from "@/components/SlideLayout";
import CodeBlock from "@/components/CodeBlock";
import Callout from "@/components/Callout";
import TerminalBlock from "@/components/TerminalBlock";

const slides = [
  // Slide 1: Title
  <div key="title" className="text-center">
    <div className="text-8xl mb-6">⚡</div>
    <h1 className="text-5xl font-black mb-4 gradient-text">Next.js & JSX</h1>
    <p className="text-2xl text-[var(--text-secondary)]">React Framework สำหรับสร้างเว็บ</p>
    <div className="mt-8 flex justify-center gap-4 text-lg">
      <span className="px-4 py-2 rounded-full" style={{ background: "rgba(179,136,255,0.1)", color: "var(--accent-purple)" }}>
        Components
      </span>
      <span className="px-4 py-2 rounded-full" style={{ background: "rgba(79,195,247,0.1)", color: "var(--accent-blue)" }}>
        JSX
      </span>
      <span className="px-4 py-2 rounded-full" style={{ background: "rgba(255,128,171,0.1)", color: "var(--accent-pink)" }}>
        Static Pages
      </span>
    </div>
  </div>,

  // Slide 2: HTML vs JSX
  <div key="html-vs-jsx">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-purple)" }}>
      HTML vs JSX — ต่างกันยังไง? 🤔
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-xl font-bold mb-3 text-[var(--accent-orange)]">HTML (ธรรมดา)</h3>
        <CodeBlock
          filename="index.html"
          language="html"
          code={`<div class="card">
  <img src="photo.jpg" />
  <h2>Title</h2>
  <p style="color: red; font-size: 14px;">
    Hello World
  </p>
</div>`}
        />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3 text-[var(--accent-purple)]">JSX (React/Next.js)</h3>
        <CodeBlock
          filename="Card.tsx"
          language="jsx"
          code={`<div className="card">
  <img src="photo.jpg" />
  <h2>Title</h2>
  <p style={{ color: "red", fontSize: "14px" }}>
    Hello World
  </p>
</div>`}
          highlightLines={[1, 4]}
        />
      </div>
    </div>
    <div className="mt-6 grid grid-cols-3 gap-3">
      <div className="glow-card text-center">
        <code className="text-[var(--accent-orange)]">class</code>
        <span className="text-xl mx-2">→</span>
        <code className="text-[var(--accent-purple)]">className</code>
      </div>
      <div className="glow-card text-center">
        <code className="text-[var(--accent-orange)]">style=&quot;...&quot;</code>
        <span className="text-xl mx-2">→</span>
        <code className="text-[var(--accent-purple)]">style={"{{}}"}</code>
      </div>
      <div className="glow-card text-center">
        <code className="text-[var(--accent-orange)]">font-size</code>
        <span className="text-xl mx-2">→</span>
        <code className="text-[var(--accent-purple)]">fontSize</code>
      </div>
    </div>
  </div>,

  // Slide 3: What is Next.js
  <div key="what-is-nextjs">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-purple)" }}>
      Next.js คืออะไร? ⚡
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <p className="text-xl text-[var(--text-secondary)]">
          Next.js = <strong className="text-[var(--accent-purple)]">React Framework</strong> ที่ทำให้สร้างเว็บง่ายขึ้น
        </p>
        <div className="stagger-children space-y-3">
          <div className="glow-card py-3 flex items-center gap-3">
            <span className="text-2xl">📁</span>
            <div>
              <strong className="text-[var(--accent-blue)]">File-based Routing</strong>
              <p className="text-sm text-[var(--text-secondary)]">สร้างไฟล์ = สร้างหน้าเว็บ</p>
            </div>
          </div>
          <div className="glow-card py-3 flex items-center gap-3">
            <span className="text-2xl">🧩</span>
            <div>
              <strong className="text-[var(--accent-green)]">Components</strong>
              <p className="text-sm text-[var(--text-secondary)]">แบ่งเว็บเป็นชิ้นส่วนนำกลับมาใช้ได้</p>
            </div>
          </div>
          <div className="glow-card py-3 flex items-center gap-3">
            <span className="text-2xl">🚀</span>
            <div>
              <strong className="text-[var(--accent-pink)]">Zero Config</strong>
              <p className="text-sm text-[var(--text-secondary)]">ใช้งานได้เลย ไม่ต้องตั้งค่าเอง</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-3 text-[var(--accent-blue)]">โครงสร้างโฟลเดอร์</h3>
        <div className="glow-card font-mono text-sm space-y-1">
          <p className="text-[var(--accent-yellow)]">my-app/</p>
          <p className="pl-4 text-[var(--text-secondary)]">├── src/</p>
          <p className="pl-8 text-[var(--text-secondary)]">├── app/</p>
          <p className="pl-12 text-[var(--accent-blue)]">│   ├── page.tsx <span className="text-[var(--text-secondary)]">← หน้าแรก /</span></p>
          <p className="pl-12 text-[var(--accent-blue)]">│   ├── layout.tsx <span className="text-[var(--text-secondary)]">← layout หลัก</span></p>
          <p className="pl-12 text-[var(--text-secondary)]">│   ├── about/</p>
          <p className="pl-16 text-[var(--accent-purple)]">│   │   └── page.tsx <span className="text-[var(--text-secondary)]">← /about</span></p>
          <p className="pl-12 text-[var(--text-secondary)]">│   └── globals.css</p>
          <p className="pl-8 text-[var(--text-secondary)]">└── components/</p>
          <p className="pl-12 text-[var(--accent-green)]">    └── Card.tsx <span className="text-[var(--text-secondary)]">← reusable</span></p>
          <p className="pl-4 text-[var(--text-secondary)]">├── public/ <span className="opacity-50">← รูป, font, ไฟล์ static</span></p>
          <p className="pl-4 text-[var(--text-secondary)]">└── package.json</p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 4: Component
  <div key="component">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-purple)" }}>
      Component = ชิ้นส่วนเว็บ 🧩
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <p className="text-lg mb-4 text-[var(--text-secondary)]">
          เหมือนเลโก้ — สร้างชิ้นส่วนเล็กๆ แล้วเอามาประกอบกัน
        </p>
        <CodeBlock
          filename="components/ProfileCard.tsx"
          language="tsx"
          code={`// สร้าง Component
export default function ProfileCard() {
  return (
    <div className="card">
      <img src="https://i.pravatar.cc/120" />
      <h2>สมชาย ดีไซน์</h2>
      <p>Industrial Designer</p>
      <button>Follow</button>
    </div>
  );
}`}
          highlightLines={[2]}
        />
      </div>
      <div>
        <CodeBlock
          filename="app/page.tsx"
          language="tsx"
          code={`// เรียกใช้ Component
import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <div>
      <h1>Our Team</h1>

      {/* ใช้ซ้ำได้เลย! */}
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
}`}
          highlightLines={[10, 11, 12]}
        />
        <Callout type="tip">
          Component ชื่อต้องขึ้นต้นด้วย<strong>ตัวใหญ่</strong>เสมอ!
        </Callout>
      </div>
    </div>
  </div>,

  // Slide 5: Props
  <div key="props">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-purple)" }}>
      Props = ส่งข้อมูลเข้า Component 📦
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-bold mb-3 text-[var(--accent-blue)]">สร้าง Component รับ Props</h3>
        <CodeBlock
          filename="components/ProfileCard.tsx"
          language="tsx"
          code={`interface ProfileCardProps {
  name: string;
  role: string;
  avatar: string;
}

export default function ProfileCard({
  name, role, avatar
}: ProfileCardProps) {
  return (
    <div className="card">
      <img src={avatar} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}`}
          highlightLines={[1, 2, 3, 4, 8, 12, 13, 14]}
        />
      </div>
      <div>
        <h3 className="text-lg font-bold mb-3 text-[var(--accent-green)]">เรียกใช้ + ส่งข้อมูล</h3>
        <CodeBlock
          filename="app/page.tsx"
          language="tsx"
          code={`<ProfileCard
  name="สมชาย"
  role="UX Designer"
  avatar="https://i.pravatar.cc/120?img=1"
/>

<ProfileCard
  name="สมหญิง"
  role="Product Designer"
  avatar="https://i.pravatar.cc/120?img=5"
/>`}
        />
        <Callout type="info">
          <strong>Props</strong> ทำให้ 1 component แสดงข้อมูลต่างกันได้!
          เหมือนพิมพ์เขียวเดียว — แต่ทาสีต่างกันแต่ละหลัง
        </Callout>
      </div>
    </div>
  </div>,

  // Slide 6: Data from JSON
  <div key="data-json">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-purple)" }}>
      โหลดข้อมูลจาก JSON 📋
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <CodeBlock
          filename="data/team.json"
          language="json"
          code={`[
  {
    "name": "สมชาย",
    "role": "UX Designer",
    "avatar": "https://i.pravatar.cc/120?img=1"
  },
  {
    "name": "สมหญิง",
    "role": "Product Designer",
    "avatar": "https://i.pravatar.cc/120?img=5"
  }
]`}
        />
      </div>
      <div>
        <CodeBlock
          filename="app/page.tsx"
          language="tsx"
          code={`import team from "@/data/team.json";
import ProfileCard from "@/components/ProfileCard";

export default function TeamPage() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {team.map((person, i) => (
        <ProfileCard
          key={i}
          name={person.name}
          role={person.role}
          avatar={person.avatar}
        />
      ))}
    </div>
  );
}`}
          highlightLines={[1, 7, 8, 9, 10, 11, 12, 13]}
        />
      </div>
    </div>
    <Callout type="tip" title="ไม่ต้อง Database!">
      เก็บข้อมูลเป็น JSON ไฟล์ แล้ว import เข้ามาใช้ตรงๆ ได้เลย — เหมาะกับ static site
    </Callout>
  </div>,

  // Slide 7: Setup
  <div key="setup">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-purple)" }}>
      เริ่มต้นใช้ Next.js 🚀
    </h2>
    <TerminalBlock
      title="Setup Next.js"
      commands={[
        { input: "npx create-next-app@latest my-portfolio", comment: "สร้างโปรเจคใหม่" },
        { input: "cd my-portfolio" },
        { input: "npm run dev", comment: "เปิด dev server", output: "▲ Next.js\n- Local: http://localhost:3000\n\n✓ Ready" },
      ]}
    />
    <div className="mt-4 grid grid-cols-3 gap-3">
      <div className="glow-card text-center">
        <code className="text-[var(--accent-green)]">npm run dev</code>
        <p className="text-xs text-[var(--text-secondary)] mt-1">เปิด dev server</p>
      </div>
      <div className="glow-card text-center">
        <code className="text-[var(--accent-blue)]">npm run build</code>
        <p className="text-xs text-[var(--text-secondary)] mt-1">build สำหรับ production</p>
      </div>
      <div className="glow-card text-center">
        <code className="text-[var(--accent-purple)]">npm start</code>
        <p className="text-xs text-[var(--text-secondary)] mt-1">รัน production</p>
      </div>
    </div>
    <Callout type="exercise" title="ลองเลย!">
      เปิด <code>teaching-web/</code> ในโปรเจคนี้ แล้วรัน <code>npm run dev</code> — ดูผลใน browser!
    </Callout>
  </div>,

  // Slide 8: Styling in Next.js
  <div key="styling">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-purple)" }}>
      วิธี Style ใน Next.js 🎨
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 stagger-children">
      <div className="glow-card">
        <h3 className="font-bold text-[var(--accent-blue)] mb-2">1. CSS File</h3>
        <CodeBlock
          language="tsx"
          code={`// globals.css
.card { padding: 20px; }

// page.tsx
import "./globals.css";
<div className="card">...</div>`}
        />
      </div>
      <div className="glow-card">
        <h3 className="font-bold text-[var(--accent-purple)] mb-2">2. Inline Style</h3>
        <CodeBlock
          language="tsx"
          code={`<div style={{
  padding: "20px",
  background: "#1a1a2e",
  borderRadius: "12px",
}}>
  ...
</div>`}
        />
      </div>
      <div className="glow-card">
        <h3 className="font-bold text-[var(--accent-green)] mb-2">3. Tailwind CSS</h3>
        <CodeBlock
          language="tsx"
          code={`<div className="
  p-5
  bg-gray-900
  rounded-xl
">
  ...
</div>`}
        />
      </div>
    </div>
    <Callout type="info">
      วันนี้เราจะใช้ทั้ง CSS file และ Tailwind — เลือกวิธีที่ถนัดได้!
    </Callout>
  </div>,
];

export default function Lesson3() {
  return (
    <SlideLayout
      slides={slides}
      lessonTitle="Next.js & JSX"
      lessonNumber={3}
      accentColor="#b388ff"
    />
  );
}
