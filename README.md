# GitGrub 🍔

_CSE-3112 Software Engineering Course Project (University of Dhaka)_

GitGrub is a team-built software engineering project developed for CSE-3112. This repo contains the implementation code, design diagrams (UML/architecture), and documentation produced throughout the software lifecycle.

## YouTube Link
- https://youtu.be/wLHxbN6E81I
---
## Team
- Meherun Farzana
- Mehrajul Abadin Miraj
- Aniket Joarder

## Table of Contents

- [GitGrub 🍔](#gitgrub-)
  - [YouTube Link](#youtube-link)
  - [Team](#team)
  - [Project Overview](#project-overview)
  - [Core Features](#core-features)
  - [System Design](#system-design)
  - [Tech Stack](#tech-stack)
  - [Repository Structure](#repository-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
  - [Running the App](#running-the-app)
    - [Backend (Node.js + Express)](#backend-nodejs--express)
    - [Frontend (React)](#frontend-react)

## Project Overview

**GitGrub** is a course project demonstrating end-to-end software engineering practice: requirements, design, implementation, testing, documentation, and delivery.  
It includes:

- Production code (`Code/`)
- Formal artifacts (SRS, design docs, user stories, test cases in `Documents/`)
- Visual models (UML, ER, sequence, architecture in `Diagrams/`)

**TL;DR**: _GitGrub is a **[TODO: one-liner project description]**._

## Core Features

- **User Management** – Customers and canteen staff can register, log in, and manage their profiles securely, with options for password recovery and role-based access control.
- **Menu Management** – Canteen owners/managers can add, update, categorize, and remove menu items (breakfast, lunch, snacks, beverages) to keep offerings up to date.
- **Order Processing** – Customers can browse menus, place online/offline orders, select dine-in/takeaway options, and track their order status in real time.
- **Cart & History** – Users can manage their cart before checkout and view past order history for convenience.
- **Inventory Management** – Managers can monitor ingredient stock levels, update inventory, and reduce wastage by ensuring availability of required items.
- **Employee Management** – Admins can add and manage staff details, assign roles (chef, waiter, cleaner), schedule shifts, and supervise employee activities.
- **Sales & Analytics** – Owners can track sales records, generate reports, and view analytics for insights into business performance.
- **Review & Feedback System** – Customers can leave reviews and ratings on food items/orders, while admins can monitor feedback for continuous improvement.
- **Transaction Management** – Provides payment options and records salary/financial transactions, ensuring accuracy and transparency.
- **Notifications & Alerts** – Real-time updates on order readiness, status changes, or special promotions to keep customers informed.
- **Security & Privacy** – Implements authentication, authorization, and encryption to safeguard sensitive user and financial data.


## System Design

Artifacts are in **`Diagrams/`**:

## Tech Stack

- **Front-end Framework:** React  
- **Back-end Runtime/Environment:** Node.js  
- **Database:** MongoDB  
- **Authentication:** Auth0  
- **Payment:** Stripe  

## Repository Structure
```
├─ Code/ # Application source code
│ ├─ backend/
│ └─ frontend/
├─ Diagrams/ # UML, ERD, sequence, deployment
├─ Documents/ # SRS, design docs, user stories, test reports
└─ README.md

```

## Getting Started

### Prerequisites

- Git ≥ 2.40  
- Node.js ≥ 18 (with npm)  
- MongoDB ≥ 6.0 (local or cloud, e.g., MongoDB Atlas)  
- Docker ≥ 24 (optional, for containerized deployment)  

### Setup

```bash
# Clone repo
git clone https://github.com/reckless-meherun/CSE-3112-Software-Engineering-Project-GitGrub.git
cd CSE-3112-Software-Engineering-Project-GitGrub
```
Install Dependencies:
```
cd Code/backend
npm install

cd ../frontend
npm install

```
Create an .env file in both backend/ and frontend/ and add:
```
MONGO_URI=mongodb://localhost:27017/gitgrub
JWT_SECRET=your-secret-key
STRIPE_SECRET_KEY=your-stripe-secret

```
## Running the App

### Backend (Node.js + Express)
```
cd Code/backend
npm run dev

```
### Frontend (React)
```
cd Code/frontend
npm start
```
