# ⚡ ChargeNest

**A smart EV charging slot management platform built for apartment communities.**

---

## 🚩 The Problem

Electric vehicle adoption is rising fast, but most apartment complexes have only a handful of charging points shared across dozens of EV owners. Without a system in place, this leads to:

- Residents double-parking or blocking chargers for hours after their vehicle is already full
- Conflicts and disputes over "whose turn" it is
- No fair, transparent way to queue or reserve a slot
- Wasted charger idle time because no one knows when a spot frees up

ChargeNest solves this by giving residents a simple way to book a charging slot in advance, ensuring fair access and eliminating scheduling conflicts.

---

## 💡 How It Works

- Residents book a **fixed 1-hour charging slot** for their EV — enough time for a full charge in this prototype's scope.
- The system prevents **double-booking**: once a slot is taken, no other resident can book the same charging point for that time window.
- Residents waiting for a turn are placed in a **queue**, and are **automatically notified** the moment their slot opens up — right when the current 1-hour session ends.
- This keeps the charging point in constant, fair rotation without residents needing to manually check availability or argue over turns.

> This is currently a **working prototype** focused on proving out the booking and scheduling logic before scaling to multi-station, multi-apartment support.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Templating | EJS |
| Frontend | HTML, CSS, JavaScript |
| API | REST APIs |
| Database *(planned)* | MySQL via Supabase |
| Authentication *(planned)* | Supabase Auth |

---

## 📌 Project Status

ChargeNest is under active development. Current progress:

- ✅ Core Express server and routing structure
- ✅ EJS-based frontend views
- ✅ Static asset pipeline (CSS/JS)
- ⏳ Booking conflict-prevention logic (in progress)
- ⏳ Database integration (Supabase/MySQL) — not yet connected
- ⏳ User authentication — not yet implemented
- ⏳ Real-time notification system for queued users

---

## 🗺️ Roadmap

- [ ] Integrate Supabase for authentication (resident login/signup)
- [ ] Connect MySQL database for persistent booking data
- [ ] Build queue and notification system for waiting users
- [ ] Add admin view for apartment charging station management
- [ ] Support multiple charging stations per apartment complex
- [ ] Deploy as a full production-ready platform

---

## 🎯 Why ChargeNest?

As EV ownership grows faster than shared charging infrastructure in Indian apartment complexes, ChargeNest aims to be a lightweight, practical solution that any apartment management committee can plug in — no complicated hardware, just fair, automated scheduling.

---

## 👤 Author
*Built by [Manas Keshav](https://github.com/Manas-Keshav-12)*
