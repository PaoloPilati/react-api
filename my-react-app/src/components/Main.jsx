import { useState, useEffect } from "react";
import axios from "axios";
import ActressCard from "./ActressCard";

const actressesUrl = "https://lanciweb.github.io/demo/api/actresses/";

function Main() {
  const [actresses, setActresses] = useState([]);

  // funzione per fare fetch
  const getActresses = () => {
    axios.get(actressesUrl)
      .then((response) => {
        console.log("Dati API:", response.data);
        setActresses(response.data);
      })
      .catch((error) => {
        console.error("Errore nella fetch:", error);
      });
  }

  // useEffect per chiamare la fetch al mount
  useEffect(() => {
    getActresses();
  }, []); // [] → esegue solo al primo rendering

  return (
    <main className="container my-5">
      <div className="row">
        {actresses.map((actress) => (
          <ActressCard
            key={actress.id}
            actress={actress}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;