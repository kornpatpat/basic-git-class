"use client";

import { useState } from "react";

interface CompareViewProps {
  htmlCode: string;
  cssCode?: string;
  title?: string;
}

export default function CompareView({
  htmlCode,
  cssCode,
  title = "Live Preview",
}: CompareViewProps) {
  const [tab, setTab] = useState<"preview" | "html" | "css">("preview");

  const fullHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Inter, sans-serif; padding: 20px; margin: 0; background: #fff; color: #333; }
        ${cssCode || ""}
      </style>
    </head>
    <body>${htmlCode}</body>
    </html>
  `;

  return (
    <div className="rounded-xl overflow-hidden border border-[rgba(79,195,247,0.15)]">
      {/* Tabs */}
      <div className="flex items-center gap-1 px-4 py-2 bg-[#1a1a3a] border-b border-[rgba(79,195,247,0.1)]">
        <span className="text-xs text-[var(--text-secondary)] mr-3">
          {title}
        </span>
        {(["preview", "html", "css"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="px-3 py-1 text-xs rounded-md font-mono transition-all uppercase"
            style={{
              background:
                tab === t
                  ? "rgba(79, 195, 247, 0.2)"
                  : "transparent",
              color:
                tab === t
                  ? "var(--accent-blue)"
                  : "var(--text-secondary)",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="min-h-[200px]">
        {tab === "preview" && (
          <iframe
            srcDoc={fullHtml}
            className="w-full min-h-[200px] bg-white rounded-b-xl"
            sandbox="allow-scripts"
            style={{ border: "none", height: "250px" }}
          />
        )}
        {tab === "html" && (
          <pre className="!rounded-none !border-0 !m-0 text-sm">
            <code>{htmlCode}</code>
          </pre>
        )}
        {tab === "css" && (
          <pre className="!rounded-none !border-0 !m-0 text-sm">
            <code>{cssCode || "/* No CSS */"}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
