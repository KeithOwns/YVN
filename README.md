# YouVibeNow (YVN)

**From fragile "Vibe Coding" to resilient Vibe Engineering.**

This project is the official platform for YouVibeNow, designed to bridge the gap between AI-generated prototypes and professional-grade software engineering.

## 🚀 Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- Git

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/KeithOwns/YVN.git
    cd YVN
    ```
    *(Note: If you are already inside the project folder, skip this step.)*

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to:
    ```
    http://localhost:5173/
    ```

## 🛠 Project Structure

- `src/` - Application source code (React components, styles).
- `public/` - Static assets.
- `vite.config.js` - Build configuration.
- `tailwind.config.js` - Styling configuration.

## 📦 Deployment (Vercel)

We use Vercel for automated deployments.

### Steps to Deploy

1.  **Push to GitHub**: ensure your latest changes are committed and pushed to the `main` branch.
    ```bash
    git add .
    git commit -m "Prepare for deployment"
    git push origin main
    ```
2.  **Log in to Vercel**: Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3.  **Import Project**:
    - Click **"Add New..."** > **"Project"**.
    - Select the `KeithOwns/YVN` repository.
    - Click **Import**.
4.  **Configure Build**:
    - **Framework Preset**: Vite (should be detected automatically).
    - **Root Directory**: `./` (default).
    - **Build Command**: `vite build` (default).
    - **Output Directory**: `dist` (default).
5.  **Deploy**: Click **Deploy**. Vercel will build and host your site.

## 🛡 Privacy & Telemetry

This project is configured with privacy in mind. Telemetry for development tools is disabled where possible.

---
*Project Log: 2026-001*
