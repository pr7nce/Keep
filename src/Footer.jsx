import React from "react";
var day= new Date();
var time = day.getFullYear();
function Footer(){
  return <footer><p>Copyright {time}</p></footer>;
}
export default Footer;
