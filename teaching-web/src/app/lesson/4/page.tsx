"use client";

import SlideLayout from "@/components/SlideLayout";
import CodeBlock from "@/components/CodeBlock";
import InteractiveBox from "@/components/InteractiveBox";
import CompareView from "@/components/CompareView";
import Callout from "@/components/Callout";

const slides = [
  // Slide 1: Title
  <div key="title" className="text-center">
    <div className="text-8xl mb-6">📐</div>
    <h1 className="text-5xl font-black mb-4 gradient-text">CSS Layout</h1>
    <p className="text-2xl text-[var(--text-secondary)]">จัด Layout แบบมืออาชีพ</p>
    <div className="mt-8 flex justify-center gap-4 text-lg">
      <span className="px-4 py-2 rounded-full" style={{ background: "rgba(255,128,171,0.1)", color: "var(--accent-pink)" }}>
        Box Model
      </span>
      <span className="px-4 py-2 rounded-full" style={{ background: "rgba(79,195,247,0.1)", color: "var(--accent-blue)" }}>
        Flexbox
      </span>
      <span className="px-4 py-2 rounded-full" style={{ background: "rgba(179,136,255,0.1)", color: "var(--accent-purple)" }}>
        Position
      </span>
    </div>
  </div>,

  // Slide 2: Box Model
  <div key="box-model">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-pink)" }}>
      Box Model — ทุก element เป็นกล่อง 📦
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex items-center justify-center">
        {/* Visual Box Model */}
        <div className="relative">
          <div className="bg-[rgba(255,171,64,0.2)] border-2 border-dashed border-[var(--accent-orange)] p-6 rounded-lg">
            <span className="absolute -top-3 left-4 text-xs font-mono bg-[var(--bg-primary)] px-2 text-[var(--accent-orange)]">margin</span>
            <div className="bg-[rgba(105,240,174,0.2)] border-2 border-dashed border-[var(--accent-green)] p-6 rounded-lg relative">
              <span className="absolute -top-3 left-4 text-xs font-mono bg-[rgba(255,171,64,0.2)] px-2 text-[var(--accent-green)]">border</span>
              <div className="bg-[rgba(79,195,247,0.2)] border-2 border-dashed border-[var(--accent-blue)] p-8 rounded-lg relative">
                <span className="absolute -top-3 left-4 text-xs font-mono bg-[rgba(105,240,174,0.2)] px-2 text-[var(--accent-blue)]">padding</span>
                <div className="bg-[rgba(179,136,255,0.3)] border-2 border-[var(--accent-purple)] rounded-lg p-4 text-center relative">
                  <span className="absolute -top-3 left-4 text-xs font-mono bg-[rgba(79,195,247,0.2)] px-2 text-[var(--accent-purple)]">content</span>
                  <span className="font-bold text-[var(--accent-purple)]">สวัสดี!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3 stagger-children">
        <div className="glow-card flex items-center gap-3">
          <span className="w-4 h-4 rounded bg-[var(--accent-purple)]" />
          <div>
            <strong className="text-[var(--accent-purple)]">Content</strong>
            <span className="text-sm text-[var(--text-secondary)] ml-2">— เนื้อหา (ข้อความ, รูป)</span>
          </div>
        </div>
        <div className="glow-card flex items-center gap-3">
          <span className="w-4 h-4 rounded bg-[var(--accent-blue)]" />
          <div>
            <strong className="text-[var(--accent-blue)]">Padding</strong>
            <span className="text-sm text-[var(--text-secondary)] ml-2">— ระยะห่างภายใน</span>
          </div>
        </div>
        <div className="glow-card flex items-center gap-3">
          <span className="w-4 h-4 rounded bg-[var(--accent-green)]" />
          <div>
            <strong className="text-[var(--accent-green)]">Border</strong>
            <span className="text-sm text-[var(--text-secondary)] ml-2">— ขอบ</span>
          </div>
        </div>
        <div className="glow-card flex items-center gap-3">
          <span className="w-4 h-4 rounded bg-[var(--accent-orange)]" />
          <div>
            <strong className="text-[var(--accent-orange)]">Margin</strong>
            <span className="text-sm text-[var(--text-secondary)] ml-2">— ระยะห่างภายนอก</span>
          </div>
        </div>
        <CodeBlock
          language="css"
          code={`.card {
  padding: 24px;      /* ห่างข้างใน */
  margin: 16px;       /* ห่างข้างนอก */
  border: 2px solid;  /* ขอบ */
}`}
        />
      </div>
    </div>
  </div>,

  // Slide 3: Display property
  <div key="display">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-pink)" }}>
      Display — กำหนดการแสดงผล 📺
    </h2>
    <CompareView
      title="Display: block vs inline vs flex"
      htmlCode={`<h2 style="margin-bottom:16px;color:#333;">display: block</h2>
<div style="margin-bottom:24px;">
  <div style="background:#667eea;color:white;padding:12px;margin:4px 0;">Block 1 (เต็มบรรทัด)</div>
  <div style="background:#764ba2;color:white;padding:12px;margin:4px 0;">Block 2 (เต็มบรรทัด)</div>
</div>

<h2 style="margin-bottom:16px;color:#333;">display: inline</h2>
<div style="margin-bottom:24px;">
  <span style="background:#f093fb;padding:8px;">Inline 1</span>
  <span style="background:#f5576c;color:white;padding:8px;">Inline 2</span>
  <span style="background:#4facfe;color:white;padding:8px;">Inline 3</span>
</div>

<h2 style="margin-bottom:16px;color:#333;">display: flex</h2>
<div style="display:flex;gap:12px;">
  <div style="background:#43e97b;padding:16px;border-radius:8px;flex:1;text-align:center;">Flex 1</div>
  <div style="background:#38f9d7;padding:16px;border-radius:8px;flex:1;text-align:center;">Flex 2</div>
  <div style="background:#4facfe;padding:16px;border-radius:8px;flex:1;text-align:center;">Flex 3</div>
</div>`}
    />
  </div>,

  // Slide 4: Flexbox Interactive
  <div key="flexbox-interactive">
    <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--accent-pink)" }}>
      Flexbox — ลองเล่นเลย! 🎮
    </h2>
    <InteractiveBox
      title="Flex Container"
      description="กดปุ่มเปลี่ยน property แล้วดูผลลัพธ์ทันที"
      initialStyle={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "8px",
      }}
      controls={[
        {
          property: "flexDirection",
          options: ["row", "column", "row-reverse", "column-reverse"],
        },
        {
          property: "justifyContent",
          options: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"],
        },
        {
          property: "alignItems",
          options: ["flex-start", "center", "flex-end", "stretch"],
        },
        {
          property: "gap",
          options: ["0px", "8px", "16px", "32px"],
        },
      ]}
    />
  </div>,

  // Slide 5: Flexbox common patterns
  <div key="flex-patterns">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-pink)" }}>
      Flexbox Patterns ที่ใช้บ่อย 🎯
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-children">
      <div className="glow-card">
        <h3 className="font-bold text-[var(--accent-blue)] mb-2">Navbar (จัดซ้าย-ขวา)</h3>
        <div className="flex justify-between items-center bg-[rgba(79,195,247,0.1)] p-3 rounded-lg mb-2">
          <span className="bg-[var(--accent-blue)] text-[var(--bg-primary)] px-3 py-1 rounded text-sm font-bold">Logo</span>
          <div className="flex gap-2">
            <span className="bg-[rgba(79,195,247,0.2)] px-3 py-1 rounded text-sm">Home</span>
            <span className="bg-[rgba(79,195,247,0.2)] px-3 py-1 rounded text-sm">About</span>
            <span className="bg-[rgba(79,195,247,0.2)] px-3 py-1 rounded text-sm">Contact</span>
          </div>
        </div>
        <code className="text-xs text-[var(--accent-green)]">display: flex; justify-content: space-between;</code>
      </div>
      <div className="glow-card">
        <h3 className="font-bold text-[var(--accent-purple)] mb-2">Card Grid</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="w-16 h-16 rounded-lg bg-[rgba(179,136,255,0.2)] flex items-center justify-center text-sm">
              {n}
            </div>
          ))}
        </div>
        <code className="text-xs text-[var(--accent-green)]">display: flex; flex-wrap: wrap; gap: 8px;</code>
      </div>
      <div className="glow-card">
        <h3 className="font-bold text-[var(--accent-pink)] mb-2">Center Everything</h3>
        <div className="flex items-center justify-center h-24 bg-[rgba(255,128,171,0.1)] rounded-lg mb-2">
          <span className="bg-[var(--accent-pink)] text-[var(--bg-primary)] px-4 py-2 rounded-lg font-bold">Center!</span>
        </div>
        <code className="text-xs text-[var(--accent-green)]">display: flex; justify-content: center; align-items: center;</code>
      </div>
      <div className="glow-card">
        <h3 className="font-bold text-[var(--accent-green)] mb-2">Sidebar Layout</h3>
        <div className="flex gap-2 mb-2">
          <div className="w-16 bg-[rgba(105,240,174,0.2)] rounded-lg flex items-center justify-center text-xs p-2">Side</div>
          <div className="flex-1 h-20 bg-[rgba(105,240,174,0.1)] rounded-lg flex items-center justify-center text-xs">Main Content (flex: 1)</div>
        </div>
        <code className="text-xs text-[var(--accent-green)]">display: flex; .main {"{"} flex: 1; {"}"}</code>
      </div>
    </div>
  </div>,

  // Slide 6: Position
  <div key="position">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-pink)" }}>
      Position — ตำแหน่ง element 📍
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-3 stagger-children">
        <div className="glow-card">
          <code className="text-[var(--accent-blue)] font-bold">static</code>
          <p className="text-sm text-[var(--text-secondary)]">ค่าเริ่มต้น — ไหลตามปกติ</p>
        </div>
        <div className="glow-card">
          <code className="text-[var(--accent-purple)] font-bold">relative</code>
          <p className="text-sm text-[var(--text-secondary)]">ขยับจากตำแหน่งเดิม — ยังกินที่อยู่</p>
        </div>
        <div className="glow-card">
          <code className="text-[var(--accent-pink)] font-bold">absolute</code>
          <p className="text-sm text-[var(--text-secondary)]">ลอยตัว — อ้างอิงจากพ่อที่เป็น relative</p>
        </div>
        <div className="glow-card">
          <code className="text-[var(--accent-green)] font-bold">fixed</code>
          <p className="text-sm text-[var(--text-secondary)]">ติดหน้าจอ — scroll แล้วไม่หาย</p>
        </div>
      </div>
      <div>
        {/* Position visual */}
        <div className="relative bg-[rgba(179,136,255,0.1)] rounded-xl p-6 h-64 border border-dashed border-[var(--accent-purple)]">
          <span className="absolute -top-3 left-4 text-xs font-mono bg-[var(--bg-primary)] px-2 text-[var(--accent-purple)]">
            position: relative (พ่อ)
          </span>

          <div className="absolute top-4 right-4 w-24 h-12 bg-[rgba(255,128,171,0.3)] border border-[var(--accent-pink)] rounded-lg flex items-center justify-center text-xs">
            <div>
              <span className="text-[var(--accent-pink)] font-bold block">absolute</span>
              <span className="text-[var(--text-secondary)]">top: 4 right: 4</span>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 w-28 h-12 bg-[rgba(79,195,247,0.3)] border border-[var(--accent-blue)] rounded-lg flex items-center justify-center text-xs">
            <div>
              <span className="text-[var(--accent-blue)] font-bold block">absolute</span>
              <span className="text-[var(--text-secondary)]">bottom: 4 left: 4</span>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-12 bg-[rgba(105,240,174,0.3)] border border-[var(--accent-green)] rounded-lg flex items-center justify-center text-xs">
            <div className="text-center">
              <span className="text-[var(--accent-green)] font-bold block">absolute</span>
              <span className="text-[var(--text-secondary)]">50%, 50% + translate</span>
            </div>
          </div>
        </div>

        <Callout type="tip" title="กฎสำคัญ!">
          <code>absolute</code> จะอ้างอิงจากพ่อที่ใกล้ที่สุดที่มี <code>position: relative</code>
        </Callout>
      </div>
    </div>
  </div>,

  // Slide 7: Figma to Code thinking
  <div key="figma-to-code">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-pink)" }}>
      วิธีคิด: Figma → Code 🎨→💻
    </h2>
    <div className="space-y-4 stagger-children">
      <div className="glow-card flex items-center gap-4">
        <span className="text-3xl w-12 h-12 rounded-xl bg-[rgba(255,128,171,0.15)] flex items-center justify-center">1</span>
        <div>
          <h3 className="font-bold text-[var(--accent-pink)]">แบ่งเป็นกล่อง (Boxes)</h3>
          <p className="text-sm text-[var(--text-secondary)]">ดู design แล้วแบ่งเป็นกล่องใหญ่ → กล่องย่อย</p>
        </div>
      </div>
      <div className="glow-card flex items-center gap-4">
        <span className="text-3xl w-12 h-12 rounded-xl bg-[rgba(79,195,247,0.15)] flex items-center justify-center">2</span>
        <div>
          <h3 className="font-bold text-[var(--accent-blue)]">กำหนด Layout (Flex / Position)</h3>
          <p className="text-sm text-[var(--text-secondary)]">อยู่แนวนอน? → flex-direction: row | อยู่แนวตั้ง? → column</p>
        </div>
      </div>
      <div className="glow-card flex items-center gap-4">
        <span className="text-3xl w-12 h-12 rounded-xl bg-[rgba(179,136,255,0.15)] flex items-center justify-center">3</span>
        <div>
          <h3 className="font-bold text-[var(--accent-purple)]">ใส่ระยะห่าง (Spacing)</h3>
          <p className="text-sm text-[var(--text-secondary)]">padding, margin, gap → ดูจาก Figma ได้เลย</p>
        </div>
      </div>
      <div className="glow-card flex items-center gap-4">
        <span className="text-3xl w-12 h-12 rounded-xl bg-[rgba(105,240,174,0.15)] flex items-center justify-center">4</span>
        <div>
          <h3 className="font-bold text-[var(--accent-green)]">ตกแต่ง (Styling)</h3>
          <p className="text-sm text-[var(--text-secondary)]">สี, font, border-radius, shadow → ทำเป็นอันสุดท้าย</p>
        </div>
      </div>
    </div>

    {/* Visual */}
    <div className="mt-6 grid grid-cols-3 gap-3">
      <div className="border-2 border-dashed border-[var(--accent-pink)] rounded-lg p-3 text-center">
        <div className="text-sm font-mono text-[var(--accent-pink)]">Step 1</div>
        <div className="mt-2 border border-[var(--text-secondary)] rounded p-2 opacity-40">
          <div className="border border-[var(--text-secondary)] rounded p-1 mb-1 h-4" />
          <div className="flex gap-1">
            <div className="border border-[var(--text-secondary)] rounded p-1 flex-1 h-8" />
            <div className="border border-[var(--text-secondary)] rounded p-1 flex-1 h-8" />
          </div>
        </div>
        <div className="text-xs text-[var(--text-secondary)] mt-1">แบ่งกล่อง</div>
      </div>
      <div className="border-2 border-dashed border-[var(--accent-blue)] rounded-lg p-3 text-center">
        <div className="text-sm font-mono text-[var(--accent-blue)]">Step 2-3</div>
        <div className="mt-2 bg-[rgba(79,195,247,0.1)] rounded p-2">
          <div className="bg-[rgba(79,195,247,0.15)] rounded p-1 mb-2 h-4" />
          <div className="flex gap-2">
            <div className="bg-[rgba(79,195,247,0.15)] rounded p-1 flex-1 h-8" />
            <div className="bg-[rgba(79,195,247,0.15)] rounded p-1 flex-1 h-8" />
          </div>
        </div>
        <div className="text-xs text-[var(--text-secondary)] mt-1">จัด Layout + Spacing</div>
      </div>
      <div className="border-2 border-dashed border-[var(--accent-green)] rounded-lg p-3 text-center">
        <div className="text-sm font-mono text-[var(--accent-green)]">Step 4</div>
        <div className="mt-2 bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-xl p-2 shadow-lg">
          <div className="bg-white/20 rounded-lg p-1 mb-2 h-4" />
          <div className="flex gap-2">
            <div className="bg-white/20 rounded-lg p-1 flex-1 h-8" />
            <div className="bg-white/20 rounded-lg p-1 flex-1 h-8" />
          </div>
        </div>
        <div className="text-xs text-[var(--text-secondary)] mt-1">ตกแต่งสวย!</div>
      </div>
    </div>
  </div>,

  // Slide 8: Exercise
  <div key="exercise">
    <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--accent-pink)" }}>
      Challenge: ลอกแบบ Layout! 🏆
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <Callout type="exercise" title="โจทย์">
          เปิดโฟลเดอร์ <code>exercises/</code> แล้วเลือกโจทย์:
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li><code>02-landing-page/</code> — สร้าง Landing Page</li>
            <li><code>03-portfolio-grid/</code> — สร้าง Portfolio Grid</li>
            <li><code>04-dashboard/</code> — สร้าง Dashboard Layout</li>
          </ul>
        </Callout>
        <Callout type="tip" title="วิธีทำ">
          <ol className="list-decimal pl-5 space-y-1">
            <li>ดูรูป <code>design.png</code> ในแต่ละโฟลเดอร์</li>
            <li>แบ่งกล่องในหัว → เขียน HTML</li>
            <li>จัด Layout ด้วย Flexbox</li>
            <li>ตกแต่งด้วย CSS</li>
            <li>Commit & Push!</li>
          </ol>
        </Callout>
      </div>
      <div>
        <p className="text-sm text-[var(--text-secondary)] mb-3">ไปที่ Playground เพื่อลองจัด Layout:</p>
        <a
          href="/playground"
          className="block glow-card text-center animate-pulse-glow cursor-pointer"
        >
          <div className="text-4xl mb-2">🎮</div>
          <h3 className="text-xl font-bold text-[var(--accent-blue)]">CSS Playground</h3>
          <p className="text-sm text-[var(--text-secondary)]">ทดลอง Flexbox & Position แบบ interactive</p>
        </a>
        <a
          href="/exercises"
          className="block glow-card text-center mt-3 cursor-pointer"
        >
          <div className="text-4xl mb-2">📐</div>
          <h3 className="text-xl font-bold text-[var(--accent-pink)]">Layout Exercises</h3>
          <p className="text-sm text-[var(--text-secondary)]">โจทย์ลอกแบบ Figma → Code</p>
        </a>
      </div>
    </div>
  </div>,
];

export default function Lesson4() {
  return (
    <SlideLayout
      slides={slides}
      lessonTitle="CSS Layout"
      lessonNumber={4}
      accentColor="#ff80ab"
    />
  );
}
