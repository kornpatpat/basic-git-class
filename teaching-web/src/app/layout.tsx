import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Design Workshop | ID3",
  description:
    "สื่อช่วยสอน Web Design สำหรับนักศึกษาออกแบบอุตสาหกรรม ปี 3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
