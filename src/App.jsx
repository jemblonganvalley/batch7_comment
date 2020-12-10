import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [dataCard, setDataCard] = useState([
    {
      id: 1,
      title: "fadliselaz",
      body: "selamat siang teman teman",
    },
    {
      id: 2,
      title: "ajot",
      body: "selamat siang teman teman",
    },
    {
      id: 3,
      title: "uta",
      body: "selamat siang teman teman",
    },
    {
      id: 4,
      title: "fathur",
      body: "selamat siang teman teman",
    },
  ]);

  return (
    <div className="App">
      <h1>hello</h1>

      <section
        className="card_container"
        style={{
          width: "100%",
          height: "auto",
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        {dataCard.filter(e => e.title === "fadliselaz")}

      </section>
    </div>
  );
}

export default App;
