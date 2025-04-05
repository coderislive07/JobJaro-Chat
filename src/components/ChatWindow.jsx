
import React, { useState } from "react"
import { Paperclip, Mic, Send } from "lucide-react"

// Import images
import osman from "../assets/Osman.png"
import playbutton from "../assets/playbutton.png"
import onemessage from "../assets/onemessage.png"
import coloureddoubletick from "../assets/coloureddoubletick.png"
import conner from "../assets/Conner.png"
import Anthony from "../assets/Anthony.png"
import profile from "../assets/profile.png"
import voicelayer from "../assets/voicelayer.png"
import sharedimage from "../assets/sharedimage.png"

const ChatWindow = ({ selectedCandidate }) => {
  const [messageInput, setMessageInput] = useState("")

  if (!selectedCandidate) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">Select a candidate to start chatting</div>
    )
  }

  return (
<div className="flex-1 flex flex-col h-[90vh] border border-[#D9D9D9] bg-gray-50 shadow-lg rounded-2xl mx-4 mb-32  overflow-hidden">



      {/* Header */}
      <div className="p-4 flex justify-between items-center bg-white">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
            <img
              src={selectedCandidate.avatar || "/placeholder.svg"}
              alt={selectedCandidate.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-medium">{selectedCandidate.name}</h2>
            <p className="text-sm text-gray-500">• Applied for UI/UX designer Profile</p>
          </div>
        </div>
        <button className="text-purple-700 text-sm font-medium">View Full Profile</button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`${message.sender === "me" ? "flex justify-end" : ""}`}>
            {message.sender !== "me" && message.avatar && (
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                <img
                  src={message.avatar || "/placeholder.svg"}
                  alt={message.senderName}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div
              className={`max-w-[70%] ${
                message.sender === "me"
                  ? "bg-purple-700 text-white rounded-2xl p-3 rounded-br-none"
                  : "bg-white rounded-2xl p-3 shadow-sm"
              }`}
            >
              {message.content && <div>{message.content}</div>}
              {message.reactions && (
                <div className="flex mt-1">
                  {message.reactions.map((reaction, index) => (
                    <div key={index} className="flex items-center mr-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                      <span className="mr-1">{reaction.emoji}</span>
                      <span>{reaction.count}</span>
                    </div>
                  ))}
                </div>
              )}
              {message.image && (
                <div className="mt-2">
                  <img src={message.image || "/placeholder.svg"} alt="Shared image" className="rounded-lg max-w-full" />
                </div>
              )}
              {message.audio && (
                <div className="mt-2 flex items-center">
                  <button className="w-12 h-12 mt-8 bg-purple-700 rounded-full flex items-center justify-center text-white">
                    <img src={playbutton || "/placeholder.svg"} alt="Play"  />
                  </button>
                  <div className="ml-2 flex-1">
                    <div className="w-full h-3">
                     <img className="w-44  h-12" src={voicelayer}></img>
                    </div>
                  </div>
                </div>
              )}
              <div className="text-xs text-right mt-1 opacity-70 flex justify-end items-center">
                {message.time}
                {message.sender === "me" && message.status === "read" && (
                  <img src={coloureddoubletick || "/placeholder.svg"} alt="Read" className="ml-1 w-3 h-3" />
                )}
                {message.sender === "me" && message.status === "sent" && (
                  <img src={onemessage || "/placeholder.svg"} alt="Sent" className="ml-1 w-3 h-3" />
                )}
              </div>
            </div>

            {message.sender === "me" && (
              <div className="w-8 h-8 rounded-full overflow-hidden ml-2 flex-shrink-0">
                <img src={profile || "/placeholder.svg"} alt="Me" className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 bg-white">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <button className="text-gray-500 mr-2">
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            placeholder="Your message"
            className="flex-1 bg-transparent outline-none"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button className="text-gray-500 mx-2">
            <Mic size={20} />
          </button>
          <button className="text-gray-500">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

const messages = [
  {
    id: "1",
    sender: "Conner Gracia",
    senderName: "Conner Gracia",
    content: "I added new flows to our design system. Now you can use for your projects!",
    time: "09:20",
    avatar: conner,
    reactions: [{ emoji: "👍", count: 4 }],
  },
  {
    id: "2",
    sender: "Anthony",
    senderName: "Anthony",
    content: "Hey guy's! Important news!",
    time: "09:24",
    avatar: Anthony,
  },
  {
    id: "3",
    sender: "Anthony",
    senderName: "Anthony",
    content: "Our intern @jchurch has successfully completed his probationary period and is now part of our team!",
    time: "09:24",
    avatar: Anthony,
    reactions: [
      { emoji: "👍", count: 5 },
      { emoji: "👏", count: 4 },
    ],
  },
  {
    id: "4",
    sender: "me",
    content: "Joden, my congratulations! I will be glad to work with you on new project 😊",
    time: "09:27",
    status: "read",
  },
  {
    id: "5",
    sender: "Osman Campos",
    senderName: "Osman Campos",
    content: "",
    time: "09:24",
    avatar: osman,
    audio: true,
    image: sharedimage,
  },
]

export default ChatWindow

