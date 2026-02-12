# Pearlson Languages Website - Complete Technical Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture & Technology Stack](#architecture--technology-stack)
3. [Project Structure](#project-structure)
4. [Frontend Architecture](#frontend-architecture)
5. [Backend Architecture (Netlify Functions)](#backend-architecture-netlify-functions)
6. [Google Sheets Integration](#google-sheets-integration)
7. [Deployment & Infrastructure](#deployment--infrastructure)
8. [Component Documentation](#component-documentation)
9. [Page Documentation](#page-documentation)
10. [Styling & Design System](#styling--design-system)
11. [Routing & Navigation](#routing--navigation)
12. [Form Handling & Validation](#form-handling--validation)
13. [State Management](#state-management)
14. [API Integration](#api-integration)
15. [Environment Configuration](#environment-configuration)
16. [Build & Deployment Process](#build--deployment-process)
17. [Troubleshooting & Known Issues](#troubleshooting--known-issues)

---

## Project Overview

**Pearlson Languages and Solutions** is a modern, responsive website built for a language education organization in Kenya. The website serves as a platform for:

- Showcasing language courses (French and German)
- Managing festival and course registrations
- Displaying events and blog content
- Providing contact information and social media links

**Live URL:** `www.pearlsonlanguages.com` / `pearlsonlanguages.com`

**Repository:** GitHub (private)

---

## Architecture & Technology Stack

### Frontend Stack
- **React 18.2.0** - UI library
- **React Router DOM 6.8.0** - Client-side routing
- **Framer Motion 11.0.3** - Animation library
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **React Scripts 5.0.1** - Build tooling (Create React App)

### Backend Stack
- **Netlify Functions** - Serverless functions (Node.js)
- **Google Sheets API** - Data storage
- **google-spreadsheet 4.1.5** - Google Sheets client library
- **google-auth-library 9.14.2** - Google API authentication

### Development Tools
- **Node.js 18** - Runtime environment
- **npm** - Package manager
- **ESLint** - Code linting
- **Git** - Version control

### Deployment
- **Netlify** - Hosting and CI/CD
- **GitHub** - Source code repository

---

## Project Structure

```
pearlson-website/
├── public/
│   ├── Images/                    # All static images (150+ files)
│   │   ├── Past Events/
│   │   │   └── Nairobi Edition/   # Event photos
│   │   ├── Upcoming Events/       # Event videos
│   │   └── [other images]
│   ├── favicon_io/                # Favicon files
│   ├── index.html                 # HTML template
│   ├── manifest.json              # PWA manifest
│   └── _redirects                 # Netlify redirects
│
├── src/
│   ├── components/               # Reusable React components
│   │   ├── Badge.js
│   │   ├── Breadcrumb.js
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Checkbox.js
│   │   ├── CoursesRegistrationForm.jsx
│   │   ├── Dropdown.js
│   │   ├── FestivalRegistrationForm.jsx
│   │   ├── Footer.js
│   │   ├── Input.js
│   │   ├── LoadingSpinner.js
│   │   ├── Modal.js
│   │   ├── Navbar.js
│   │   ├── Notification.js
│   │   ├── Pagination.js
│   │   ├── Progress.js
│   │   ├── Radio.js
│   │   ├── Rating.js
│   │   ├── Select.js
│   │   ├── Slider.js
│   │   ├── Switch.js
│   │   ├── Table.js
│   │   ├── Tabs.js
│   │   ├── Textarea.js
│   │   └── Tooltip.js
│   │
│   ├── context/
│   │   └── AppContext.js          # Global state management
│   │
│   ├── hooks/
│   │   └── useForm.js             # Form handling hook
│   │
│   ├── pages/                     # Page components
│   │   ├── About.js
│   │   ├── Blog.js
│   │   ├── BlogPost.js
│   │   ├── Contact.js
│   │   ├── Courses.js
│   │   ├── CoursesRegister.js
│   │   ├── Events.js
│   │   ├── FestivalRegister.js
│   │   ├── Home.js
│   │   └── Workbooks.js
│   │
│   ├── utils/
│   │   └── helpers.js             # Utility functions
│   │
│   ├── App.js                     # Main app component
│   ├── index.js                   # Entry point
│   ├── index.css                  # Global styles & Tailwind
│   └── styles.css                 # Additional styles
│
├── netlify/
│   └── functions/                 # Netlify serverless functions
│       ├── submit-courses-registration.js
│       ├── submit-festival-registration.js
│       └── package.json            # Function dependencies
│
├── build/                         # Production build output
│
├── netlify.toml                   # Netlify configuration
├── package.json                   # Project dependencies
├── tailwind.config.js            # Tailwind CSS configuration
├── README.md                      # Project README
├── NETLIFY_SETUP.md              # Setup instructions
└── TECHNICAL_DOCUMENTATION.md    # This file
```

---

## Frontend Architecture

### Application Entry Point (`src/index.js`)

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**Key Features:**
- Uses React 18's `createRoot` API
- Wraps app in `StrictMode` for development checks
- Imports global CSS styles

### Main App Component (`src/App.js`)

**Structure:**
- Wraps entire app in `AppProvider` (Context API)
- Sets up `BrowserRouter` for client-side routing
- Includes `ScrollToTop` component for route changes
- Renders `Navbar`, `Notification`, main content, and `Footer`

**Routes:**
- `/` - Home page
- `/about` - About page
- `/courses` - Courses listing
- `/events` - Events page
- `/blog` - Blog listing
- `/blog/post/:id` - Individual blog post
- `/contact` - Contact page
- `/festival-register` - Festival registration form
- `/courses-register` - Courses registration form
- `/workbooks` - Workbooks page (Coming Soon)

**ScrollToTop Component:**
- Automatically scrolls to top on route changes
- Uses `useLocation` hook to detect route changes
- Smooth scroll behavior

---

## Backend Architecture (Netlify Functions)

### Function Structure

Netlify Functions are serverless Node.js functions deployed on Netlify's edge network. They handle:

1. **CORS preflight requests** (OPTIONS)
2. **Form submissions** (POST)
3. **Google Sheets API integration**
4. **Error handling and validation**

### Function Location
- **Directory:** `netlify/functions/`
- **Runtime:** Node.js 18
- **Bundler:** esbuild (configured in `netlify.toml`)

### Function 1: Festival Registration (`submit-festival-registration.js`)

**Purpose:** Handles submissions from the Mombasa Multilingual Festival registration form.

**Endpoint:** `/.netlify/functions/submit-festival-registration`

**HTTP Methods:**
- `OPTIONS` - CORS preflight
- `POST` - Form submission

**Request Body:**
```json
{
  "schoolName": "string",
  "contactPerson": "string",
  "email": "string",
  "phone": "+254xxxxxxxxx",
  "transactionCode": "string (10-12 alphanumeric)",
  "categories": ["array", "of", "selected", "categories"]
}
```

**Response Format:**
```json
{
  "success": true,
  "error": "string (if error)"
}
```

**Google Sheets Columns:**
- Timestamp
- School Name
- Contact Person
- Email
- Phone
- Transaction Code
- Categories (comma-separated string)

**Authentication Flow:**
1. Checks for `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY` env vars (preferred)
2. Falls back to `GOOGLE_SHEETS_CREDENTIALS` (base64 JSON) if needed
3. Creates JWT client using `google-auth-library`
4. Authenticates with Google Sheets API
5. Writes data to sheet specified by `FESTIVAL_SHEET_ID`

**Error Handling:**
- 400: Missing required fields
- 405: Method not allowed
- 500: Server errors (missing env vars, Google API errors, etc.)

**CORS Headers:**
```javascript
{
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
  'Connection': 'close'
}
```

### Function 2: Courses Registration (`submit-courses-registration.js`)

**Purpose:** Handles submissions from the Courses registration form.

**Endpoint:** `/.netlify/functions/submit-courses-registration`

**HTTP Methods:**
- `OPTIONS` - CORS preflight
- `POST` - Form submission

**Request Body:**
```json
{
  "schoolName": "string",
  "contactPerson": "string",
  "email": "string",
  "phone": "+254xxxxxxxxx",
  "numLearners": "number",
  "languages": ["French", "German"],
  "services": ["workbooks", "uniforms"]
}
```

**Response Format:**
```json
{
  "success": true,
  "error": "string (if error)"
}
```

**Google Sheets Columns:**
- Timestamp
- School Name
- Contact Person
- Email
- Phone
- Number of Learners
- Languages (comma-separated string)
- Services (comma-separated string)

**Authentication Flow:** Same as Festival Registration function

**Error Handling:** Same as Festival Registration function

**CORS Headers:** Same as Festival Registration function

---

## Google Sheets Integration

### Setup Process

1. **Google Cloud Project Setup:**
   - Create a Google Cloud project
   - Enable Google Sheets API
   - Create a Service Account
   - Generate JSON key file

2. **Service Account Configuration:**
   - Extract `client_email` and `private_key` from JSON
   - Share Google Sheets with service account email
   - Grant "Editor" permissions

3. **Netlify Environment Variables:**

   **Preferred Method (avoids 4KB limit):**
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` - Service account email
   - `GOOGLE_PRIVATE_KEY` or `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` - Private key (with `\n` replaced)

   **Fallback Method:**
   - `GOOGLE_SHEETS_CREDENTIALS` - Base64-encoded full JSON file

4. **Sheet IDs:**
   - `FESTIVAL_SHEET_ID` - Festival registrations sheet
   - `COURSES_SHEET_ID` - Courses registrations sheet

### Authentication Method

**Library:** `google-auth-library` v9.14.2

**Method:** JWT (JSON Web Token) authentication

```javascript
const { JWT } = require('google-auth-library');

const auth = new JWT({
  email: creds.client_email,
  key: creds.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
```

**Why JWT over OAuth2:**
- No user interaction required
- Suitable for server-to-server communication
- More secure for automated processes

### Data Writing Process

1. **Load Spreadsheet:**
   ```javascript
   const doc = new GoogleSpreadsheet(sheetId, auth);
   await doc.loadInfo();
   ```

2. **Ensure Headers:**
   - Checks if header row exists
   - Creates/updates headers if missing
   - Uses `setHeaderRow()` method

3. **Add Row:**
   ```javascript
   await sheet.addRow({
     Timestamp: new Date().toISOString(),
     'School Name': data.schoolName,
     // ... other fields
   });
   ```

4. **Error Handling:**
   - Wraps `addRow` in try/catch
   - Returns specific error messages
   - Logs errors to Netlify function logs

---

## Deployment & Infrastructure

### Netlify Configuration (`netlify.toml`)

```toml
[build]
  base = "."
  publish = "build"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"

[functions]
  directory = "netlify/functions"
  node_bundler = "esbuild"

[context.production]
  command = "npm run build"
  publish = "build"
```

**Key Settings:**
- **Base Directory:** Root of repository
- **Publish Directory:** `build/` (React build output)
- **Build Command:** `npm run build`
- **Node Version:** 18
- **Function Directory:** `netlify/functions`
- **Function Bundler:** esbuild (faster than default)

**Redirects:**
- All routes (`/*`) redirect to `/index.html` with 200 status
- Enables client-side routing (SPA behavior)

### Build Process

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Build React App:**
   ```bash
   npm run build
   ```
   - Creates optimized production build
   - Outputs to `build/` directory
   - Minifies JavaScript and CSS
   - Generates source maps

3. **Deploy Functions:**
   - Netlify automatically detects `netlify/functions/`
   - Bundles functions using esbuild
   - Deploys to edge network

### Domain Configuration

**Primary Domain:** `pearlsonlanguages.com` (apex domain)
**WWW Domain:** `www.pearlsonlanguages.com` (redirects to apex)

**Note:** There's a known issue with `www` domain redirecting to apex, which can cause CORS issues with function calls. Functions should be called using the apex domain.

### Environment Variables (Netlify Dashboard)

**Required Variables:**
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY` or `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
- `FESTIVAL_SHEET_ID`
- `COURSES_SHEET_ID`

**Optional (Fallback):**
- `GOOGLE_SHEETS_CREDENTIALS` (base64 JSON)

**Scope:** Production environment

---

## Component Documentation

### Core Components

#### Navbar (`src/components/Navbar.js`)

**Features:**
- Fixed position navigation
- Scroll-based background change (transparent → white)
- Desktop dropdown menus (Courses, Events)
- Mobile hamburger menu
- Active route highlighting
- Responsive design

**State Management:**
- `isOpen` - Mobile menu toggle
- `isScrolled` - Scroll position tracking
- `eventsDropdownOpen` - Events dropdown toggle
- `coursesDropdownOpen` - Courses dropdown toggle

**Navigation Links:**
- Home
- About
- Courses (dropdown: All Courses, Register for Courses, Workbooks)
- Events (dropdown: All Events, Register for Festival)
- Blog
- Contact

**Mobile Menu:**
- Hamburger icon (changes color based on scroll)
- Collapsible dropdowns
- Full-screen overlay

#### Footer (`src/components/Footer.js`)

**Sections:**
- Company logo and description
- Quick Links (navigation)
- Resources (links to blog, FAQs, etc.)
- Contact Information (email, phone, address)
- Social Media Links (Twitter, Instagram, Facebook)
- Copyright notice

#### Card (`src/components/Card.js`)

**Purpose:** Reusable card container component

**Props:**
- `className` - Additional CSS classes
- `children` - Card content

**Usage:** Used throughout the site for consistent card styling

#### Badge (`src/components/Badge.js`)

**Purpose:** Display category/status badges

**Variants:**
- `primary` - Orange background
- `secondary` - Teal background
- Default - Gray background

### Form Components

#### FestivalRegistrationForm (`src/components/FestivalRegistrationForm.jsx`)

**Purpose:** Mombasa Multilingual Festival registration form

**Fields:**
- School Name (required)
- Contact Person (required)
- Email (required, validated)
- Phone (required, +254 format)
- M-Pesa Transaction Code (required, 10-12 alphanumeric)
- Categories (checkboxes, at least one required)

**Categories:**
- Kindergarten: Singing game
- Lower primary (grade 1-3): Song/song and dance/choral poem
- Upper primary (grade 4-6): Choral verse/song and dance/rap
- Junior school (grade 7-9): Skit/play/modern dance
- Secondary school: Skit, song, poem, choral verse
- Solo pieces (any grade): Solo verse/public speaking/solo song

**Validation:**
- Client-side validation before submission
- Server-side validation in Netlify function
- Real-time error display

**Submission:**
- POSTs to `/.netlify/functions/submit-festival-registration`
- Shows loading state during submission
- Displays success/error messages
- Resets form on success

**Payment Instructions:**
- Displays M-Pesa Pay-Bill details
- Registration fee: Ksh 3,500
- Entry fee per pupil: Ksh 500

#### CoursesRegistrationForm (`src/components/CoursesRegistrationForm.jsx`)

**Purpose:** Language courses registration form

**Fields:**
- School Name (required)
- Contact Person (required)
- Email (required, validated)
- Phone (required, +254 format)
- Number of Learners (required, number)
- Preferred Languages (checkboxes, at least one required)
  - French
  - German
- Optional Services (checkboxes)
  - Interactive workbooks
  - School uniforms

**Validation:**
- Client-side validation before submission
- Server-side validation in Netlify function
- Real-time error display

**Submission:**
- POSTs to `/.netlify/functions/submit-courses-registration`
- Shows loading state during submission
- Displays success/error messages
- Resets form on success

**Pricing Information:**
- Ksh 1,000 (150-350 learners)
- Ksh 800 (351-650 learners)
- Ksh 600 (>650 learners)

---

## Page Documentation

### Home Page (`src/pages/Home.js`)

**Sections:**
1. **Hero Section:**
   - Main headline: "Empowering Students Through Language Learning"
   - Call-to-action buttons:
     - "Mombasa Multilingual Festival Registration" (links to `/festival-register`)
     - "Contact Us" (links to `/contact`)
   - Company logo image

2. **Stats Section:**
   - Animated counters (20+ Schools, 7000+ Students, 3+ Years)
   - Uses Intersection Observer for scroll-triggered animations

3. **Features Section:**
   - Three feature cards:
     - Expert Teachers
     - Global Opportunities
     - Community Focus

4. **CTA Section:**
   - "Ready to Start Your Language Journey?"
   - Link to Courses page

**Animations:**
- Framer Motion animations
- Staggered children animations
- Hover effects

### About Page (`src/pages/About.js`)

**Sections:**
1. **Hero Section:**
   - Page title and description

2. **Founder Section:**
   - Founder image (animated)
   - Biography of Flency Atswenje
   - Company background

3. **Mission & Vision:**
   - Two cards displaying mission and vision statements

4. **Image Gallery:**
   - Grid of 8 event photos
   - Hover effects and animations

### Courses Page (`src/pages/Courses.js`)

**Features:**
- Background image with overlay
- Hero section with glassmorphism effect
- Course cards:
  - Primary School Program (Tutor-Led Language Program)
  - Course details, features, pricing
  - Registration button
- Testimonials section
- Student success stories

**Background:**
- Full-page background image
- Dark overlay for readability
- Glassmorphism cards

### Events Page (`src/pages/Events.js`)

**Features:**
- Tabbed interface (Upcoming / Past Events)
- Upcoming Events:
  - Mombasa Multilingual Festival
  - Countdown timer
  - Video banner
  - Event details
  - Registration link
- Past Events:
  - Nairobi Edition slideshow (41 images)
  - Western Edition gallery
  - Language Exchange Program gallery

**Nairobi Slideshow:**
- Auto-rotating image carousel
- 3.5-second interval
- Smooth transitions
- Indicator dots

**Background:**
- Full-page background image
- Light overlay
- Glassmorphism hero panel

### Blog Page (`src/pages/Blog.js`)

**Features:**
- Hero section with glassmorphism panel
- Featured Articles (2 posts)
- Recent Articles (4 posts)
- Newsletter subscription section
- Blog post cards with:
  - Category badges
  - Author, date, read time
  - Excerpt
  - "Read More" link

**Blog Posts:**
1. How Tutors Boost CBC Language Skills
2. Interactive Lessons: Engaging Young Learners with French
3. Cultural Benefits of German in Primary Education
4. Preparing for the Multilingual Fest 2025
5. Sign Language Inclusion in Kenyan Classrooms
6. Success Stories: Tutors Transforming Language Learning

**Background:**
- Hero background image
- Full-page background image with white overlay

### BlogPost Page (`src/pages/BlogPost.js`)

**Features:**
- Dynamic route (`/blog/post/:id`)
- Full blog post content
- Markdown-like formatting
- Author, date, category, read time
- "Back to Blog" button
- Animated content reveal

**Content Formatting:**
- Converts markdown-style text to React components
- Supports headings, paragraphs, lists
- Smooth animations on scroll

### Contact Page (`src/pages/Contact.js`)

**Sections:**
1. **Contact Form:**
   - Name, Email, Phone, Subject, Message
   - Form validation
   - Submit handler (currently logs to console)

2. **Contact Information:**
   - Email: info@pearlsonlanguages.com
   - Phone: +254 727 211 822
   - Address: Nairobi, Kenya

3. **Google Maps Embed:**
   - Interactive map showing Nairobi location

4. **Social Media Links:**
   - Twitter, Instagram, Facebook

### FestivalRegister Page (`src/pages/FestivalRegister.js`)

**Purpose:** Wrapper page for Festival Registration Form

**Features:**
- Full-page background image
- Dark overlay
- Centered form container
- Glassmorphism effect

**Background Image:** `/Images/Past Events/Nairobi Edition/1 (175).jpg`

### CoursesRegister Page (`src/pages/CoursesRegister.js`)

**Purpose:** Wrapper page for Courses Registration Form

**Features:**
- Full-page background image
- Dark overlay
- Centered form container
- Glassmorphism effect

**Background Image:** `/Images/Past Events/Nairobi Edition/1 (163).jpg`

### Workbooks Page (`src/pages/Workbooks.js`)

**Purpose:** "Coming Soon" page for Interactive Workbooks feature

**Features:**
- Animated "Coming Soon" message
- Preview cards for:
  - French A1
  - French A2
  - German A1
- Locked preview state
- Background image
- Email contact link

**Background Image:** `/Images/workbooksbackground.png`

---

## Styling & Design System

### Tailwind CSS Configuration (`tailwind.config.js`)

**Custom Colors:**
```javascript
{
  'cream': '#E7E6C4',      // Background color
  'orange': '#FF3500',     // Primary accent
  'olive': '#3F3826',      // Text color
  'black': '#000000',      // Pure black
  'teal': '#008080',       // Secondary accent
}
```

**Custom Fonts:**
- **Roboto** - Body text
- **Montserrat** - Headings

**Content Paths:**
- `./src/**/*.{js,jsx,ts,tsx}` - All React files

### Global Styles (`src/index.css`)

**Base Styles:**
- Smooth scrolling enabled
- Custom font families
- Background color: cream (#E7E6C4)
- Text color: olive (#3F3826)

**Component Classes:**
- `.btn-primary` - Primary button style
- `.section-padding` - Consistent section padding
- `.container-custom` - Max-width container with padding

**Glassmorphism Classes:**
- `.glass-panel` - Semi-transparent panel with blur
- `.glass-card` - Card with glass effect
- `.glass-button` - Button with glass effect

**Google Fonts:**
- Roboto (300, 400, 500, 700)
- Montserrat (400, 500, 600, 700)

### Design Patterns

**Color Scheme:**
- Primary: Orange (#FF3500 / #FF4500)
- Secondary: Teal (#008080)
- Background: Cream (#E7E6C4)
- Text: Olive (#3F3826)
- Accent: Black (#000000)

**Typography:**
- Headings: Montserrat (bold)
- Body: Roboto (regular)
- Sizes: Responsive (text-4xl to text-sm)

**Spacing:**
- Consistent padding: `section-padding` (py-16 md:py-24)
- Container max-width: `max-w-7xl`
- Responsive padding: `px-4 sm:px-6 lg:px-8`

**Effects:**
- Hover: Scale (1.05), shadow increase
- Transitions: 300ms duration
- Animations: Framer Motion

---

## Routing & Navigation

### Route Configuration (`src/App.js`)

**Router:** `BrowserRouter` (React Router v6)

**Routes:**
```javascript
/ → Home
/about → About
/courses → Courses
/events → Events
/blog → Blog listing
/blog/post/:id → Individual blog post
/contact → Contact
/festival-register → Festival registration
/courses-register → Courses registration
/workbooks → Workbooks (Coming Soon)
```

### Navigation Structure

**Desktop Navigation:**
- Horizontal menu bar
- Dropdown menus for Courses and Events
- Active route highlighting
- "Get Started" CTA button

**Mobile Navigation:**
- Hamburger menu icon
- Collapsible menu
- Dropdown menus for Courses and Events
- Full-screen overlay

**Scroll Behavior:**
- Smooth scrolling enabled
- Auto-scroll to top on route change
- Fixed navbar (scrolls with page)

---

## Form Handling & Validation

### Client-Side Validation

**Festival Registration Form:**
- School Name: Required
- Contact Person: Required
- Email: Required, email format validation
- Phone: Required, +254xxxxxxxxx format
- Transaction Code: Required, 10-12 alphanumeric
- Categories: At least one required

**Courses Registration Form:**
- School Name: Required
- Contact Person: Required
- Email: Required, email format validation
- Phone: Required, +254xxxxxxxxx format
- Number of Learners: Required, positive number
- Languages: At least one required

### Validation Functions

**Email Validation:**
```javascript
/^\S+@\S+\.\S$/
```

**Phone Validation:**
```javascript
/^\+254\d{9}$/
```

**Transaction Code Validation:**
```javascript
/^[A-Za-z0-9]{10,12}$/
```

### Form State Management

**State Variables:**
- `values` - Form field values
- `errors` - Validation errors
- `submitting` - Loading state
- `success` - Success state
- `serverError` - Server error message

**Form Submission Flow:**
1. Client-side validation
2. If valid, set `submitting` to true
3. POST to Netlify function
4. Parse response (handles non-JSON gracefully)
5. If success, show success message and reset form
6. If error, display error message

### Error Handling

**Client-Side:**
- Real-time validation feedback
- Error messages below fields
- Disabled submit button during submission

**Server-Side:**
- 400: Missing required fields
- 500: Server errors
- Network errors: Displayed to user

**Response Parsing:**
- Safely handles non-JSON responses
- Falls back to status code if JSON parse fails
- Displays user-friendly error messages

---

## State Management

### App Context (`src/context/AppContext.js`)

**Purpose:** Global state management using React Context API

**State:**
```javascript
{
  theme: 'light',
  language: 'en',
  isMenuOpen: false,
  notifications: [],
  user: null,
  loading: false,
  error: null,
}
```

**Actions:**
- `setTheme` - Change theme
- `setLanguage` - Change language
- `toggleMenu` - Toggle mobile menu
- `addNotification` - Add notification (auto-removes after 5s)
- `removeNotification` - Remove notification
- `setUser` - Set user data
- `setLoading` - Set loading state
- `setError` - Set error state

**Persistence:**
- Theme saved to `localStorage`
- Theme loaded on mount

**Usage:**
```javascript
import { useApp } from './context/AppContext';

const { state, actions } = useApp();
```

### Local State Management

**React Hooks Used:**
- `useState` - Component-level state
- `useEffect` - Side effects (API calls, subscriptions)
- `useLocation` - Route location (React Router)
- `useParams` - Route parameters (React Router)

**Common Patterns:**
- Form state: `useState` with object
- Loading states: `useState` boolean
- Error states: `useState` string
- Scroll tracking: `useEffect` with event listener

---

## API Integration

### Netlify Functions API

**Base URL:** `/.netlify/functions/`

**Endpoints:**
1. `submit-festival-registration`
2. `submit-courses-registration`

**Request Format:**
```javascript
fetch('/.netlify/functions/endpoint', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
})
```

**Response Format:**
```json
{
  "success": true,
  "error": "string (if error)"
}
```

### Error Handling

**Network Errors:**
- Caught in try/catch
- Displayed as "Network error" message

**HTTP Errors:**
- Parsed from response status
- Error message from response body
- Fallback to status code

**Response Parsing:**
- Safely handles non-JSON responses
- Reads as text first, then attempts JSON parse
- Prevents client-side errors from masking server success

---

## Environment Configuration

### Netlify Environment Variables

**Required:**
- `GOOGLE_SERVICE_ACCOUNT_EMAIL` - Service account email
- `GOOGLE_PRIVATE_KEY` or `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` - Private key
- `FESTIVAL_SHEET_ID` - Festival registrations sheet ID
- `COURSES_SHEET_ID` - Courses registrations sheet ID

**Optional:**
- `GOOGLE_SHEETS_CREDENTIALS` - Base64 JSON (fallback)

**Access:**
- Available in Netlify Functions via `process.env`
- Not exposed to frontend (security)

### Build Environment

**Node Version:** 18 (specified in `netlify.toml`)

**Build Command:** `npm run build`

**Publish Directory:** `build/`

**Function Directory:** `netlify/functions/`

---

## Build & Deployment Process

### Local Development

**Start Development Server:**
```bash
npm start
```
- Runs on `http://localhost:3000`
- Hot reload enabled
- Development mode

**Build for Production:**
```bash
npm run build
```
- Creates optimized build in `build/` directory
- Minifies JavaScript and CSS
- Generates source maps

### Netlify Deployment

**Automatic Deployment:**
- Triggered on push to `main` branch
- Builds using `netlify.toml` configuration
- Deploys functions automatically
- Updates live site

**Manual Deployment:**
- Can be triggered from Netlify dashboard
- Supports branch previews
- Rollback capability

**Build Process:**
1. Clone repository
2. Install dependencies (`npm install`)
3. Build React app (`npm run build`)
4. Bundle Netlify functions
5. Deploy to edge network

**Deployment Settings:**
- Build command: `npm run build`
- Publish directory: `build`
- Functions directory: `netlify/functions`
- Node version: 18

---

## Troubleshooting & Known Issues

### Known Issues

1. **Domain Redirect Issue:**
   - `www.pearlsonlanguages.com` redirects to `pearlsonlanguages.com`
   - Can cause CORS issues with function calls
   - **Solution:** Use apex domain for function calls

2. **502 Errors:**
   - Sometimes occurs despite successful backend writes
   - Related to domain redirects and CORS preflight
   - **Solution:** Ensure consistent domain usage

3. **Google Sheets Authentication:**
   - Private key must have literal newlines (not `\n`)
   - Service account must have sheet access
   - **Solution:** Use `GOOGLE_PRIVATE_KEY` with proper formatting

### Common Errors

**"Submission failed (502)"**
- Check Netlify function logs
- Verify environment variables are set
- Check domain configuration

**"Google Sheets credentials not configured"**
- Verify `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY` are set
- Check private key formatting (newlines)
- Verify service account has sheet access

**"Missing required fields"**
- Check form validation
- Verify all required fields are filled
- Check checkbox selections

**Build Failures:**
- Check Node version (must be 18)
- Verify all dependencies are installed
- Check ESLint errors

### Debugging Tips

1. **Check Netlify Function Logs:**
   - Go to Netlify dashboard
   - Navigate to Functions → Logs
   - Look for error messages

2. **Test Functions Locally:**
   - Use Netlify CLI: `netlify dev`
   - Test endpoints locally
   - Check console logs

3. **Verify Environment Variables:**
   - Check Netlify dashboard → Site settings → Environment variables
   - Ensure variables are scoped to production
   - Verify values are correct

4. **Check Google Sheets:**
   - Verify service account email has access
   - Check sheet IDs are correct
   - Verify headers match expected format

---

## Additional Notes

### Performance Optimizations

1. **Image Optimization:**
   - Images stored in `public/Images/`
   - Consider using WebP format
   - Lazy loading for gallery images

2. **Code Splitting:**
   - React Router handles route-based splitting
   - Components loaded on demand

3. **Animation Performance:**
   - Framer Motion uses GPU acceleration
   - Animations optimized for 60fps

### Security Considerations

1. **Environment Variables:**
   - Never expose Google credentials to frontend
   - Use Netlify environment variables
   - Rotate credentials regularly

2. **Form Validation:**
   - Client-side validation for UX
   - Server-side validation for security
   - Sanitize user inputs

3. **CORS:**
   - Currently allows all origins (`*`)
   - Consider restricting in production

### Future Enhancements

1. **Email Notifications:**
   - Send confirmation emails on registration
   - Use Netlify Email or SendGrid

2. **Payment Integration:**
   - M-Pesa API integration
   - Payment verification

3. **Admin Dashboard:**
   - View registrations
   - Export data
   - Manage events

4. **Blog CMS:**
   - Content management system
   - Markdown editor
   - Image uploads

5. **Analytics:**
   - Google Analytics integration
   - Track form submissions
   - Monitor user behavior

---

## Conclusion

This documentation provides a comprehensive overview of the Pearlson Languages website architecture, implementation, and deployment. The website is built using modern web technologies and follows best practices for React development, serverless functions, and Google Sheets integration.

For questions or issues, refer to:
- Netlify Function logs
- Google Sheets API documentation
- React Router documentation
- Tailwind CSS documentation

---

**Last Updated:** January 2025
**Version:** 1.0.0
**Maintainer:** Development Team

