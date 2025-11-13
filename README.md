# Advadev - Premium Web Development Solutions

A modern, full-stack web application built with **Next.js 16.0.2** (client) and **Express** (server).

## 🚀 Project Structure

```
advadev/
├── client/              # Next.js 16.0.2 frontend
│   ├── app/            # Next.js App Router
│   │   ├── globals.css # Global styles with Tailwind
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── public/         # Static assets
│   │   └── logo.svg
│   └── package.json
│
├── server/             # Express backend
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   │   └── contact.controller.ts
│   │   ├── middleware/     # Custom middleware
│   │   │   └── validation.middleware.ts
│   │   ├── routes/         # API routes
│   │   │   └── contact.routes.ts
│   │   └── index.ts        # Server entry point
│   ├── .env               # Environment variables
│   ├── .env.example       # Environment template
│   └── package.json
│
├── index.html          # Original HTML file (legacy)
├── logo.svg           # Original logo (legacy)
└── README.md          # This file
```

## 🛠️ Technologies Used

### Frontend (Client)
- **Next.js 16.0.2** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Font Awesome 6.4** - Icons

### Backend (Server)
- **Express 4.21** - Web framework
- **TypeScript** - Type safety
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd advadev
```

### 2. Install Client Dependencies
```bash
cd client
npm install
```

### 3. Install Server Dependencies
```bash
cd ../server
npm install
```

## 🚀 Running the Application

### Development Mode

You need to run both the client and server simultaneously in separate terminals.

#### Terminal 1: Start the Server
```bash
cd server
npm run dev
```
The server will start on `http://localhost:5000`

#### Terminal 2: Start the Client
```bash
cd client
npm run dev
```
The client will start on `http://localhost:3000`

### Production Mode

#### Build the Client
```bash
cd client
npm run build
npm start
```

#### Build and Start the Server
```bash
cd server
npm run build
npm start
```

## 📡 API Endpoints

### Health Check
- **GET** `/api/health`
  - Returns server status

### Contact Form
- **POST** `/api/contact`
  - Submit contact form
  - **Body:**
    ```json
    {
      "name": "string (required)",
      "email": "string (required, valid email)",
      "phone": "string (required)",
      "service": "string (optional)",
      "message": "string (optional)"
    }
    ```
  - **Response:**
    ```json
    {
      "success": true,
      "message": "Thank you for your message!",
      "data": {
        "name": "John Doe",
        "email": "john@example.com",
        "submittedAt": "2024-01-01T00:00:00.000Z"
      }
    }
    ```

## ⚙️ Environment Variables

### Server (.env)
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

## 🎨 Features

- ✅ Modern, responsive design
- ✅ Dark mode support
- ✅ Mobile-friendly navigation
- ✅ Service packages display
- ✅ Portfolio showcase
- ✅ Client testimonials
- ✅ FAQ accordion
- ✅ Contact form with validation
- ✅ WhatsApp integration
- ✅ Smooth scrolling
- ✅ Animated components
- ✅ SEO optimized

## 📱 Pages & Sections

1. **Hero Section** - Eye-catching landing with CTA buttons
2. **Services** - Three-tier service packages
3. **Why Choose Us** - Key value propositions
4. **Portfolio** - Project showcase with case studies
5. **Process** - Four-step workflow
6. **Testimonials** - Client reviews
7. **FAQ** - Common questions
8. **Contact** - Form submission with backend integration
9. **Footer** - Company info and links

## 🔧 Development Scripts

### Client Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Server Scripts
```bash
npm run dev      # Start development server with hot reload
npm run build    # Compile TypeScript to JavaScript
npm start        # Start production server
```

## 🚀 Deployment

### Client (Next.js)
Can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting

### Server (Express)
Can be deployed to:
- Heroku
- Railway
- DigitalOcean
- AWS EC2
- Any Node.js hosting

### Environment Setup for Production
1. Set `NODE_ENV=production`
2. Update `CLIENT_URL` to your production domain
3. Configure CORS settings
4. Add email service credentials (if implementing email functionality)

## 📝 Future Enhancements

- [ ] Email service integration (SendGrid, Nodemailer)
- [ ] Database integration (MongoDB, PostgreSQL)
- [ ] Admin dashboard for managing content
- [ ] Blog/News section
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Newsletter subscription
- [ ] Payment gateway integration

## 👤 Contact Information

- **Email:** info@advadev.com
- **Phone:** +963-99-6026-755
- **Location:** Aleppo, Syrian Arab Republic
- **WhatsApp:** [+963996026755](https://wa.me/00963996026755)

## 📄 License

All rights reserved © 2024 Advadev

---

Built with ❤️ by Wael Al-Hamd - Founder & Lead Developer
