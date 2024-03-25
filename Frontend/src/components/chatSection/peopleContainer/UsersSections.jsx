import React from "react";
import { image } from "../../../assets/Images/Image";
import { doubleTick, singleTick } from "../../ConstantComponents/IconConstants";

const UsersSections = () => {
  return (
    <div className="group-chat-container shadow-md">
      <header className="font-bold text-xl">People</header>
      <div className="chats flex flex-col">
        <div className="chat border-b">
          <div className="profile-img">
            <img src={image.profile1} />
          </div>
          <div className="msg-container">
            <div className="chat-name text-base font-medium">Amit Jain</div>
            <div className="last-msg text-sm font-light">How are you?</div>
          </div>
          <div className="status-container">
            <div className="last-seen">Today, 9.52pm</div>
            <div className="status text-center">
              <span className="unseen-msg-number">4</span>
            </div>
          </div>
        </div>
        <div className="chat border-b">
          <div className="profile-img">
            <img src={image.profile1} />
          </div>
          <div className="msg-container">
            <div className="chat-name text-base font-medium">Amit Jain</div>
            <div className="last-msg text-sm font-light">How are you?</div>
          </div>
          <div className="status-container">
            <div className="last-seen">Today, 9.52pm</div>
            <div className="status text-center">
              <span className="check">{singleTick()}</span>
            </div>
          </div>
        </div>
        <div className="chat border-b">
          <div className="profile-img">
            <img src={image.profile1} />
          </div>
          <div className="msg-container">
            <div className="chat-name text-base font-medium">Amit Jain</div>
            <div className="last-msg text-sm font-light">How are you?</div>
          </div>
          <div className="status-container">
            <div className="last-seen">Today, 9.52pm</div>
            <div className="status text-center">
              <span className="check">{doubleTick()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersSections;
