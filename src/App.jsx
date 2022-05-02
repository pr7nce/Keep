import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./notes";
function MakeNotes(prop){
  return <Note key={prop.key} title={prop.title} content={prop.content} />;
}
function App(){
  return <div>
  <Heading />
  {notes.map(prop => <Note key={prop.key} title={prop.title} content={prop.content} />)}
  <Footer />
  </div>
}
export default App;
