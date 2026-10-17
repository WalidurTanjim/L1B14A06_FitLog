# 🏋️ FitLog — Workout Library & Daily Gym Companion

A dark-themed, no-nonsense gym companion web application built to help users browse exercises, curate their daily workout plan, save routines for later, and track key workout metrics seamlessly.

---

## 📝 Short Description

**FitLog** is a modern, responsive web application designed for focused gym-goers. It allows users to explore a comprehensive exercise library covering major muscle groups, review detailed movement specifications and step-by-step instructions, organize custom workout routines into "Today's Plan" or "Saved" lists, and monitor live performance stats like total exercises, estimated duration, and burned calories.

---

## 🛠️ Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) (App Router & SSR support)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Component Library:** [DaisyUI](https://daisyui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State Management & Notifications:** React Context / Local State & Toast Notification Library (e.g., React Hot Toast / Sonner)

---

## ✨ Key Features

1. **Interactive Exercise Library & Smart Sorting:** 
   Browse a comprehensive collection of exercises organized in a responsive 3x4 grid card layout. Users can dynamic sorting of exercises by **Duration**, **Calories burned**, or **Rating** using a real-time sorting dropdown.

2. **Detailed Workout Guidance:** 
   Dedicated workout details pages featuring high-resolution exercise illustrations, key specifications (equipment, difficulty, sets, reps, duration, calories, rating), and numbered step-by-step execution instructions.

3. **Dynamic Daily Plan & Saved List Management:** 
   Easily add workouts to **Today's Plan** (capped for focus) or **Save for later**. Interactive Navbar badges update live count indicators linking directly to your planned lists.

4. **Real-Time Metrics Summary Tracker:** 
   The `/my-plan` dashboard automatically calculates and updates aggregate workout metrics in real time—tracking total **Exercises**, cumulative **Minutes**, and total estimated **Calories** as items are added, completed, or removed.

5. **Interactive Plan Controls & Toast Feedback:** 
   Full control over workout execution with instant UI feedback: mark exercises as completed with the **"Mark as Done"** check action, remove items from active lists, and receive immediate feedback via toast notifications across all core interactions.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm, pnpm, or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/fitlog.git
   cd fitlog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:3000` to view the application.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
