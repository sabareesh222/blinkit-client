# Blinkit Client

## Hosted Links
- **Frontend**: Frontend on Vercel: https://blinkit-client-two.vercel.app/ (This is the main app link)
- **Backend**: Backend on Render: https://blinkit-server-tppv.onrender.com/

## Table of Contents
1. [Overview](#overview)
2. [Website Screenshots Documentation](#website-screenshots-documentation)
   - [Landing Page](#landing-page)
   - [Home Page](#home-page)
   - [Sidebar](#sidebar)
   - [Admin Dashboard](#admin-dashboard)
   - [Menu Management](#menu-management)
   - [Orders](#orders)
   - [Kart](#kart)
   - [Payments](#payments)
   - [User Management](#user-management)
   - [Management](#management)
3. [Installation](#installation)
   - [Frontend Setup](#frontend-setup)
   - [Backend Setup](#backend-setup)
   - [Frontend Hosting on Vercel](#frontend-hosting-on-vercel)
   - [Backend Hosting on Render](#backend-hosting-on-render)
4. [Environment Variables Setup](#environment-variables-setup)
   - [Frontend Environment Variables](#frontend-environment-variables)
   - [Backend Environment Variables](#backend-environment-variables)
5. [Owner](#owner)

---

## Overview

Blinkit is a full-stack eCommerce application designed to provide an easy-to-use platform for purchasing meal kits. Users can browse through a variety of meal options, add them to their cart, and complete their purchase seamlessly through a secure payment system. Administrators have access to a dashboard for managing the menu, tracking orders, and monitoring revenue. The app is built with the MERN stack, ensuring high performance and scalability for a modern eCommerce experience.

This project demonstrates a full-stack MERN application. It utilizes a React-based frontend and an Express.js-powered backend. Both communicate through REST APIs, making it a robust foundation for modern web applications.

---

## How to Use the App?

1. Open the main app link: [https://blinkit-client-two.vercel.app/](https://blinkit-client-two.vercel.app/).
2. **Login or Signup:**
   - Please use **Login with Gmail** for faster authentication.
   - Alternatively, you can create an account, but it is slightly slower.
3. **Explore the Landing Page:**
   - Browse through the meal kits available for purchase.
   - Click on **Menu** in the Navbar and select **All** to view all available options.
   - Add your favorite meals to the **Kart**.
4. **Shopping Kart and Checkout:**
   - Click on the **Shopping Cart** at the top to view items added.
   - Proceed to **Checkout**, and pay using the Stripe test cards provided. Use any test cards listed here for payment(https://docs.stripe.com/testing) 
   - After payment, a transaction ID will be generated.
5. **Orders Page:**
   - Visit the **Orders Page** to view all your orders and their statuses.
6. **Admin Dashboard:**
   - Admins can view a dashboard showcasing revenue, orders, and other statistics (dynamically gets updated).
   - Admins can also add menu items, manage bookings, and handle user accounts.
   - Note: Currently, making a user an admin requires an update in MongoDB.
   - To view the admin functionalities in action:
     1. First, log in to Gmail using the following credentials:
        - **Email**: saba.blinkit@gmail.com
        - **Password**: Sabablinkit1!
     2. Then, in the Blinkit app, use the Gmail login option and select `saba.blinkit@gmail.com` from the Gmail selection prompt.
7. **Logout:**
   - Once done, click the **Logout** button in the sidebar to securely log out.

This project demonstrates a full-stack MERN application. It utilizes a React-based frontend and an Express.js-powered backend. Both communicate through REST APIs, making it a robust foundation for modern web applications.

---

## Website Screenshots Documentation

### Authentication Screenshots
- **Login Page**  
  ![Login Page](./public/images/website/blin_login.png)  
  This page allows users to log in with their credentials.

- **Signup Page**  
  ![Signup Page](./public/images/website/blin_signup.png)  
  This page enables users to register and create an account.

- **Select Gmail Option**  
  ![Select Gmail Option](./public/images/website/blin_select_Gmail.png)  
  This page provides an option to select Gmail for authentication.

### Landing Page
![Landing Page](./public/images/website/blin_landing.png)
The landing page serves as the entry point to the website, providing an overview and welcoming users to explore its features.

### Home Page
- **View 1**  
  ![Home Page View 1](./public/images/website/blin_home1.png)  
  This is the primary home page view, showcasing key features and navigation options.

- **View 2**  
  ![Home Page View 2](./public/images/website/blin_home2.png)  
  An alternative view of the home page, highlighting additional sections and user options.

### Sidebar
![Sidebar](./public/images/website/blin_sidebar.png)
The sidebar provides quick access to various sections of the website, ensuring smooth navigation.

### Admin Dashboard
![Admin Dashboard](./public/images/website/blin_admin_dash.png)
The admin dashboard allows administrators to monitor and manage the website's core functionalities efficiently.

### Menu Management
- **Menu Overview**  
  ![Menu Overview](./public/images/website/blin_menu.png)  
  The menu overview displays all available menu categories, enabling easy browsing and updates.

- **Add New Menu**  
  ![Add New Menu](./public/images/website/blin_add_menu.png)  
  This section allows administrators to add new menu items, ensuring the offerings are up-to-date.

- **Menu Items**  
  ![Menu Items](./public/images/website/blin_menu_items.png)  
  A detailed view of all menu items, complete with editing and organizational options.

### Orders
![Orders](./public/images/website/blin_orders.png)
The orders page lists all customer orders, providing details and management capabilities for each order.

### Kart
![Kart](./public/images/website/blin_kart.png)
The kart page displays items selected by users for purchase, along with checkout options.

### Payments
![Payments](./public/images/website/blin_pay.png)
The payments section facilitates secure transactions, showcasing payment methods and history.

### User Management
![User Management](./public/images/website/blin_users.png)
The user management page allows administrators to manage user accounts, roles, and permissions.

### Management
![Management](./public/images/website/blin_manage.png)
This section provides tools and options for overall website management, ensuring seamless operations.

---

## Installation

Before proceeding, ensure you have [Node.js](http://nodejs.org) and [npm](https://npmjs.com) installed on your system.

### Frontend Setup

1. Clone or download the project and unzip the files.
2. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Create a `.env.local` file in the root of the `frontend` directory and include the following variables:
   ```env
   VITE_APIKEY=<Firebase API Key>
   VITE_AUTHDOMAIN=<Firebase Auth Domain>
   VITE_PROJECTID=<Firebase Project ID>
   VITE_STORAGEBUCKET=<Firebase Storage Bucket>
   VITE_MESSAGINGSENDERID=<Firebase Messaging Sender ID>
   VITE_APPID=<Firebase App ID>
   VITE_IMAGE_HOSTING_KEY=<IMGBB API Key>
   VITE_STRIPE_PK=<Stripe Publishable Key>
   ```

### Backend Setup

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
4. Create a `.env` file in the root of the `backend` directory and include the following variables:
   ```env
   DB_USER=<MongoDB Username>
   DB_PASS=<MongoDB Password>
   ACCESS_TOKEN_SECRET=<JWT Secret Token>
   PAYMENT_SECRET_KEY=<Stripe Secret Key>
   ```

### Frontend Hosting on Vercel

1. Log in to [Vercel](https://vercel.com/).
2. Create a new project and import the `frontend` directory from your GitHub repository.
3. Configure the environment variables by adding the same variables from `.env.local`.
4. Deploy the project.

### Backend Hosting on Render

1. Log in to [Render](https://render.com/).
2. Create a new web service and select the `backend` directory from your GitHub repository.
3. Set the environment variables by adding the same variables from `.env`.
4. Deploy the project.

---

## Environment Variables Setup

### Frontend Environment Variables

1. **Firebase Variables:**
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Log in using your Google account.
   - Click on **Add Project** and follow the steps to create a new Firebase project.
   - Once the project is created, navigate to **Project Settings** > **General**.
   - Scroll down to the **Your apps** section, click **Add app**, and select **Web**.
   - Follow the steps to register your app, and Firebase will generate the API details (API key, Auth Domain, etc.). Copy these values for your `.env.local` file.

2. **IMGBB API Key:**
   - Visit [IMGBB](https://imgbb.com/).
   - Create an account or log in if you already have one.
   - Navigate to your account dashboard and click on **API**.
   - Generate a new API key and copy it for your `.env.local` file.

3. **Stripe Publishable Key:**
   - Log in to your [Stripe Dashboard](https://stripe.com/).
   - Navigate to **Developers** > **API keys**.
   - Copy the **Publishable Key** and paste it into your `.env.local` file.

### Backend Environment Variables

1. **MongoDB Credentials:**
   - Go to the [MongoDB Atlas](https://www.mongodb.com/atlas) dashboard.
   - Log in or sign up for an account.
   - Create a new cluster or use an existing one.
   - In the cluster dashboard, navigate to **Database Access** under the **Security** section.
   - Click **Add New Database User**, set a username and password, and select the appropriate access level.
   - Use these credentials for `DB_USER` and `DB_PASS` in your `.env` file.

2. **JWT Secret Token:**
   - Use a secure method to generate a random string. For example, you can use the following command in a terminal:
     ```sh
     openssl rand -hex 64
     ```
   - Copy the generated string and paste it as the value for `ACCESS_TOKEN_SECRET` in your `.env` file.

3. **Stripe Secret Key:**
   - Log in to your [Stripe Dashboard](https://stripe.com/).
   - Navigate to **Developers** > **API keys**.
   - Copy the **Secret Key** and paste it as the value for `PAYMENT_SECRET_KEY` in your `.env` file.

---

## Owner

This project is primarily for the Upgrad capstone project by **Sabreesh Devanathan**.
