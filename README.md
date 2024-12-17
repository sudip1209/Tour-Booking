# Tour-Booking
Tour Booking System

Developed a dynamic Tour Booking System using Node.js, Express, MongoDB, and Pub/Sub architecture to manage and streamline the booking of tours for users. The system allows users to explore and book tours, while providing admins with tools for managing tour packages, customer reservations, and notifications.

Key Features
User Registration & Authentication: Secure login and registration for customers and administrators using JWT-based authentication.
Tour Management: Admins can create, update, and delete tour packages, each with details such as destinations, itineraries, dates, and prices.
Booking System: Users can browse available tours, check availability, and book tours for specified dates.
Real-Time Notifications: Integrated Pub/Sub system (using Redis or another service) for real-time updates, sending confirmation emails, reminders, and cancellations.
Search & Filtering: Users can filter tours by destination, dates, and price range to find the most suitable tour packages.
Admin Dashboard: Admins can view upcoming tours, manage bookings, and monitor booking statuses.
Technologies Used
Backend: Node.js, Express.js
Database: MongoDB for storing user, tour, and booking information.
Messaging System: Pub/Sub architecture (e.g., Redis or Google Pub/Sub) to handle real-time notifications and updates.
Authentication: JWT for secure token-based user authentication.
Deployment: Deployed on [e.g., AWS, Heroku, or your chosen platform].
Challenges Addressed
Implemented an efficient system to handle simultaneous booking requests and prevent overbooking.
Designed a flexible booking system with time-slot management to accommodate different tour dates and schedules.
Leveraged Pub/Sub to ensure that users receive timely notifications for booking updates and reminders.
This project showcases my ability to build a scalable and user-friendly full-stack application with real-time capabilities, applying Node.js, MongoDB, and Pub/Sub to manage both front-end and back-end operations effectively.

