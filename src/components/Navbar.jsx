import React from "react"
import jacoblogo from "../assets/JacobLogo.png"
import profile from "../assets/profile.png"
import one from "../assets/one.png"
import notificationbell from "../assets/notificationbell.png"
import messages from "../assets/messages.png"

const Navbar = () => {
  return (
    <nav className="bg-white py-3 px-6 flex items-center justify-between ">
      <div className="flex items-center">
        <div className="flex items-center mr-10">
          <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center text-white font-bold text-2xl">
            <img src={jacoblogo}></img>
          </div>
          <span className="ml-2 font-bold text-xl">JOBJARO</span>
        </div>
        <div className="flex space-x-8 pl-52 ">
          <button className="text-gray-800 hover:text-purple-700">Home</button>
          <button className="text-gray-800 hover:text-purple-700">Job Post</button>
          <button className="text-purple-700 font-medium">My Space</button>
          <button className="text-gray-800 hover:text-purple-700">About Us</button>
          <button className="text-gray-800 hover:text-purple-700">Top Candidates</button>
        </div>
      </div>

      <div className="flex items-center">
        <div className=" mr-4 flex items-center">
        <div >
         

         <img  src={messages || "/placeholder.svg"} alt="Notifications" className="w-6 h-6 ml-4" />
    
       </div>
          <div >
         

            <img  src={notificationbell || "/placeholder.svg"} alt="Notifications" className="w-6 h-6 ml-4" />
       
          </div>
          
          <span className="ml-2 text-sm text-gray-600">Notifications</span>
          <img src={one || "/placeholder.svg"} alt="1" className=" -top-1 -right-1 w-4 h-4 ml-2" />
          

        </div>
        
        
        <div className="w-8 h-8 rounded-full overflow-hidden">
      
          <img src={profile || "/placeholder.svg"} alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
