# 🧪 Web Programming Laboratory

> Pagină web personală pentru proiecte și lucrări de laborator — React Branch

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📋 Despre

Proiect realizat cu **React.js** pe frontend și **Express + Node.js** pe backend, conectat la o bază de date **MongoDB**. Folosit ca pagină personală pentru afișarea proiectelor și a lucrărilor de laborator.

---

## 🚀 Tech Stack

| Layer | Tehnologie |
|-------|------------|
| Frontend | React.js |
| Backend | Node.js + Express |
| Database | MongoDB |
| Package Manager | npm |

---

## 📁 Structura proiectului

```
├── server/
│   ├── index.js          # Entry point — Express server
│   └── models/
│       └── Project.js    # Mongoose model
├── src/
│   ├── assets/
│   ├── components/
│   ├── css/
│   └── pages/
├── public/
├── index.html
└── README.md
```

---

## ⚙️ Instalare și pornire

### Cerințe

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) (local sau Atlas)

### Pași

1. **Clonează repository-ul**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   git checkout react
   ```

2. **Instalează dependențele**
   ```bash
   npm install
   ```

3. **Configurează variabilele de mediu**

   Creează un fișier `.env` în rădăcina proiectului:
   ```env
   MONGODB_URI=mongodb://localhost:27017/your-db-name
   PORT=5000
   ```

4. **Pornește serverul Express**
   ```bash
   node server/index.js
   ```

5. **Pornește aplicația React** (într-un terminal separat)
   ```bash
   npm run dev
   ```

   Aplicația va fi disponibilă la `http://localhost:5173` (Vite) sau `http://localhost:3000` (CRA).

---

## 🗄️ Baza de date

Proiectul folosește **MongoDB** prin **Mongoose**. Asigură-te că serverul MongoDB rulează local sau că ai un URI valid de la [MongoDB Atlas](https://www.mongodb.com/atlas).

---

## 📄 Licență

Repository pentru uz educațional.