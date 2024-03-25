import React from "react";
import ChatsContainer from "./ChatsContainer";
import Navbar from "./Navbar";
import PeopleConainer from "./peopleContainer/PeopleConainer";

const ChatSectionWrapper = () => {
  return (
    <>
      <div className="chat-section-wrapper flex gap-10 font-sans">
        <Navbar />
        <div className="usersection w-1/3">
          <PeopleConainer />
        </div>
        <div className="w-full">
          <ChatsContainer />
        </div>
      </div>
    </>
  );
};

export default ChatSectionWrapper;
