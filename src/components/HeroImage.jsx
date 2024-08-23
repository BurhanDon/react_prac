import React from "react";

const HeroImage = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url('https://img.freepik.com/free-photo/mountains-decoration-forest-reflection-form-blue-sky-white-clouds_1417-1035.jpg?t=st=1724355287~exp=1724358887~hmac=0b766dcffa98f8028654b6de3ac6be4c65e13d984c5137886762e987c13748ad&w=996')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
      }}
    />
  );
};

export default HeroImage;
