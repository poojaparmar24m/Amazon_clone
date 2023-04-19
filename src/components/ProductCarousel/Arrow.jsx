import React from "react";

export function NextArrow(props) {
  return (
    <>
      <div
        className={props.className}
        onClick={props.onClick}
        style={{
          paddingLeft: "80px",
          paddingRight: "80px",
          zIndex: "4",
          textAlign: "center",
          fontSize: "30px",
        }}
      ></div>
    </>
  );
}

export function PrevArrow(props) {
  return (
    <>
      <div
        className={props.className}
        onClick={props.onClick}
        style={{
          paddingLeft: "60px",
          paddingRight: "60px",
          zIndex: "4",
          textAlign: "center",
          fontSize: "30px",
        }}
      ></div>
    </>
  );
}
