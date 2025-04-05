"use client"
import React, { useState } from "react"
import { Search } from "lucide-react"


import osman from "../assets/Osman.png"
import pin from "../assets/pin.png"
import onemessage from "../assets/onemessage.png"
import jasmin from "../assets/jasmin.png"
import jacob from "../assets/Jacob.png"
import conner from "../assets/conner.png"
import coloureddoubletick from "../assets/coloureddoubletick.png"
import Anthony from "../assets/Anthony.png"
import vanessa from "../assets/vanessa.png"

const CandidateList = ({ onSelectCandidate }) => {
  const [activeTab, setActiveTab] = useState("Candidate")

  return (
    <div className="w-[380px] ">
      <div className="p-4">
        <div className="relative mb-4">
          <input type="text" placeholder="Search" className="w-full pl-8 pr-4 border py-2  rounded-md" />
          <div className="absolute left-3 top-3 text-gray-400">
            <Search size={16} />
          </div>
        </div>

        <div className="flex ">
          <button
            className={`flex-1 py-2 text-center ${activeTab === "Candidate" ? " border-purple-700 text-black font-medium" : "text-gray-600"}`}
            onClick={() => setActiveTab("Candidate")}
          >
            Candidate
          </button>
          <button
            className={`flex-1 py-2 text-center ${activeTab === "Team" ? "border-b-2 border-purple-700 text-black font-medium" : "text-gray-600"}`}
            onClick={() => setActiveTab("Team")}
          >
            Team
          </button>
        </div>
      </div>

      <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className="p-4 hover:bg-gray-50 cursor-pointer"
            onClick={() => onSelectCandidate(candidate)}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img
                  src={candidate.avatar || "/placeholder.svg"}
                  alt={candidate.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{candidate.name}</h3>
                  {candidate.time && <span className="text-xs text-gray-500">{candidate.time}</span>}
                </div>
                <p className="text-sm text-gray-500 truncate flex items-center">
                  {candidate.isPinned && (
                    <img src={pin || "/placeholder.svg"} alt="Pinned" className="inline mr-1 w-3 h-3" />
                  )}
                  {candidate.lastMessage}
                  {candidate.messageStatus === "read" && (
                    <img src={coloureddoubletick || "/placeholder.svg"} alt="Read" className="ml-1 w-3 h-3" />
                  )}
                  {candidate.messageStatus === "sent" && (
                    <img src={onemessage || "/placeholder.svg"} alt="Sent" className="ml-1 w-3 h-3" />
                  )}
                </p>
              </div>
              {candidate.status === "star-orange" && (
                <div className="ml-2 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#f97316" stroke="#f97316">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              )}
              {candidate.status === "star-purple" && (
                <div className="ml-2 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#7e22ce" stroke="#7e22ce">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              )}
              {candidate.status === "check" && (
                <div className="ml-2 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const candidates = [
  {
    id: "1",
    name: "Osman Campos",
    avatar: osman,
    lastMessage: "You: Hey! We are read...",
    time: "5m",
    status: "star-purple",
    isPinned: true,
    messageStatus: "read",
  },
  {
    id: "2",
    name: "Conner Gracia",
    avatar: conner,
    lastMessage: "And send me the Portfolio...",
    time: "10m",
    status: "star-orange",
  },
  {
    id: "3",
    name: "Jacob Mcleod",
    avatar: jacob,
    lastMessage: "You: Ok! Let's Discuss it on th...",
    time: "45m",
    status: "check",
    messageStatus: "read",
  },
  {
    id: "4",
    name: "Jasmin Lowery",
    avatar: jasmin,
    lastMessage: "And send me the Portfolio...",
    time: "10m",
    status: "star-orange",
  },
  {
    id: "5",
    name: "Anthony",
    avatar: Anthony,
    lastMessage: "You: Hey! We are read...",
    time: "6m",
    status: "star-purple",
    messageStatus: "sent",
  },
  {
    id: "6",
    name: "Osman Campos",
    avatar: osman,
    lastMessage: "You: Hey! We are read...",
    time: "5m",
    status: "star-purple",
    messageStatus: "read",
  },
  {
    id: "7",
    name: "Jasmin Lowery",
    avatar: jasmin,
    lastMessage: "And send me the Portfolio...",
    time: "10m",
    status: "star-orange",
  },
  {
    id: "8",
    name: "Vanessa Cox",
    avatar: vanessa,
    lastMessage: "Voice message",
    time: "2d",
    status: "check",
  },
  {
    id: "9",
    name: "Jacob Mcleod",
    avatar: jacob,
    lastMessage: "You: Ok! Let's Discuss it on th...",
    time: "45m",
    status: "check",
    messageStatus: "read",
  },
  {
    id: "10",
    name: "Anthony",
    avatar: Anthony,
    lastMessage: "You: Hey! We are read...",
    time: "6m",
    status: "star-purple",
    messageStatus: "sent",
  },
  {
    id: "11",
    name: "Vanessa Cox",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Voice message",
    time: "2d",
    status: "check",
  },
]

export default CandidateList

