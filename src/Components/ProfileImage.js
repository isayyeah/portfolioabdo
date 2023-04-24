
import React from "react";
import photo from"../assets/profile.png";

function ProfileImage() {
  return (
    <div className="text-center mb-4">
      <img
        src={photo} 
        alt="photo"
        className="rounded-circle profile-img"
      />
    </div>
  );
}

export default ProfileImage;