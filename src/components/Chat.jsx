"use client"
import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import CandidateList from "./CandidateList"
import ChatWindow from "./ChatWindow"

export default function Chat() {
  const [selectedCandidate, setSelectedCandidate] = useState(null)

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <CandidateList onSelectCandidate={setSelectedCandidate} />
        <ChatWindow selectedCandidate={selectedCandidate} />
      </div>
    </div>
  )
}

