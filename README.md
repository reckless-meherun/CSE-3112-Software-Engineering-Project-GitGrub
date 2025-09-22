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
  - [Team](#team)
  - [YouTube Link](#youtube-link)
  - [Project Overview](#project-overview)
  - [Core Features](#core-features)
  - [System Design](#system-design)
  - [Tech Stack](#tech-stack)
  - [Repository Structure](#repository-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
  - [Running the App](#running-the-app)
    - [Node.js](#nodejs)
    - [Python (FastAPIDjangoFlask)](#python-fastapidjangoflask)
    - [Java (Spring Boot)](#java-spring-boot)
    - [Docker](#docker)

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

- Architecture Diagram
- Use Case Diagram
- Class/ER Diagram
- Sequence Diagrams
- Deployment Diagram

Add a one-paragraph summary of your architecture (tiers, DB, external deps).

---

## Tech Stack

- **Frontend:** [TODO: React / Vue / HTML+CSS]
- **Backend:** [TODO: Node.js / Django / Spring Boot]
- **Database:** [TODO: PostgreSQL / MySQL / SQLite]
- **Testing:** [TODO: Jest / PyTest / JUnit]
- **CI/CD:** GitHub Actions

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
- Node.js ≥ 18 (with npm) OR Python ≥ 3.10 OR Java ≥ 17  
- Docker ≥ 24 (optional)  
- Database server (PostgreSQL/MySQL/SQLite)

### Setup

```bash
# Clone repo
git clone https://github.com/reckless-meherun/CSE-3112-Software-Engineering-Project-GitGrub.git
cd CSE-3112-Software-Engineering-Project-GitGrub
```
For Node.js
```
cd Code/backend
npm install
```
For Python
```
cd Code/backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
```
For Java
```
cd Code/backend
./mvnw clean install
```
## Running the App

### Node.js
```
npm run dev
```
### Python (FastAPI/Django/Flask)
```
uvicorn app: app --reload
# or python manage.py runserver
```
### Java (Spring Boot)
```
./mvnw spring-boot:run
```
### Docker
```
docker compose up --build
```

