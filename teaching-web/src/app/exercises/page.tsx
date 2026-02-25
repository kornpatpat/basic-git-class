"use client";

import { useState } from "react";
import Link from "next/link";

interface Exercise {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  skills: string[];
  designHtml: string;
  designCss: string;
  starterHtml: string;
  starterCss: string;
  hints: string[];
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Profile Card",
    difficulty: "Easy",
    description: "สร้าง Profile Card ที่มี avatar, ชื่อ, ตำแหน่ง, และปุ่ม Follow",
    skills: ["flexbox", "border-radius", "padding", "text-align"],
    designHtml: `<div class="card">
  <img src="https://i.pravatar.cc/100?img=3" class="avatar" />
  <h2 class="name">สมชาย ดีไซน์</h2>
  <p class="role">Industrial Designer</p>
  <div class="stats">
    <div><strong>42</strong><br/><span>Projects</span></div>
    <div><strong>128</strong><br/><span>Followers</span></div>
    <div><strong>56</strong><br/><span>Following</span></div>
  </div>
  <button class="btn">Follow</button>
</div>`,
    designCss: `body { display:flex; justify-content:center; align-items:center; min-height:100vh; background:#f0f2f5; }
.card { background:white; border-radius:20px; padding:32px 40px; text-align:center; box-shadow:0 8px 30px rgba(0,0,0,0.08); max-width:320px; width:100%; font-family:sans-serif; }
.avatar { width:90px; height:90px; border-radius:50%; margin-bottom:16px; }
.name { font-size:20px; margin:0 0 4px; color:#222; }
.role { color:#888; margin:0 0 20px; font-size:14px; }
.stats { display:flex; justify-content:center; gap:28px; margin-bottom:24px; }
.stats div { text-align:center; }
.stats strong { font-size:18px; color:#333; }
.stats span { font-size:12px; color:#aaa; }
.btn { background:linear-gradient(135deg,#667eea,#764ba2); color:white; border:none; padding:10px 36px; border-radius:24px; font-size:14px; cursor:pointer; }`,
    starterHtml: `<!-- สร้าง Profile Card ที่นี่ -->
<div>
  <!-- TODO: เพิ่ม avatar, ชื่อ, ตำแหน่ง, stats, ปุ่ม -->
</div>`,
    starterCss: `/* เริ่มเขียน CSS ที่นี่ */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f0f2f5;
  font-family: sans-serif;
}`,
    hints: [
      "ใช้ text-align: center จัดกลาง",
      "ใช้ border-radius: 50% ทำรูปกลม",
      "ใช้ display: flex + gap ทำ stats",
    ],
  },
  {
    id: 2,
    title: "Landing Hero Section",
    difficulty: "Medium",
    description: "สร้าง Hero Section สำหรับ Landing Page ที่มี background gradient, heading, และ CTA buttons",
    skills: ["flexbox", "gradient", "position", "padding", "gap"],
    designHtml: `<section class="hero">
  <nav class="nav">
    <div class="logo">DesignStudio</div>
    <div class="nav-links">
      <a href="#">Work</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  </nav>
  <div class="hero-content">
    <h1>We Create<br/>Digital Experiences</h1>
    <p>Award-winning design studio specializing in branding, UI/UX, and digital products.</p>
    <div class="cta-group">
      <button class="btn-primary">View Our Work</button>
      <button class="btn-secondary">Contact Us</button>
    </div>
  </div>
</section>`,
    designCss: `* { margin:0; padding:0; box-sizing:border-box; }
body { font-family: sans-serif; }
.hero { min-height:100vh; background:linear-gradient(135deg,#0f0c29,#302b63,#24243e); color:white; display:flex; flex-direction:column; }
.nav { display:flex; justify-content:space-between; align-items:center; padding:24px 48px; }
.logo { font-size:20px; font-weight:bold; background:linear-gradient(135deg,#667eea,#764ba2); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
.nav-links { display:flex; gap:32px; }
.nav-links a { color:rgba(255,255,255,0.7); text-decoration:none; font-size:14px; }
.hero-content { flex:1; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center; padding:0 48px; }
.hero-content h1 { font-size:56px; line-height:1.1; margin-bottom:20px; }
.hero-content p { font-size:18px; color:rgba(255,255,255,0.6); max-width:500px; margin-bottom:36px; }
.cta-group { display:flex; gap:16px; }
.btn-primary { background:linear-gradient(135deg,#667eea,#764ba2); color:white; border:none; padding:14px 32px; border-radius:8px; font-size:15px; cursor:pointer; }
.btn-secondary { background:transparent; color:white; border:1px solid rgba(255,255,255,0.3); padding:14px 32px; border-radius:8px; font-size:15px; cursor:pointer; }`,
    starterHtml: `<!-- สร้าง Hero Section ที่นี่ -->
<section>
  <!-- TODO: navbar (logo + links) -->
  <!-- TODO: hero content (heading + paragraph + buttons) -->
</section>`,
    starterCss: `* { margin:0; padding:0; box-sizing:border-box; }
body { font-family: sans-serif; }

/* เริ่มเขียน CSS ที่นี่ */`,
    hints: [
      "ใช้ flex-direction: column สำหรับ hero layout",
      "ใช้ justify-content: space-between สำหรับ navbar",
      "ใช้ linear-gradient สำหรับ background",
      "flex: 1 ทำให้ content เต็มพื้นที่ที่เหลือ",
    ],
  },
  {
    id: 3,
    title: "Portfolio Grid",
    difficulty: "Medium",
    description: "สร้าง Portfolio Grid ที่แสดงผลงานเป็น card แต่ละชิ้น มี overlay เมื่อ hover",
    skills: ["flex-wrap", "position absolute", "hover", "transition"],
    designHtml: `<div class="portfolio">
  <h1 class="title">Our Work</h1>
  <div class="grid">
    <div class="card">
      <img src="https://picsum.photos/400/300?random=1" />
      <div class="overlay">
        <h3>Brand Identity</h3>
        <p>Branding • 2024</p>
      </div>
    </div>
    <div class="card">
      <img src="https://picsum.photos/400/300?random=2" />
      <div class="overlay">
        <h3>Mobile App</h3>
        <p>UI/UX • 2024</p>
      </div>
    </div>
    <div class="card">
      <img src="https://picsum.photos/400/300?random=3" />
      <div class="overlay">
        <h3>Website Redesign</h3>
        <p>Web Design • 2024</p>
      </div>
    </div>
    <div class="card">
      <img src="https://picsum.photos/400/300?random=4" />
      <div class="overlay">
        <h3>Packaging</h3>
        <p>Product • 2024</p>
      </div>
    </div>
  </div>
</div>`,
    designCss: `* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:sans-serif; background:#111; color:white; }
.portfolio { padding:48px; }
.title { font-size:36px; margin-bottom:32px; text-align:center; }
.grid { display:flex; flex-wrap:wrap; gap:20px; justify-content:center; }
.card { position:relative; width:280px; height:200px; border-radius:16px; overflow:hidden; cursor:pointer; }
.card img { width:100%; height:100%; object-fit:cover; transition:transform 0.3s; }
.card:hover img { transform:scale(1.1); }
.overlay { position:absolute; bottom:0; left:0; right:0; padding:20px; background:linear-gradient(transparent,rgba(0,0,0,0.8)); transform:translateY(20px); opacity:0; transition:all 0.3s; }
.card:hover .overlay { transform:translateY(0); opacity:1; }
.overlay h3 { font-size:18px; margin-bottom:4px; }
.overlay p { font-size:13px; color:rgba(255,255,255,0.7); }`,
    starterHtml: `<!-- สร้าง Portfolio Grid ที่นี่ -->
<div>
  <!-- TODO: title -->
  <!-- TODO: grid of cards with images and overlay -->
</div>`,
    starterCss: `* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:sans-serif; background:#111; color:white; }

/* เริ่มเขียน CSS ที่นี่ */`,
    hints: [
      "ใช้ flex-wrap: wrap ทำ grid",
      "ใช้ position: relative บน card, absolute บน overlay",
      "ใช้ overflow: hidden ซ่อนส่วนที่ล้น",
      "ใช้ :hover + transition สร้าง animation",
    ],
  },
  {
    id: 4,
    title: "Dashboard Layout",
    difficulty: "Hard",
    description: "สร้าง Dashboard ที่มี sidebar, header, และ content area พร้อม stat cards",
    skills: ["flexbox", "position", "nested flex", "gap", "padding"],
    designHtml: `<div class="dashboard">
  <aside class="sidebar">
    <div class="logo">Dashboard</div>
    <nav class="menu">
      <a href="#" class="menu-item active">Home</a>
      <a href="#" class="menu-item">Analytics</a>
      <a href="#" class="menu-item">Projects</a>
      <a href="#" class="menu-item">Settings</a>
    </nav>
  </aside>
  <main class="main">
    <header class="header">
      <h2>Welcome back, Designer! 👋</h2>
      <div class="avatar-sm"></div>
    </header>
    <div class="stats">
      <div class="stat-card">
        <span class="stat-icon" style="background:#667eea">📊</span>
        <div><strong>1,234</strong><br/><span>Total Views</span></div>
      </div>
      <div class="stat-card">
        <span class="stat-icon" style="background:#f093fb">👥</span>
        <div><strong>567</strong><br/><span>Visitors</span></div>
      </div>
      <div class="stat-card">
        <span class="stat-icon" style="background:#43e97b">💰</span>
        <div><strong>89</strong><br/><span>Sales</span></div>
      </div>
      <div class="stat-card">
        <span class="stat-icon" style="background:#fa709a">⭐</span>
        <div><strong>4.8</strong><br/><span>Rating</span></div>
      </div>
    </div>
    <div class="content-area">
      <div class="chart-placeholder">📈 Chart Area</div>
    </div>
  </main>
</div>`,
    designCss: `* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:sans-serif; background:#f0f2f5; }
.dashboard { display:flex; min-height:100vh; }
.sidebar { width:220px; background:#1a1a2e; color:white; padding:24px 16px; display:flex; flex-direction:column; }
.logo { font-size:18px; font-weight:bold; padding:0 8px 24px; border-bottom:1px solid rgba(255,255,255,0.1); margin-bottom:24px; }
.menu { display:flex; flex-direction:column; gap:4px; }
.menu-item { color:rgba(255,255,255,0.6); text-decoration:none; padding:10px 12px; border-radius:8px; font-size:14px; }
.menu-item.active { background:rgba(102,126,234,0.2); color:#667eea; }
.main { flex:1; display:flex; flex-direction:column; }
.header { display:flex; justify-content:space-between; align-items:center; padding:20px 32px; background:white; border-bottom:1px solid #e8e8e8; }
.header h2 { font-size:20px; color:#333; }
.avatar-sm { width:36px; height:36px; border-radius:50%; background:linear-gradient(135deg,#667eea,#764ba2); }
.stats { display:flex; gap:20px; padding:24px 32px; }
.stat-card { flex:1; background:white; border-radius:12px; padding:20px; display:flex; align-items:center; gap:16px; box-shadow:0 2px 8px rgba(0,0,0,0.04); }
.stat-icon { width:48px; height:48px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:20px; }
.stat-card strong { font-size:22px; color:#333; }
.stat-card span { font-size:13px; color:#999; }
.content-area { flex:1; padding:0 32px 32px; }
.chart-placeholder { background:white; border-radius:12px; padding:48px; text-align:center; font-size:24px; color:#ccc; min-height:200px; display:flex; align-items:center; justify-content:center; box-shadow:0 2px 8px rgba(0,0,0,0.04); }`,
    starterHtml: `<!-- สร้าง Dashboard Layout ที่นี่ -->
<div>
  <!-- TODO: sidebar (logo + menu) -->
  <!-- TODO: main (header + stats + content) -->
</div>`,
    starterCss: `* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:sans-serif; background:#f0f2f5; }

/* เริ่มเขียน CSS ที่นี่ */`,
    hints: [
      "ใช้ display: flex สำหรับ dashboard (sidebar + main)",
      "sidebar: width คงที่, main: flex: 1",
      "ใช้ flex-direction: column สำหรับ sidebar menu และ main",
      "stat cards: display: flex, flex: 1 ทำให้เท่ากัน",
    ],
  },
];

const difficultyColor = {
  Easy: "#69f0ae",
  Medium: "#ffab40",
  Hard: "#ff80ab",
};

export default function ExercisesPage() {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [userHtml, setUserHtml] = useState("");
  const [userCss, setUserCss] = useState("");
  const [activeTab, setActiveTab] = useState<"html" | "css">("html");
  const [showDesign, setShowDesign] = useState(true);
  const [showHints, setShowHints] = useState(false);

  const selectExercise = (ex: Exercise) => {
    setSelectedExercise(ex);
    setUserHtml(ex.starterHtml);
    setUserCss(ex.starterCss);
    setShowHints(false);
  };

  if (!selectedExercise) {
    return (
      <div className="min-h-screen p-8">
        <nav className="flex items-center justify-between mb-8">
          <Link href="/" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
            ← กลับหน้าหลัก
          </Link>
          <h1 className="text-2xl font-bold">
            <span className="mr-2">📐</span>Layout Exercises
          </h1>
          <Link href="/playground" className="text-sm text-[var(--accent-blue)] hover:underline">
            🎮 Playground →
          </Link>
        </nav>

        <p className="text-center text-[var(--text-secondary)] mb-8 text-lg">
          เลือกโจทย์ → ดูแบบ → ลอกด้วย HTML/CSS!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {exercises.map((ex) => (
            <button
              key={ex.id}
              onClick={() => selectExercise(ex)}
              className="glow-card text-left hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg text-[var(--accent-blue)]">
                  {ex.id}. {ex.title}
                </h3>
                <span
                  className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{
                    background: `${difficultyColor[ex.difficulty]}20`,
                    color: difficultyColor[ex.difficulty],
                  }}
                >
                  {ex.difficulty}
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                {ex.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {ex.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-0.5 rounded bg-[rgba(79,195,247,0.1)] text-[var(--accent-blue)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const designPreview = `<!DOCTYPE html><html><head><style>
* { box-sizing:border-box; } body { font-family: Inter, sans-serif; margin:0; }
${selectedExercise.designCss}
</style></head><body>${selectedExercise.designHtml}</body></html>`;

  const userPreview = `<!DOCTYPE html><html><head><style>
* { box-sizing:border-box; } body { font-family: Inter, sans-serif; margin:0; }
${userCss}
</style></head><body>${userHtml}</body></html>`;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <nav className="flex items-center justify-between px-6 py-3 border-b border-[rgba(79,195,247,0.15)]">
        <button
          onClick={() => setSelectedExercise(null)}
          className="text-sm opacity-60 hover:opacity-100 transition-opacity"
        >
          ← กลับเลือกโจทย์
        </button>
        <div className="flex items-center gap-3">
          <span
            className="text-xs px-2 py-1 rounded-full"
            style={{
              background: `${difficultyColor[selectedExercise.difficulty]}20`,
              color: difficultyColor[selectedExercise.difficulty],
            }}
          >
            {selectedExercise.difficulty}
          </span>
          <h1 className="text-lg font-bold">{selectedExercise.title}</h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowHints(!showHints)}
            className="px-3 py-1 text-xs rounded-lg"
            style={{
              background: showHints ? "rgba(255,241,118,0.2)" : "rgba(255,241,118,0.08)",
              color: "var(--accent-yellow)",
            }}
          >
            💡 Hints
          </button>
          <button
            onClick={() => setShowDesign(!showDesign)}
            className="px-3 py-1 text-xs rounded-lg"
            style={{
              background: showDesign ? "rgba(79,195,247,0.2)" : "rgba(79,195,247,0.08)",
              color: "var(--accent-blue)",
            }}
          >
            👁️ {showDesign ? "ซ่อนแบบ" : "ดูแบบ"}
          </button>
        </div>
      </nav>

      {/* Hints */}
      {showHints && (
        <div className="px-6 py-3 bg-[rgba(255,241,118,0.05)] border-b border-[rgba(255,241,118,0.2)]">
          <div className="flex gap-4 text-sm">
            {selectedExercise.hints.map((hint, i) => (
              <span key={i} className="text-[var(--accent-yellow)]">
                💡 {hint}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 grid grid-cols-2">
        {/* Left: Editor */}
        <div className="flex flex-col border-r border-[rgba(79,195,247,0.1)]">
          <div className="flex border-b border-[rgba(79,195,247,0.1)]">
            <button
              onClick={() => setActiveTab("html")}
              className="px-4 py-2 text-sm font-mono"
              style={{
                color: activeTab === "html" ? "var(--accent-orange)" : "var(--text-secondary)",
                borderBottom: activeTab === "html" ? "2px solid var(--accent-orange)" : "2px solid transparent",
              }}
            >
              HTML
            </button>
            <button
              onClick={() => setActiveTab("css")}
              className="px-4 py-2 text-sm font-mono"
              style={{
                color: activeTab === "css" ? "var(--accent-blue)" : "var(--text-secondary)",
                borderBottom: activeTab === "css" ? "2px solid var(--accent-blue)" : "2px solid transparent",
              }}
            >
              CSS
            </button>
          </div>
          <textarea
            value={activeTab === "html" ? userHtml : userCss}
            onChange={(e) =>
              activeTab === "html"
                ? setUserHtml(e.target.value)
                : setUserCss(e.target.value)
            }
            className="flex-1 p-4 bg-[var(--code-bg)] text-[var(--text-primary)] font-mono text-sm resize-none outline-none"
            spellCheck={false}
            placeholder={activeTab === "html" ? "เขียน HTML ที่นี่..." : "เขียน CSS ที่นี่..."}
          />
        </div>

        {/* Right: Previews */}
        <div className="flex flex-col">
          {showDesign && (
            <>
              <div className="px-4 py-2 text-xs text-[var(--accent-green)] border-b border-[rgba(79,195,247,0.1)] bg-[rgba(105,240,174,0.05)]">
                ✅ แบบที่ต้องลอก (เป้าหมาย)
              </div>
              <iframe
                srcDoc={designPreview}
                className="bg-white border-b border-[rgba(79,195,247,0.1)]"
                style={{ border: "none", height: "45%" }}
                sandbox="allow-scripts"
              />
            </>
          )}
          <div className="px-4 py-2 text-xs text-[var(--accent-purple)] border-b border-[rgba(79,195,247,0.1)] bg-[rgba(179,136,255,0.05)]">
            🎨 ผลงานของคุณ
          </div>
          <iframe
            srcDoc={userPreview}
            className="flex-1 bg-white"
            style={{ border: "none", minHeight: showDesign ? "45%" : "90%" }}
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
}
