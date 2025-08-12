# Contact Me Project

This **Contact Me** web application was developed as a semester project for the **Rapid Web Development** course. It is a simple yet full-featured contact form app that demonstrates modern web development concepts using **Next.js**, **React.js**, and **MongoDB**.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Technologies Used](#technologies-used)  
- [Features](#features)  
- [Project Structure](#project-structure)  
- [Components](#components)  
- [Pages](#pages)  
- [API Routes](#api-routes)  
- [Setup and Running](#setup-and-running)  
- [Environment Variables](#environment-variables)  
- [Future Enhancements](#future-enhancements)  
- [License](#license)

---

## Project Overview

The Contact Me app allows users to submit messages through a form, which are saved in a MongoDB database. An admin interface lets authorized users view, update (mark replied), and delete messages.

This project emphasizes:

- Next.js App Router usage  
- React state and props management  
- Form handling with validation  
- CRUD operations with MongoDB  
- API route handling in Next.js  
- Basic authentication for admin access  
- Separation of concerns via reusable components  

---

## Technologies Used

- **Next.js (App Router)** – React framework for server/client components and routing  
- **React.js** – For building interactive UI with hooks and state  
- **MongoDB** – NoSQL database for storing messages  
- **Node.js** – Backend runtime environment  
- **JavaScript (ES6+)** – Programming language  
- **CSS** – Styling without additional CSS frameworks  

---

## Features

- Responsive contact form with inputs for name, email, subject, and message  
- Client-side form validation  
- Submission stores data in MongoDB database  
- Admin login page protected by password (stored securely via environment variables)  
- Admin can view all messages, mark messages as replied/unreplied, and delete messages  
- Clear visual feedback on successful submissions or errors  


### MongoDB Integration
- Uses the official MongoDB Node.js driver with connection pooling via `lib/mongodb.js`
- Connection established once per serverless function invocation and reused to optimize performance
- Messages stored in a collection named `"messages"` with fields for name, email, subject, message, replied status, and timestamps

### Authentication
- Admin login requires a password set via environment variables (`ADMIN_PASSWORD`)
- Login handled on client side by sending a POST request to `/api/login` route
- Simple password check without full user sessions — suitable for learning/demo purposes
- Only authenticated users can fetch, update, or delete messages on the admin page

### Styling
- Uses plain CSS for styling with a custom color scheme for a clean, modern look
- Responsive design principles for usability across devices
- Buttons and inputs have hover and focus states for better UX
- Visual cues differentiate replied messages and highlight actionable buttons

---

## Project Structure

```plaintext
src/
├── app/
│   ├── api/
│   │   ├── messages/
│   │   │   ├── route.js          # Handles GET (fetch all messages), POST (new message)
│   │   │   └── [id]/
│   │   │       └── route.js      # Handles PUT (update replied), DELETE (delete message)
│   │   └── login/
│   │       └── route.js          # Handles admin login authentication
│   ├── admin/
│   │   └── page.js               # Admin page with login and message management UI
│   ├── page.js                   # Public Contact Form page
│   ├── layout.js                 # Root layout importing global styles and setting metadata
│   └── styles/
│       └── globals.css           # Global styles and color scheme
├── components/
│   ├── ContactForm.js            # Contact form component handling input and submission
│   └── MessageCard.js            # Component to display each message with action buttons
├── lib/
│   └── mongodb.js                # MongoDB connection helper with connection pooling
.env.local                        # Environment variables for database and admin password
package.json                     # Dependencies and scripts
README.md                        # Project documentation
```
---

## Components

### 1. ContactForm

    - Renders the contact form with fields: Name, Email, Subject, and Message
    - Manages form state with React hooks
    - Validates inputs before submission, ensuring required fields are filled and email is valid
    - Sends a POST request to /api/messages on submission
    - Displays success or error messages to the user

### `MessageCard`

- Displays a single message’s details (name, email, subject, message)
- Shows status if replied or not (with background color change)
- Buttons to mark as replied/unreplied and to delete the message
- Calls callback functions from parent for updating and deleting

---

## Pages

### Contact Page (`src/app/page.js`)

- Public page with the contact form  
- Handles form state and validation  
- Sends POST request to `/api/messages` to save new messages

### Admin Page (`src/app/admin/page.js`)

- Admin login form requiring a password  
- After authentication, fetches messages from `/api/messages`  
- Shows list of `MessageCard` components  
- Allows updating (mark replied) and deleting messages via API

---

## API Routes

- `GET /api/messages` – Fetch all messages (admin only)  
- `POST /api/messages` – Create a new message (contact form submission)  
- `PUT /api/messages/[id]` – Update a message’s replied status  
- `DELETE /api/messages/[id]` – Delete a message  
- `POST /api/login` – Verify admin password

All API routes interact with MongoDB via the `lib/mongodb.js` connection helper.

---

# Contact Me Project - MongoDB Integration

A modern contact form application built with Next.js and MongoDB, featuring an admin panel for message management.

## Setup and Running

### Prerequisites
- Node.js installed (v16 or later recommended)
- MongoDB cluster or local MongoDB instance
- Git installed (for cloning)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jaffar-Kazmi/Contact-Me.git
   cd <path to project directory>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create .env.local file**
   
   At the root of your project, create `.env.local` with the following variables:
   ```env
   MONGODB_URI=<your_mongodb_connection_string>
   ADMIN_PASSWORD=<your_admin_password>
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Access the app**
   
   Open your browser at [http://localhost:3000](http://localhost:3000)

6. **Admin panel**
   
   Visit [http://localhost:3000/admin](http://localhost:3000/admin) to login and manage messages.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URI` | Connection string to your MongoDB database |
| `ADMIN_PASSWORD` | Password used to authenticate admin users |

## Future Enhancements

- Implement proper admin authentication with JWT or sessions
- Add email notifications when new messages arrive
- Introduce pagination and search on admin message list
- Improve accessibility and mobile responsiveness
- Add CAPTCHA or spam protection on contact form
- Integrate deployment scripts and CI/CD pipeline

## License

This project was developed as an academic semester project for educational purposes and is licensed accordingly.

## Support

If you have any questions or need further assistance, feel free to open issues or reach out!

Thank you for exploring this project. Happy coding! 🚀

---

*If you want, I can also help you prepare sample `.env.local` files or guide you through deployment steps. Just let me know!*


