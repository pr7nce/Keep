import React from "react";
var title="Title";
var cont="Conent";
function Note(prop){
  return <div className="note">
  <h1>{prop.title}</h1>
  <p>{prop.content}</p>
  </div>
};

export default Note;
