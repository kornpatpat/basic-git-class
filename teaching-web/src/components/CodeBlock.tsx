"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  highlightLines?: number[];
}

export default function CodeBlock({
  code,
  language = "html",
  filename,
  highlightLines = [],
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const lines = code.split("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-[rgba(79,195,247,0.15)]">
      {/* Header */}
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#1a1a3a] border-b border-[rgba(79,195,247,0.1)]">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-xs text-[var(--text-secondary)] font-mono ml-2">
              {filename}
            </span>
          </div>
          <span className="text-xs text-[var(--text-secondary)] opacity-50 uppercase">
            {language}
          </span>
        </div>
      )}

      {/* Code */}
      <pre className="!rounded-none !border-0 !m-0 p-0">
        <code className="block p-4">
          {lines.map((line, i) => (
            <div
              key={i}
              className="flex transition-colors"
              style={{
                background: highlightLines.includes(i + 1)
                  ? "rgba(79, 195, 247, 0.1)"
                  : "transparent",
                borderLeft: highlightLines.includes(i + 1)
                  ? "3px solid var(--accent-blue)"
                  : "3px solid transparent",
              }}
            >
              <span className="select-none text-[var(--text-secondary)] opacity-40 w-10 text-right pr-4 text-sm">
                {i + 1}
              </span>
              <span className="flex-1">{line}</span>
            </div>
          ))}
        </code>
      </pre>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-3 py-1 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: "rgba(79, 195, 247, 0.2)",
          color: "var(--accent-blue)",
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
