import React from "react";
import comments from "./comments";
import List from "./ListItem";

function App() {
 
  return (
    // <section className="movie-content">
    //   {data.map((eachObj) => {
    //     const { id, url, thumbnailUrl, title } = eachObj;
    //     return <Profile  key ={id} id={id} thumbnailUrl={thumbnailUrl} title ={title} url={url}/>;
    //   })}
    // </section>

    //comment data rendering
    <main className="container">
      <ul className="comments-container">
        {comments.map((eachComment) => {

          return <List key ={ eachComment.id} email={eachComment.email} name={eachComment.name} body={eachComment.body}/>;
        })}
      </ul>
    </main>
   
  );
}

export default App;
