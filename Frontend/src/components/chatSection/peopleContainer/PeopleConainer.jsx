import React from "react";
import Groupchats from "./Groupchats";
import SearchUser from "./SearchUser";
import UsersSections from "./UsersSections";

const PeopleConainer = () => {
  return (
    <>
      <SearchUser />
      <Groupchats />
      <UsersSections />
    </>
  );
};

export default PeopleConainer;
