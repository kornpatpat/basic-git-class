"use client";

import { useState } from "react";

interface TerminalBlockProps {
  commands: {
    input: string;
    output?: string;
    comment?: string;
  }[];
  title?: string;
}

export default function TerminalBlock({
  commands,
  title = "Terminal",
}: TerminalBlockProps) {
  const [copied, setCopied] = useState(false);

  const allInputs = commands.map((c) => c.input).join("\n");

  const handleCopy = () => {
    navigator.clipboard.writeText(allInputs);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-[rgba(105,240,174,0.2)]">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#0d1a0d] border-b border-[rgba(105,240,174,0.1)]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-xs text-[var(--accent-green)] font-mono ml-2 opacity-60">
            {title}
          </span>
        </div>
      </div>

      {/* Commands */}
      <div className="bg-[#0a0a1a] p-4 font-mono text-sm space-y-2">
        {commands.map((cmd, i) => (
          <div key={i}>
            {cmd.comment && (
              <div className="text-[var(--text-secondary)] opacity-40 text-xs mb-1">
                # {cmd.comment}
              </div>
            )}
            <div className="flex items-start gap-2">
              <span className="text-[var(--accent-green)] select-none">$</span>
              <span className="text-[var(--text-primary)]">{cmd.input}</span>
            </div>
            {cmd.output && (
              <div className="text-[var(--text-secondary)] opacity-60 pl-4 mt-0.5 text-xs whitespace-pre-wrap">
                {cmd.output}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Copy */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-3 py-1 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: "rgba(105, 240, 174, 0.2)",
          color: "var(--accent-green)",
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
