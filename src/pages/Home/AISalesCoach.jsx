import React, { useState } from "react";
import { BsFillChatLeftTextFill, BsClipboardCheckFill } from "react-icons/bs";
import { RefreshCcw, ThumbsUp, ThumbsDown, Trash2, Volume2 } from 'lucide-react';
import check_circle from '../../assets/check_circle.png'

const AISalesCoach = () => {
  const [messages, setMessages] = useState([
    {
      from: "coach",
      text: "Hello! I’m your AI sales coach. How can I help you improve your sales performance today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white  lg:pl-14">
      <div className="min-h-screen  md:px-10 px-6 lg:px-24 py-10 max-w-screen-xl mx-auto w-full">
        {/* Heading */}
        <div className="mb-10">
          <h4 className="font-questrial text-xl md:text-2xl mb-2">Live AI Coach</h4>
          <h2 className="font-questrial text-3xl md:text-5xl lg:text-6xl font-semibold leading-snug">
            Take a Suggestion Coaching
          </h2>
        </div>

        {/* Main Grid */}
        <div className="  grid grid-cols-1 lg:grid-cols-3 gap-24">
          {/* Chat Area */}
          <div className="relative  lg:col-span-2 bg-white rounded-xl p-4 text-black flex flex-col h-[500px]">
            <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-md max-w-[80%] text-sm ${msg.from === "coach"
                    ? "bg-gray-100 text-left"
                    : "bg-blue-100 text-right ml-auto"
                    }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Suggested Buttons */}
            <div className="flex flex-wrap gap-2 mb-4 text-xs">
              <button className="bg-gray-100 px-3 py-1 rounded">How do I handle objections?</button>
              <button className="bg-green-100 px-3 py-1 rounded">AI Confidence Feedback</button>
              <button className="bg-gray-100 px-3 py-1 rounded">Closing Techniques</button>
              <button className="bg-gray-100 px-3 py-1 rounded">Negotiation Tips</button>
            </div>

            {/* Input Box */}
            <div className="flex w-full border-t pt-3">
              <input
                className="flex-1 border rounded-l px-4 py-2 text-sm bg-white"
                type="text"
                placeholder="Ask anything you need"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="bg-blue-900 text-white px-2 lg:px-5 rounded-r text-sm "
              >
                Send
              </button>
            </div>
            {/* Toolbar */}

            <div className=" absolute h-fit top-1/2 -translate-y-1/2 justify-center items-center rounded-xl py-6 right-0 lg:-right-14  w-10 bg-[#f2f2f2] flex flex-col gap-4 shadow-md">
              <button className="hover:text-blue-500">
                <RefreshCcw size={20} />
              </button>
              <button className="hover:text-blue-500">
                <ThumbsUp size={20} />
              </button>
              <button className="hover:text-blue-500">
                <ThumbsDown size={20} />
              </button>
              <button className="hover:text-red-500">
                <Trash2 size={20} />
              </button>
              <button className="hover:text-blue-500">
                <Volume2 size={20} />
              </button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-6 w-full ">
            {/* Real-time Analysis */}
            <div className="space-y-4 bg-gray-100 p-4 rounded-md">
              <h2 className="text-lg font-semibold text-gray-800">Real-time Analysis</h2>

              {/* Confidence Level with Progress */}
              <div className="bg-white rounded-lg p-4 space-y-2 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={check_circle} alt="" className="w-5 h-5" />
                    <p className="text-sm font-medium text-gray-800">Confidence Level</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-full h-2 bg-gray-200 rounded-full relative">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-sm text-gray-700">60%</span>
                </div>
              </div>



              {/* Text-Based Improvement Box */}
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 8L13 13L9 9L3 15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-sm font-medium text-gray-800">Confidence Level</p>
                </div>
                <p className="text-sm text-gray-600">85% improvement in objection handling</p>
              </div>
            </div>


            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-4 text-black w-full">
              <h3 className="font-questrial font-semibold mb-3 text-lg">Quick Actions</h3>
              <div className="space-y-2 text-sm">
                <button className="font-questrial w-full bg-gray-100 py-2 rounded flex items-center justify-center gap-2">
                  <BsClipboardCheckFill size={18} />
                  Generate Script
                </button>
                <button className="font-questrial w-full bg-gray-100 py-2 rounded flex items-center justify-center gap-2">
                  <BsFillChatLeftTextFill size={18} />
                  Practice Pitch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISalesCoach;
