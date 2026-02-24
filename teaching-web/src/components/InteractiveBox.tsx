"use client";

import { useState } from "react";

interface BoxStyle {
  display?: string;
  position?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  background?: string;
}

interface InteractiveBoxProps {
  title: string;
  description: string;
  initialStyle: BoxStyle;
  controls: {
    property: string;
    options: string[];
  }[];
  children?: React.ReactNode;
}

export default function InteractiveBox({
  title,
  description,
  initialStyle,
  controls,
  children,
}: InteractiveBoxProps) {
  const [style, setStyle] = useState<BoxStyle>(initialStyle);

  const updateProp = (prop: string, value: string) => {
    setStyle((prev) => ({ ...prev, [prop]: value }));
  };

  return (
    <div className="glow-card">
      <h3 className="text-lg font-bold mb-1" style={{ color: "var(--accent-blue)" }}>
        {title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] mb-4">{description}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Controls */}
        <div className="space-y-3">
          {controls.map((ctrl) => (
            <div key={ctrl.property}>
              <label className="text-xs font-mono text-[var(--accent-purple)] mb-1 block">
                {ctrl.property}:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {ctrl.options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => updateProp(ctrl.property, opt)}
                    className="px-3 py-1 text-xs rounded-md font-mono transition-all"
                    style={{
                      background:
                        style[ctrl.property as keyof BoxStyle] === opt
                          ? "rgba(79, 195, 247, 0.3)"
                          : "rgba(79, 195, 247, 0.08)",
                      color:
                        style[ctrl.property as keyof BoxStyle] === opt
                          ? "var(--accent-blue)"
                          : "var(--text-secondary)",
                      border:
                        style[ctrl.property as keyof BoxStyle] === opt
                          ? "1px solid var(--accent-blue)"
                          : "1px solid transparent",
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Generated CSS */}
          <div className="mt-4 p-3 rounded-lg bg-[var(--code-bg)] font-mono text-sm">
            <span className="text-[var(--accent-purple)]">.container</span>{" "}
            <span className="text-[var(--text-secondary)]">{"{"}</span>
            {Object.entries(style).map(([key, value]) => (
              <div key={key} className="pl-4">
                <span className="text-[var(--accent-blue)]">
                  {key.replace(/([A-Z])/g, "-$1").toLowerCase()}
                </span>
                : <span className="text-[var(--accent-green)]">{value}</span>;
              </div>
            ))}
            <span className="text-[var(--text-secondary)]">{"}"}</span>
          </div>
        </div>

        {/* Preview */}
        <div
          className="border border-dashed border-[rgba(79,195,247,0.3)] rounded-lg p-4 min-h-[200px] relative"
          style={{
            ...(style as React.CSSProperties),
            background: style.background || "rgba(79, 195, 247, 0.05)",
          }}
        >
          {children || (
            <>
              <div className="w-16 h-16 rounded-lg bg-[var(--accent-blue)] opacity-80 flex items-center justify-center text-sm font-bold text-[var(--bg-primary)]">
                A
              </div>
              <div className="w-16 h-16 rounded-lg bg-[var(--accent-purple)] opacity-80 flex items-center justify-center text-sm font-bold text-[var(--bg-primary)]">
                B
              </div>
              <div className="w-16 h-16 rounded-lg bg-[var(--accent-pink)] opacity-80 flex items-center justify-center text-sm font-bold text-[var(--bg-primary)]">
                C
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
