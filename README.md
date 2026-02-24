# 🎨 Web Design Workshop

สื่อช่วยสอน Web Design สำหรับนักศึกษาออกแบบอุตสาหกรรม ปี 3 (4 ชั่วโมง)

## Quick Start

```bash
# Clone โปรเจค
git clone https://github.com/note5lab/basic-git-class.git
cd basic-git-class/teaching-web

# ติดตั้ง dependencies
npm install

# เปิด dev server
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ใน browser

## โครงสร้างโปรเจค

```
basic-git-class/
├── index.html              ← ไฟล์ HTML ตัวอย่าง
├── style.css               ← ไฟล์ CSS ตัวอย่าง
├── exercises/              ← แบบฝึกหัด (Plain HTML/CSS)
│   ├── 01-profile-card/    ← 🟢 Easy
│   ├── 02-landing-page/    ← 🟡 Medium
│   ├── 03-portfolio-grid/  ← 🟡 Medium
│   └── 04-dashboard/       ← 🔴 Hard
└── teaching-web/           ← Next.js app (สไลด์ + Playground)
    └── src/
        ├── app/
        │   ├── page.tsx        ← หน้าหลัก
        │   ├── lesson/1-4/     ← สไลด์บทเรียน
        │   ├── playground/     ← CSS Playground
        │   └── exercises/      ← Layout Exercises (interactive)
        ├── components/         ← Reusable components
        └── data/               ← ข้อมูลบทเรียน (JSON)
```

## ตารางเรียน (4 ชั่วโมง)

| เวลา | เนื้อหา |
|-------|---------|
| 0:00 – 0:30 | 🌿 Git & GitHub (Repository, Commit, Push, Pull) |
| 0:30 – 1:15 | 🏗️ HTML & CSS Basics (Tags, Class, ID, Color, Font) |
| 1:15 – 1:30 | ☕ Break |
| 1:30 – 2:15 | ⚡ Next.js & JSX (Components, Props, Static Pages) |
| 2:15 – 3:30 | 📐 CSS Layout & Exercises (Flexbox, Position, Box Model) |
| 3:30 – 4:00 | 🏆 Challenge & Wrap-up |

## Features

- **Slide Presentation** — ฉายขึ้น projector ได้ (กด ← → เปลี่ยนสไลด์)
- **CSS Playground** — เขียน HTML/CSS แล้วเห็นผลทันที
- **Layout Exercises** — ดูแบบ → ลอก! มี 4 ระดับ
- **Plain HTML Exercises** — แบบฝึกหัดที่เปิดเล่นได้เลยไม่ต้อง framework
- **Dark Theme** — สวย เหมาะกับ projector
- **ข้อมูลเก็บใน JSON** — ไม่ต้อง database

## Exercises (Plain HTML)

เปิดไฟล์ `exercises/` ได้เลยใน browser:

1. **Profile Card** (Easy) — ฝึก flexbox, border-radius, padding
2. **Landing Page** (Medium) — ฝึก flex-direction, gradient, gap
3. **Portfolio Grid** (Medium) — ฝึก flex-wrap, position, hover
4. **Dashboard** (Hard) — ฝึก nested flex, sidebar layout

แต่ละโจทย์มี:
- `index.html` + `style.css` — ไฟล์ที่ต้องทำ (มี hints)
- `answer.html` + `answer.css` — เฉลย
