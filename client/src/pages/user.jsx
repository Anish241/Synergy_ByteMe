import React from "react";
import Usercard from "../components/user/userCard";
import DetailCard from "../components/user/userDetailCard";

export default function User() {
  return (
    <>
      <div id="usercards" className="backgroundcol-black coverfullscreen grid grid-cols-1 md:grid-cols-2">
        <div>
          <Usercard />
        </div>
        <div>
          <DetailCard />
        </div>
      </div>
      <div id="usertable">
      </div>
    </>
  );
}
