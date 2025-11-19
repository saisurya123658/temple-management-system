# 🌐 Temple Management System — MERN Stack

A complete **Temple Website & Online Seva Booking System** built using the **MERN Stack**.  
Users can explore temple information, book sevas online, and admins can manage all bookings.

---


---

## 🚀 Features

### 🌟 User Features
- View temple details, images, and information  
- Explore available sevas  
- Book sevas online (Name, Phone, Seva Type, Date)  
- Instant confirmation message  
- Fully responsive UI built with Tailwind CSS  

### 🛡 Admin Features
- Dashboard showing all bookings  
- Delete bookings  
- Real-time updates  
- Clean and simple UI  

---

## 🛠 Tech Stack

### **Frontend**
- React.js  
- Tailwind CSS  
- React Router  
- Axios  

### **Backend**
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- Dotenv  
- CORS  

---

## 📁 Folder Structure

temple-management-system/
│
├── backend/
│ ├── server.js
│ ├── Routes/sevaroutes.js
│ ├── controllers/sevacontroller.js
│ ├── models/sevabooking.js
│ ├── package.json
│ └── .env
│
└── frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── Constants/
│ ├── App.js
│ └── index.js
└── package.json

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/saisurya123658/temple-management-system.git
2️⃣ Backend Setup
sh
Copy code
cd backend
npm install
Create .env file:

ini
Copy code
MONGO_URI=your_mongo_uri
PORT=6000
Start backend:

sh
Copy code
node server.js
3️⃣ Frontend Setup
sh
Copy code
cd frontend
npm install
npm start
📡 API Endpoints
➤ Add Seva Booking
bash
Copy code
POST /api/seva/add-seva
➤ Get All Bookings
sql
Copy code
GET /api/seva/get-all
➤ Delete Booking
bash
Copy code
DELETE /api/seva/delete/:id
📸 Screenshots
(Add screenshots here)

👨‍💻 Developer
Areveti Sai Guru Surya Teja
MERN Stack Developer | AI Enthusiast

⭐ Support
If you like this project, please ⭐ the repository!
