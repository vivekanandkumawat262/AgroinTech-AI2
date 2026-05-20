# 🌾 AgriAI Campaign Intelligence Platform

AI-powered Farmer Engagement Platform built using **React + Vite + TypeScript + Tailwind CSS + shadcn/ui**.

The platform helps agriculture companies generate personalized campaigns for farmers using AI-driven insights such as crop type, weather, pest threats, region, crop stage, and engagement prediction.

---

## 🚀 Features

### 1. Context-Aware Content Generation

Generate intelligent campaign messages based on:

- Crop Type
- Region
- Weather
- Pest Threat
- Crop Stage
- Language

Example:

```txt
Cotton
Maharashtra
Humid Weather
Pink Bollworm
Flowering Stage
Hindi
```

Output:

```txt
Hindi WhatsApp message
Pest alert
Product recommendation
Translation
```

---

### 2. Smart Channel Optimizer

AI recommends:

- WhatsApp
- SMS
- Voice Calls

Based on:

- Smartphone users
- Feature phone users
- Engagement history

Shows:

- Recommended channel
- Best delivery time
- Confidence score
- Device type

---

### 3. Engagement Prediction Engine

Predict:

- CTR
- Video engagement
- Voice response
- SMS probability
- Regional performance

Visualization:

- Line charts
- Pie charts
- Bar charts
- Heatmaps
- KPI cards

---

### 4. Massive Personalization Engine

Generate:

- Thousands of campaign variants
- Regional campaigns
- Language segmentation
- Product recommendations

---

### 5. Campaign Studio

Features:

- Campaign builder
- WhatsApp preview
- SMS preview
- Voice preview
- Variant generator
- Campaign editor

---

### 6. Farmer CRM

Manage:

- Farmers
- Crop segmentation
- Device type
- Engagement history
- Filters
- Search
- Export CSV

---

## 🛠 Tech Stack

Frontend:

- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui

State Management:

- React Context
- React Hooks
- TanStack Query

Charts:

- Recharts

Animations:

- Framer Motion

Icons:

- Lucide React

HTTP:

- Axios

Notifications:

- Sonner

---

## 📂 Project Structure

```txt
src/

assets/
components/
context/
hooks/
mock/
pages/
routes/
services/
styles/
types/
utils/

App.tsx
main.tsx
index.css
```

---

## 📄 Pages

### Landing

- Hero section
- Features
- Architecture flow
- Statistics
- Footer

### Dashboard

- Farmers count
- Campaign KPIs
- Charts
- Analytics cards

### Context Generator

- Crop selector
- Region selector
- Pest selector
- AI message generation

### Channel Optimizer

- Device detection
- Timing recommendations
- AI explanation

### Engagement

- CTR prediction
- Video probability
- Voice prediction
- Region heatmaps

### Personalization

- Farmer segmentation
- Variant generation
- Product mapping

### Campaign Studio

- Editor
- WhatsApp preview
- SMS preview
- Voice preview

### Analytics

- Open rate
- CTR
- Conversion
- Engagement trends

### Farmer CRM

- Search
- Filters
- Export
- Farmer table

---

## ⚙ Installation

Clone repository:

```bash
git clone https://github.com/your-repo/agriai-platform.git

cd agriai-platform
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:5173
```

---

## 📦 Required Packages

Install:

```bash
npm install react-router-dom
npm install axios
npm install recharts
npm install sonner
npm install framer-motion
npm install lucide-react
npm install clsx
npm install tailwind-merge
npm install class-variance-authority
npm install @tanstack/react-query
```

Tailwind:

```bash
npm install -D tailwindcss@3
npm install -D postcss
npm install -D autoprefixer
```

Radix:

```bash
npm install @radix-ui/react-select
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-tabs
npm install @radix-ui/react-tooltip
npm install @radix-ui/react-switch
npm install @radix-ui/react-avatar
npm install @radix-ui/react-toast
npm install @radix-ui/react-slot
```

Drawer:

```bash
npm install vaul
```

---

## 🌱 Theme

Primary:

```txt
Green Shades
```

Secondary:

```txt
Earth Brown
```

Accent:

```txt
Yellow / Orange
```

Supports:

- Light mode
- Dark mode

---

## 📊 Mock Data Included

Farmers

```json
{
"id":1,
"crop":"Cotton",
"region":"Maharashtra",
"language":"Hindi",
"device":"Smartphone"
}
```

Campaigns

Weather

Pest Threats

Predictions

Analytics

Notifications

---

## 📈 Future Scope

- Real AI integration
- Claude API
- Gemini API
- FastAPI backend
- PostgreSQL
- Farmer authentication
- Real analytics engine
- Satellite integration
- Crop disease prediction
- Geo heatmaps
- Push notifications

---

## 👨‍💻 Developed For

AgriAI Campaign Intelligence Platform

AI + Agriculture + Personalized Farmer Engagement

---

## License

MIT License

---

© 2026 AgriAI Platform