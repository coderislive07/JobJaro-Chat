import React, { useState } from "react"
import {
    LayoutDashboard,
    User,
    Briefcase,
    Award,
    BarChart2,
    FileText,
    Upload,
    Users,
    MessageSquare,
    HelpCircle,
    PlusCircle,
  } from "lucide-react"
  
  const Sidebar = () => {
    return (
      <div className="bg-purple-900 text-white w-[220px] min-h-screen flex flex-col">
        <div className="flex flex-col space-y-1 py-4">
          <SidebarItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <SidebarItem icon={<User size={18} />} label="Our Profile" />
          <SidebarItem icon={<Briefcase size={18} />} label="Job Listings" />
          <SidebarItem icon={<Award size={18} />} label="Talent Pool" />
          <SidebarItem icon={<BarChart2 size={18} />} label="Skills Assessments" />
          <SidebarItem icon={<FileText size={18} />} label="Application Tracking" />
          <SidebarItem icon={<Upload size={18} />} label="Insights" />
          <SidebarItem icon={<Upload size={18} />} label="Bulk CV Upload" />
          <SidebarItem icon={<Users size={18} />} label="Team Access" />
          <SidebarItem icon={<MessageSquare size={18} />} label="Chat" active />
        </div>
  
        <div className="mt-auto mb-4 px-4">
          <div className="flex items-center px-4 py-2 hover:bg-purple-800 cursor-pointer rounded-md">
            <HelpCircle size={18} className="mr-2" />
            <span>Support</span>
          </div>
          <button className="mt-4 w-full bg-white text-purple-900 rounded-md py-2 px-2 text-sm flex items-center justify-center">
            <PlusCircle size={16} className="mr-1" />
            <span>Post A New Job</span>
          </button>
        </div>
      </div>
    )
  }
  
  const SidebarItem = ({ icon, label, active }) => {
    return (
      <div
        className={`flex items-center px-4 py-2 text-sm ${active ? "bg-purple-800" : "hover:bg-purple-800"} rounded-md mx-2`}
      >
        <span className="mr-2">{icon}</span>
        <span>{label}</span>
      </div>
    )
  }
  
  export default Sidebar
  
  