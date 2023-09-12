"use client";

import { useContext, useEffect } from "react";
import { ImgSessionContext } from "./ClientLayout";

const ProfilePic = () => {
  const imgSession = useContext(ImgSessionContext);

  useEffect(() => {
    console.log("imgSession", imgSession);
    return () => {};
  }, []);

  return (
    <div className="mx-4 h-14 w-14 rounded-full">
      <img src="https://storage.googleapis.com/imgfunnels.com/assets/robot-transparent-cropped-386.png" />
    </div>
  );
};

export default ProfilePic;
