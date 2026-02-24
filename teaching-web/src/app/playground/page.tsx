"use client";

import { useState } from "react";
import Link from "next/link";

const defaultCSS = `.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px;
  min-height: 300px;
  background: #f8f9fa;
}

.box {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  color: white;
}

.box-1 { background: #667eea; }
.box-2 { background: #764ba2; }
.box-3 { background: #f093fb; }
.box-4 { background: #43e97b; }`;

const defaultHTML = `<div class="container">
  <div class="box box-1">A</div>
  <div class="box box-2">B</div>
  <div class="box box-3">C</div>
  <div class="box box-4">D</div>
</div>`;

const presets = [
  {
    name: "Flex Row",
    css: `.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px;
  min-height: 300px;
  background: #f8f9fa;
}
.box {
  width: 80px; height: 80px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-weight: bold; font-size: 18px; color: white;
}
.box-1 { background: #667eea; }
.box-2 { background: #764ba2; }
.box-3 { background: #f093fb; }
.box-4 { background: #43e97b; }`,
    html: defaultHTML,
  },
  {
    name: "Flex Column",
    css: `.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
  min-height: 300px;
  background: #f0f0f0;
}
.box {
  width: 200px; height: 50px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-weight: bold; color: white;
}
.box-1 { background: #667eea; }
.box-2 { background: #764ba2; }
.box-3 { background: #f093fb; }
.box-4 { background: #43e97b; }`,
    html: defaultHTML,
  },
  {
    name: "Position Absolute",
    css: `.container {
  position: relative;
  min-height: 300px;
  background: #f8f9fa;
  border: 2px dashed #ccc;
}
.box {
  width: 80px; height: 80px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-weight: bold; font-size: 18px; color: white;
  position: absolute;
}
.box-1 { background: #667eea; top: 20px; left: 20px; }
.box-2 { background: #764ba2; top: 20px; right: 20px; }
.box-3 { background: #f093fb; bottom: 20px; left: 20px; }
.box-4 { background: #43e97b; bottom: 20px; right: 20px; }`,
    html: defaultHTML,
  },
  {
    name: "Card Grid",
    css: `.container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 24px;
  justify-content: center;
  background: #f8f9fa;
}
.box {
  width: 120px; height: 120px; border-radius: 16px;
  display: flex; align-items: center; justify-content: center;
  font-weight: bold; font-size: 24px; color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.box-1 { background: linear-gradient(135deg, #667eea, #764ba2); }
.box-2 { background: linear-gradient(135deg, #f093fb, #f5576c); }
.box-3 { background: linear-gradient(135deg, #43e97b, #38f9d7); }
.box-4 { background: linear-gradient(135deg, #fa709a, #fee140); }`,
    html: defaultHTML,
  },
  {
    name: "Navbar + Content",
    css: `.container {
  display: flex;
  flex-direction: column;
  min-height: 300px;
  background: #f8f9fa;
  font-family: sans-serif;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: #1a1a2e;
  color: white;
}
.nav-links { display: flex; gap: 16px; }
.nav-links a { color: #aaa; text-decoration: none; font-size: 14px; }
.main {
  display: flex;
  flex: 1;
}
.sidebar {
  width: 200px;
  background: #e8e8e8;
  padding: 20px;
}
.content {
  flex: 1;
  padding: 20px;
}`,
    html: `<div class="container">
  <nav class="nav">
    <strong>MyApp</strong>
    <div class="nav-links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  </nav>
  <div class="main">
    <aside class="sidebar">
      <p><strong>Menu</strong></p>
      <p>Dashboard</p>
      <p>Settings</p>
      <p>Profile</p>
    </aside>
    <main class="content">
      <h2>Welcome!</h2>
      <p>This is the main content area.</p>
    </main>
  </div>
</div>`,
  },
];

export default function Playground() {
  const [html, setHtml] = useState(defaultHTML);
  const [css, setCss] = useState(defaultCSS);
  const [activeTab, setActiveTab] = useState<"html" | "css">("css");

  const fullHtml = `<!DOCTYPE html>
<html><head><style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Inter, sans-serif; }
${css}
</style></head><body>${html}</body></html>`;

  const loadPreset = (preset: (typeof presets)[0]) => {
    setHtml(preset.html);
    setCss(preset.css);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <nav className="flex items-center justify-between px-6 py-3 border-b border-[rgba(79,195,247,0.15)]">
        <Link href="/" className="text-sm opacity-60 hover:opacity-100 transition-opacity">
          ← กลับหน้าหลัก
        </Link>
        <h1 className="text-lg font-bold">
          <span className="text-2xl mr-2">🎮</span>
          CSS Playground
        </h1>
        <div className="text-xs text-[var(--text-secondary)]">แก้โค้ด → ดูผลทันที</div>
      </nav>

      {/* Presets */}
      <div className="flex items-center gap-2 px-6 py-3 border-b border-[rgba(79,195,247,0.1)] overflow-x-auto">
        <span className="text-xs text-[var(--text-secondary)] whitespace-nowrap">Presets:</span>
        {presets.map((p) => (
          <button
            key={p.name}
            onClick={() => loadPreset(p)}
            className="px-3 py-1.5 text-xs rounded-lg whitespace-nowrap transition-all hover:bg-[rgba(79,195,247,0.15)]"
            style={{ background: "rgba(79,195,247,0.08)", color: "var(--accent-blue)" }}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        {/* Editor */}
        <div className="flex flex-col border-r border-[rgba(79,195,247,0.1)]">
          {/* Tabs */}
          <div className="flex border-b border-[rgba(79,195,247,0.1)]">
            <button
              onClick={() => setActiveTab("html")}
              className="px-4 py-2 text-sm font-mono transition-all"
              style={{
                background: activeTab === "html" ? "rgba(255,171,64,0.1)" : "transparent",
                color: activeTab === "html" ? "var(--accent-orange)" : "var(--text-secondary)",
                borderBottom: activeTab === "html" ? "2px solid var(--accent-orange)" : "2px solid transparent",
              }}
            >
              HTML
            </button>
            <button
              onClick={() => setActiveTab("css")}
              className="px-4 py-2 text-sm font-mono transition-all"
              style={{
                background: activeTab === "css" ? "rgba(79,195,247,0.1)" : "transparent",
                color: activeTab === "css" ? "var(--accent-blue)" : "var(--text-secondary)",
                borderBottom: activeTab === "css" ? "2px solid var(--accent-blue)" : "2px solid transparent",
              }}
            >
              CSS
            </button>
          </div>

          {/* Text editor */}
          <textarea
            value={activeTab === "html" ? html : css}
            onChange={(e) =>
              activeTab === "html"
                ? setHtml(e.target.value)
                : setCss(e.target.value)
            }
            className="flex-1 p-4 bg-[var(--code-bg)] text-[var(--text-primary)] font-mono text-sm resize-none outline-none min-h-[400px]"
            spellCheck={false}
          />
        </div>

        {/* Preview */}
        <div className="flex flex-col">
          <div className="px-4 py-2 text-sm text-[var(--text-secondary)] border-b border-[rgba(79,195,247,0.1)]">
            Preview
          </div>
          <iframe
            srcDoc={fullHtml}
            className="flex-1 bg-white min-h-[400px]"
            sandbox="allow-scripts"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}
