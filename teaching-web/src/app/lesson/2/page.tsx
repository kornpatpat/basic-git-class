"use client";

import SlideLayout from "@/components/SlideLayout";
import CodeBlock from "@/components/CodeBlock";
import CompareView from "@/components/CompareView";
import Callout from "@/components/Callout";

const slides = [
  // Slide 1: Title
  <div key="title" className="text-center">
    <div className="text-8xl mb-6">🏗️</div>
    <h1 className="text-5xl font-black mb-4 gradient-text">HTML & CSS</h1>
    <p className="text-2xl text-[var(--text-secondary)]">ภาษาของเว็บไซต์</p>
    <div className="mt-8 flex justify-center gap-4">
      <span className="px-4 py-2 rounded-full text-lg" style={{ background: "rgba(255,171,64,0.1)", color: "var(--accent-orange)" }}>
        HTML = โครงสร้าง
      </span>
      <span className="px-4 py-2 rounded-full text-lg" style={{ background: "rgba(79,195,247,0.1)", color: "var(--accent-blue)" }}>
        CSS = ความสวยงาม
      </span>
    </div>
  </div>,

  // Slide 2: HTML คืออะไร
  <div key="what-is-html">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-blue)" }}>
      HTML คืออะไร? 🧱
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <p className="text-xl mb-4 text-[var(--text-secondary)]">
          HTML = <strong className="text-[var(--accent-orange)]">HyperText Markup Language</strong>
        </p>
        <p className="text-lg mb-6 text-[var(--text-secondary)]">
          เปรียบเหมือน &quot;โครงกระดูก&quot; ของเว็บ — บอกว่าอะไรอยู่ตรงไหน
        </p>
        <div className="space-y-3 stagger-children">
          <div className="glow-card py-3">
            <span className="text-[var(--accent-orange)]">เปรียบเทียบ:</span> ถ้าเว็บเป็นบ้าน...
          </div>
          <div className="glow-card py-3">🧱 HTML = ผนัง, ประตู, หน้าต่าง</div>
          <div className="glow-card py-3">🎨 CSS = สี, พื้นผิว, ของตกแต่ง</div>
          <div className="glow-card py-3">⚡ JavaScript = ระบบไฟ, ระบบน้ำ</div>
        </div>
      </div>
      <div>
        <CodeBlock
          filename="index.html"
          language="html"
          code={`<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>
</head>
<body>
  <h1>สวัสดี!</h1>
  <p>นี่คือเว็บแรกของฉัน</p>
</body>
</html>`}
          highlightLines={[7, 8]}
        />
      </div>
    </div>
  </div>,

  // Slide 3: HTML Tags
  <div key="tags">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-blue)" }}>
      HTML Tags ที่ใช้บ่อย 🏷️
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 stagger-children">
      {[
        { tag: "<h1> - <h6>", desc: "หัวข้อ (ใหญ่ → เล็ก)", color: "var(--accent-orange)" },
        { tag: "<p>", desc: "ย่อหน้า / ข้อความ", color: "var(--accent-blue)" },
        { tag: "<a href=''>", desc: "ลิงก์", color: "var(--accent-green)" },
        { tag: "<img src=''>", desc: "รูปภาพ", color: "var(--accent-purple)" },
        { tag: "<div>", desc: "กล่อง (จัด layout)", color: "var(--accent-pink)" },
        { tag: "<span>", desc: "จัดกลุ่มข้อความ", color: "var(--accent-yellow)" },
        { tag: "<ul> <li>", desc: "รายการจุด", color: "var(--accent-orange)" },
        { tag: "<button>", desc: "ปุ่มกด", color: "var(--accent-green)" },
        { tag: "<input>", desc: "ช่องกรอกข้อมูล", color: "var(--accent-blue)" },
      ].map((item) => (
        <div key={item.tag} className="glow-card">
          <code className="text-lg font-bold" style={{ color: item.color }}>
            {item.tag}
          </code>
          <p className="text-sm text-[var(--text-secondary)] mt-1">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>,

  // Slide 4: Class & ID
  <div key="class-id">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-blue)" }}>
      Class & ID — ตั้งชื่อให้ element 🏷️
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-xl font-bold mb-3 text-[var(--accent-purple)]">Class (ใช้ซ้ำได้)</h3>
        <CodeBlock
          filename="class-example.html"
          language="html"
          code={`<div class="card">การ์ด 1</div>
<div class="card">การ์ด 2</div>
<div class="card highlight">การ์ดพิเศษ</div>`}
        />
        <div className="mt-3">
          <CodeBlock
            filename="style.css"
            language="css"
            code={`.card {
  padding: 20px;
  background: #f0f0f0;
}
.highlight {
  border: 2px solid gold;
}`}
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3 text-[var(--accent-pink)]">ID (ใช้ได้ครั้งเดียว)</h3>
        <CodeBlock
          filename="id-example.html"
          language="html"
          code={`<div id="header">Header</div>
<div id="main-content">เนื้อหา</div>
<div id="footer">Footer</div>`}
        />
        <div className="mt-3">
          <CodeBlock
            filename="style.css"
            language="css"
            code={`#header {
  background: navy;
  color: white;
}
#footer {
  background: #333;
}`}
          />
        </div>
      </div>
    </div>
    <Callout type="tip">
      <strong>Class</strong> = ชื่อเล่น (หลายคนมีได้) | <strong>ID</strong> = เลขบัตรประชาชน (มีได้คนเดียว)
    </Callout>
  </div>,

  // Slide 5: CSS Basics
  <div key="css-basics">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-blue)" }}>
      CSS พื้นฐาน 🎨
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <CodeBlock
          filename="style.css"
          language="css"
          code={`/* เลือก element → กำหนด style */
h1 {
  color: #4fc3f7;
  font-size: 48px;
  font-weight: bold;
}

.card {
  background: #1a1a2e;
  padding: 24px;
  border-radius: 12px;
}

#hero {
  background: linear-gradient(
    135deg, #667eea, #764ba2
  );
  min-height: 100vh;
}`}
          highlightLines={[2, 3, 4, 5]}
        />
      </div>
      <div className="space-y-4 stagger-children">
        <div className="glow-card">
          <code className="text-[var(--accent-blue)]">color</code>
          <p className="text-sm text-[var(--text-secondary)]">สีตัวอักษร — ใช้ชื่อสี, hex, rgb</p>
          <div className="flex gap-2 mt-2">
            <span className="w-8 h-8 rounded" style={{ background: "#4fc3f7" }} />
            <span className="w-8 h-8 rounded" style={{ background: "#ff80ab" }} />
            <span className="w-8 h-8 rounded" style={{ background: "#69f0ae" }} />
            <span className="w-8 h-8 rounded" style={{ background: "#ffab40" }} />
          </div>
        </div>
        <div className="glow-card">
          <code className="text-[var(--accent-purple)]">background</code>
          <p className="text-sm text-[var(--text-secondary)]">พื้นหลัง — สี, gradient, รูป</p>
        </div>
        <div className="glow-card">
          <code className="text-[var(--accent-green)]">font-size</code>
          <p className="text-sm text-[var(--text-secondary)]">ขนาดตัวอักษร — px, rem, em</p>
          <div className="flex items-end gap-3 mt-2">
            <span style={{ fontSize: "12px" }}>12px</span>
            <span style={{ fontSize: "18px" }}>18px</span>
            <span style={{ fontSize: "24px" }}>24px</span>
            <span style={{ fontSize: "32px" }}>32px</span>
          </div>
        </div>
        <div className="glow-card">
          <code className="text-[var(--accent-pink)]">display</code>
          <p className="text-sm text-[var(--text-secondary)]">block, inline, flex, grid, none</p>
        </div>
      </div>
    </div>
  </div>,

  // Slide 6: Live Example
  <div key="live-example">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-blue)" }}>
      ลองดู Live! 👀
    </h2>
    <CompareView
      title="Profile Card"
      htmlCode={`<div class="profile-card">
  <img src="https://i.pravatar.cc/120" alt="avatar" class="avatar">
  <h2 class="name">สมชาย ดีไซน์</h2>
  <p class="role">Industrial Designer</p>
  <div class="stats">
    <div class="stat">
      <strong>42</strong>
      <span>Projects</span>
    </div>
    <div class="stat">
      <strong>128</strong>
      <span>Followers</span>
    </div>
  </div>
  <button class="btn">Follow</button>
</div>`}
      cssCode={`.profile-card {
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  background: #f8f9fa;
  border-radius: 16px;
  padding: 32px 24px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  font-family: sans-serif;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 16px;
}
.name {
  font-size: 22px;
  margin: 0 0 4px;
}
.role {
  color: #888;
  margin: 0 0 20px;
}
.stats {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 20px;
}
.stat {
  text-align: center;
}
.stat strong {
  display: block;
  font-size: 20px;
  color: #333;
}
.stat span {
  font-size: 13px;
  color: #999;
}
.btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 10px 32px;
  border-radius: 24px;
  font-size: 15px;
  cursor: pointer;
}`}
    />
    <Callout type="exercise" title="ลองเลย!">
      สลับดู tab HTML / CSS / Preview — ลองเข้าใจว่าแต่ละ property ทำอะไร
    </Callout>
  </div>,

  // Slide 7: CSS Selectors cheat
  <div key="selectors">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-blue)" }}>
      CSS Selectors — เลือก element 🎯
    </h2>
    <div className="grid grid-cols-2 gap-3 stagger-children">
      {[
        { selector: "h1", desc: "เลือก tag โดยตรง", example: "h1 { color: red; }" },
        { selector: ".card", desc: "เลือกด้วย class", example: '.card { padding: 20px; }' },
        { selector: "#hero", desc: "เลือกด้วย ID", example: "#hero { height: 100vh; }" },
        { selector: "div > p", desc: "ลูกตรงของ div", example: "div > p { margin: 0; }" },
        { selector: "a:hover", desc: "เมื่อ hover ลิงก์", example: "a:hover { color: blue; }" },
        { selector: ".card img", desc: "img ภายใน .card", example: ".card img { width: 100%; }" },
      ].map((item) => (
        <div key={item.selector} className="glow-card">
          <code className="text-xl font-bold text-[var(--accent-blue)]">{item.selector}</code>
          <p className="text-sm text-[var(--text-secondary)] mt-1">{item.desc}</p>
          <code className="text-xs text-[var(--accent-green)] block mt-2 opacity-70">{item.example}</code>
        </div>
      ))}
    </div>
  </div>,

  // Slide 8: Exercise
  <div key="exercise">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-blue)" }}>
      Exercise: สร้าง Profile Card ✏️
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <Callout type="exercise" title="โจทย์">
          เปิดไฟล์ <code>exercises/01-profile-card/index.html</code> แล้วสร้าง Profile Card ที่มี:
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>รูป avatar (ใช้ <code>https://i.pravatar.cc/150</code>)</li>
            <li>ชื่อ-นามสกุล</li>
            <li>ตำแหน่ง / สาขา</li>
            <li>ปุ่ม Follow</li>
            <li>ตกแต่งด้วย CSS ให้สวย!</li>
          </ul>
        </Callout>
        <Callout type="tip" title="Hint">
          ดู tab CSS ในตัวอย่างก่อนหน้า แล้วลองเอา properties มาใช้!
        </Callout>
      </div>
      <div className="glow-card text-center">
        <div className="text-6xl mb-4">🎨</div>
        <p className="text-lg font-bold text-[var(--accent-blue)] mb-2">เป้าหมาย</p>
        <div className="text-left text-sm space-y-2 text-[var(--text-secondary)]">
          <p>✅ ใช้ HTML tags ที่เรียนมา</p>
          <p>✅ ตั้ง class ให้ elements</p>
          <p>✅ จัด style ด้วย CSS</p>
          <p>✅ ใช้ color, font-size, padding</p>
          <p>✅ Commit & Push ขึ้น GitHub</p>
        </div>
      </div>
    </div>
  </div>,
];

export default function Lesson2() {
  return (
    <SlideLayout
      slides={slides}
      lessonTitle="HTML & CSS Basics"
      lessonNumber={2}
      accentColor="#4fc3f7"
    />
  );
}
