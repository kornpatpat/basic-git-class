interface CalloutProps {
  type: "tip" | "warning" | "info" | "exercise";
  title?: string;
  children: React.ReactNode;
}

const config = {
  tip: {
    icon: "💡",
    color: "var(--accent-yellow)",
    bg: "rgba(255, 241, 118, 0.08)",
    border: "rgba(255, 241, 118, 0.3)",
    defaultTitle: "Tip",
  },
  warning: {
    icon: "⚠️",
    color: "var(--accent-orange)",
    bg: "rgba(255, 171, 64, 0.08)",
    border: "rgba(255, 171, 64, 0.3)",
    defaultTitle: "Warning",
  },
  info: {
    icon: "ℹ️",
    color: "var(--accent-blue)",
    bg: "rgba(79, 195, 247, 0.08)",
    border: "rgba(79, 195, 247, 0.3)",
    defaultTitle: "Info",
  },
  exercise: {
    icon: "✏️",
    color: "var(--accent-pink)",
    bg: "rgba(255, 128, 171, 0.08)",
    border: "rgba(255, 128, 171, 0.3)",
    defaultTitle: "Exercise",
  },
};

export default function Callout({ type, title, children }: CalloutProps) {
  const c = config[type];
  return (
    <div
      className="rounded-xl p-5 my-4"
      style={{
        background: c.bg,
        borderLeft: `4px solid ${c.border}`,
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{c.icon}</span>
        <span className="font-bold text-sm" style={{ color: c.color }}>
          {title || c.defaultTitle}
        </span>
      </div>
      <div className="text-[var(--text-primary)] text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
