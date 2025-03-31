"use client";
import { useState } from "react";


export default function RoomChat() {
  const [message, setMessage] = useState("");


  return (
    <>
      <div className="doodle-big-border">
        <div className="h-[250px] overflow-y-auto">
          <p>
            <span className="font-bold">player name: </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, fugit! Magni, hic, beatae a esse
          </p>

          <p>
            <span className="font-bold">player name: </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, fugit! Magni, hic, beatae a esse
          </p>

          <p>
            <span className="font-bold">player name: </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, fugit! Magni, hic, beatae a esse
          </p>


          <p>
            <span className="font-bold">player name: </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, fugit! Magni, hic, beatae a esse
          </p>
        </div>

        <div className="relative w-full">
          <input
            type="text"
            name="chat-message"
            className="doodle-border w-full pr-12"
            placeholder="Type Here..."
            value={message}
            onChange={(e) => {
              if (e.target.value.length <= 100) {
                setMessage(e.target.value);
              }
            }}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">
            {message.length}/100
          </span>
        </div>
      </div>
    </>
  );
}