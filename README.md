# Grid Cannon

Grid Cannon is a cross-platform single-player strategy card game built with a standard deck of playing cards. It blends deterministic rules, spatial decision-making, and resource management into a compact but deep puzzle system.

The long-term goal is to evolve this into a full-stack, mobile-first product featuring backend persistence, daily challenges, and AI-assisted gameplay analysis.

---

## 🚀 Core Concept

You play by drawing cards from a shuffled deck and placing them into a 3×3 grid. Your objective is to eliminate all “royals” (Jacks, Queens, Kings) through strategic placement, positioning, and calculated attacks.

Every decision matters. The game becomes a balance of probability, planning, and resource management.

---

## 🧱 Tech Stack (Target Direction)

This project is intentionally designed to strengthen full-stack and mobile engineering skills.

### Frontend (Mobile-first)

* React Native via Expo
* TypeScript
* Mobile-first UI/UX design

### Backend

* Express (Node.js)
* REST API (initially)
* Future WebSocket support for real-time features

### Database

* PostgreSQL
* Prisma ORM

### Authentication (planned)

* Clerk or Auth.js

### AI Integration

* OpenAI API for hint generation and game analysis

---

## 🎮 Game Overview

### Objective

Defeat all royals on the grid before exhausting the deck or reaching an unwinnable state.

### Core Gameplay Loop

* Draw a card from the deck
* Place number cards (2–10) onto a 3×3 grid under placement rules
* Royals (J, Q, K) spawn adjacent to the grid
* Use positional attacks to reduce and eliminate royals
* Manage limited resources:

  * Aces → Extractions (remove grid stacks)
  * Jokers → Reassignments (move cards strategically)

---

## 🧠 Design Principles

### 1. Deterministic Gameplay

Every game is fully reproducible from a seed. This enables:

* Daily challenges
* Leaderboards
* AI analysis
* Replay systems

### 2. Separation of Concerns

The game engine is fully independent of UI and backend frameworks.

This ensures:

* Reusability across platforms (web / mobile / API / AI tools)
* High testability
* Clean architectural boundaries

### 3. Framework-Agnostic Core

The game engine does not depend on React, Express, or any runtime environment.

---

## 🏗️ Architecture (Target State)

```text
React Native App (Expo)
        ↓
Express API Server
        ↓
Game Engine (pure TypeScript)
        ↓
PostgreSQL (game state + events)
```

Each layer has a distinct responsibility:

* **Mobile App** → UI + interaction
* **Express Backend** → authentication, persistence, validation, AI orchestration
* **Game Engine** → deterministic rule system
* **Database** → persistent state and history

---

## 🧩 Project Phases

### Phase 1 — Core Game Engine (No UI)

**Goal:** Build a fully deterministic, testable rules engine.

* Implement full game rules
* Deck generation + seeded randomness
* Placement validation system
* Royal spawning logic
* Attack resolution rules
* Win/loss detection
* Full unit test coverage

✅ Outcome: standalone TypeScript game engine library

---

### Phase 2 — Mobile App (React Native / Expo)

**Goal:** Playable mobile experience.

* Grid-based gameplay UI
* Card interactions (tap / drag)
* Basic animations
* Local state management
* Offline play support

Stretch goals:

* Haptics
* Polished animations
* Accessibility improvements

---

### Phase 3 — Backend (Express + PostgreSQL)

**Goal:** Introduce persistence and accounts.

* Express REST API
* User authentication
* Save and load game sessions
* Store move history
* Track wins/losses and scores

Core endpoints:

* `POST /game/start`
* `POST /game/move`
* `GET /game/state`
* `GET /stats`

Database models:

* Users
* Games
* Moves
* Daily seeds

---

### Phase 4 — Daily Challenge System

**Goal:** Shared deterministic gameplay across all users.

* Global daily seed
* One attempt per user per day
* Leaderboards
* Streak tracking

This introduces competitive structure.

---

### Phase 5 — AI Assistant (Key Differentiator)

**Goal:** Add meaningful AI-driven gameplay enhancement.

#### 💡 Hint System

* Suggest optimal move
* Explain reasoning
* Provide confidence scoring

#### 📊 Post-Game Analysis

* Identify mistakes
* Suggest alternative strategies
* Summarise full run

#### 🧠 Difficulty Analysis

* Evaluate seed difficulty
* Compare performance across users
* Generate human-readable explanations

All AI features are powered via structured game state passed through the Express backend.

---

### Phase 6 — Advanced Systems (Optional Expansion)

#### Real-time Multiplayer

* Synchronized seeded runs
* Live leaderboards
* WebSocket-based updates

#### Event Sourcing Upgrade

* Store all actions as immutable events
* Full replay system
* Time-travel debugging

#### Simulation Engine

* Bulk-run games for balance testing
* AI benchmarking
* Statistical tuning

---

## 🧪 Testing Strategy
* Unit tests for all game rules
* Deterministic seed-based tests
* Integration tests for Express API
* End-to-end tests for full gameplay flow
* Snapshot tests for game state transitions
---

## 📊 Why This Project Matters

Grid Cannon is designed to demonstrate modern full-stack capability across:
* Mobile development (React Native)
* Backend engineering (Express + REST APIs)
* Database design (PostgreSQL)
* System design and architecture
* Deterministic simulation systems
* AI feature integration in real applications

It goes beyond CRUD systems into:
* rule engines
* state simulation
* strategic AI assistance
* reproducible game systems

---

## 🧭 Future Ideas (Backlog)

* Weekly seeded tournaments
* Co-op puzzle mode
* Global ranking seasons
* Advanced analytics dashboards
---

## 📌 Status

🚧 Early design phase

Next milestone:

> Build the core game engine with full rule implementation and deterministic testing.

---

## 🤝 Philosophy

This project is intentionally structured as a learning vehicle.

Each phase should expand real engineering capability rather than simply add surface-level features.
