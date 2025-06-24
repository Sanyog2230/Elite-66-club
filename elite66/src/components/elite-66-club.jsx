import { useState } from "react"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Instagram, Menu, MessageCircle, Twitter, X } from "lucide-react"
import { BookingFormJsx } from "./booking-form"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export function Elite_66ClubJsx() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Mock Instagram posts
  const instagramPosts = [
    { id: 1, imageUrl: "/placeholder.svg?height=300&width=300&text=Club+Night", likes: 120, comments: 15 },
    { id: 2, imageUrl: "/placeholder.svg?height=300&width=300&text=VIP+Event", likes: 200, comments: 25 },
    { id: 3, imageUrl: "/placeholder.svg?height=300&width=300&text=DJ+Set", likes: 180, comments: 20 },
    { id: 4, imageUrl: "/placeholder.svg?height=300&width=300&text=Cocktail+Hour", likes: 150, comments: 18 },
  ]

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="fixed w-full z-10 bg-black px-5 ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex gap-5 text-3xl text-[#F8BB38]  ">
              <p><FaInstagram /></p>
             <p> <FaWhatsapp /></p>
              <p><FaTwitter /></p>
          </div>


          <img src="./logo.png" alt="" className="w-16 ml-[11vw] " />
          <nav className="hidden md:flex space-x-6 text-[#F8BB38] text-xl ">
            <a href="#home" className="text-gold hover:text-gold/80">Home</a>
            <a href="#about" className="text-gold hover:text-gold/80">About</a>
            <a href="#instagram" className="text-gold hover:text-gold/80">Instagram</a>
            <a href="#book" className="text-gold hover:text-gold/80">Book a Table</a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-gold" /> : <Menu className="h-6 w-6 text-gold" />}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-black/95 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gold hover:text-gold/80">Home</a>
              <a href="#about" className="text-gold hover:text-gold/80">About</a>
              <a href="#instagram" className="text-gold hover:text-gold/80">Instagram</a>
              <a href="#book" className="text-gold hover:text-gold/80">Book a Table</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="h-screen relative pt-20 pb-12 px-4 bg-[url('https://images.unsplash.com/photo-1484659619207-9165d119dafe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50">
      <div className="container mx-auto text-center py-20 flex flex-col justify-center items-center h-full">
          <h2 className="text-5xl font-bold mb-4">Welcome to Elite 66 Club</h2>
          <p className="text-xl mb-4">Experience Luxury and Exclusivity</p>
          <button className="uppercase py-3 px-9 bg-[#F8BB38] rounded-full text-black font-medium hover:bg-[#000000]/60 hover:text-[#F8BB38] hover:border-[1.6px] border-[#F8BB38] hover:scale-105 transition duration-300 ease-in-out  ">book now</button>
        </div>
      </div>
        
      </section>

      {/* About Section */}
      <div className="relative w-full h-[40vw] bg-black overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M0,1000 C300,800 400,600 500,600 C600,600 700,800 1000,1000"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="2"
        />
        <path
          d="M0,800 C200,600 300,400 500,400 C700,400 800,600 1000,800"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="2"
        />
        <path
          d="M0,600 C100,400 200,200 500,200 C800,200 900,400 1000,600"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#FFA500" />
            <stop offset="100%" stopColor="#FFD700" />
          </linearGradient>
        </defs>
      </svg>
      <section id="about" className="py-16 px-4 bg-black/80">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#f8bb38] font-[Mazius]">About Elite 66 Club</h2>
          <p className="text-4xl mb-6 max-w-4xl leading-9 mx-auto">
            Elite 66 Club is the epitome of luxury nightlife. Our exclusive venue offers a unique blend of sophistication,
            world-class entertainment, and unparalleled service. From our state-of-the-art sound system to our premium
            bottle service, every detail is crafted to ensure an unforgettable experience.
          </p>
        </div>
      </section>
    </div>

      {/* Instagram Feed Section */}
      <section id="instagram" className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gold">
            <Instagram className="inline-block mr-2 mb-1" /> Follow Us on Instagram
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <div key={post.id} className="relative group">
                <img src={post.imageUrl} alt="Instagram post" className="w-full h-auto" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white text-center">
                    <p>{post.likes} likes</p>
                    <p>{post.comments} comments</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     
      {/* Book a Table Section */}
      <BookingFormJsx/>

      {/* Footer */}
      <footer className="bg-black py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gold">&copy; 2024 Elite 66 Club. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gold hover:text-gold/80 mx-2">Privacy Policy</a>
            <a href="#" className="text-gold hover:text-gold/80 mx-2">Terms of Service</a>
            <a href="#" className="text-gold hover:text-gold/80 mx-2">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}