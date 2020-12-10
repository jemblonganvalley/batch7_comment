import "./App.css";
import Card from "./components/card/Card";
import { useEffect, useState } from "react";

function App() {
  //Buat penampung data dengan State
  const [comment, setComment] = useState();

  //kita buat ketika load mengambil data dari api
  useEffect(() => {
    fetch("https://d307e246c9f1.ngrok.io/contact", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setComment(data);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="head_title">Jvalley comment</h1>

      {/* KITA BUAT CONDITIONAL RENDERING */}
      {comment ? (
        <>
          {comment.map((e) => {
            return <Card from={e.from} message={e.message} date={e.date} />;
          })}
        </>
      ) : (
        <small>W a i t . . </small>
      )}
    </div>
  );
}

export default App;
