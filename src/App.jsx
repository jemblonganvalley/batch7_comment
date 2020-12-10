import "./App.css";
import Card from "./components/card/Card";
import { useEffect, useState } from "react";
import Home from "./components/home/Home";

function App() {
  //Buat penampung data dengan State
  const [comment, setComment] = useState();

  //LIFE CYCLE
  useEffect(() => {
    //kita buat ketika load mengambil data dari api
    fetch("https://1d34e61ddd7b.ngrok.io/contact", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //kita simpan hasil fetch ke dalam comment
        setComment(data);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="head_title">Jvalley comment</h1>
      {console.log(comment)}
    </div>
  );
}

export default App;
