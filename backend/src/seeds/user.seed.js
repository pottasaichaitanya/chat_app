import { config } from "dotenv";
import { connectDb } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [

  {
    email: "keerthana@example.com",
    fullName: "keerthana",
    password: "123456",
    profilePic: "https://randomuser.me/portraits/lego/1.jpg",
  },
  {
    email: "mounika@example.com",
    fullName: "Mounika",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/lego/9.jpg",
  },
  {
    email: "shreya.davis@example.com",
    fullName: "Shreya",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/lego/9.jpg",
  },
  {
    email: "roshini@example.com",
    fullName: "Roshini",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/lego/9.jpg",
  },
  {
    email: "lalitha@example.com",
    fullName: "Lalitha",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/lego/9.jpg",
  },
  {
    email: "sandhya@example.com",
    fullName: "Sandhya",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/lego/9.jpg",
  },
  {
    email: "srivalli@example.com",
    fullName: "Srivalli",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/lego/9.jpg",
  },
  {
    email: "nandini@example.com",
    fullName: "Nandini",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/lego/9.jpg",
  },

  {
    email: "varaprasad@example.com",
    fullName: "Vara Prasad",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/lego/2.jpg",
  },
  {
    email: "shivaji@example.com",
    fullName: "Shivaji",
    password: "123456",
    profilePic:"https://randomuser.me/api/portraits/lego/3.jpg" ,
  },
  {
    email: "poorna@example.com",
    fullName: "Poorna",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/lego/3.jpg",
  },
  {
    email: "rocky@example.com",
    fullName: "Rocky",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/lego/4.jpg",
  },
  {
    email: "ramana@example.com",
    fullName: "Venkata Ramana",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/lego/5.jpg",
  },
  {
    email: "jayasurya@example.com",
    fullName: "JayaSurya",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/lego/6.jpg",
  },
  {
    email: "chari@example.com",
    fullName: "Chari",
    password: "123456",
    profilePic: "https://randomuser.me/api/portraits/lego/7.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDb();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

seedDatabase();
