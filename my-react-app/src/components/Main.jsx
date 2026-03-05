import { useState, useEffect } from "react"
import axios from "axios"
import ActressCard from "./components/ActressCard"

function Main() {

  const [actresses, setActresses] = useState([])

  useEffect(() => {

    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => {
        console.log(response.data)
        setActresses(response.data)
      })

  }, [])

  return (
    <main>

      {actresses.map((actress, index) => (
        <ActressCard
          key={index}
          actress={actress}
        />
      ))}

    </main>
  )
}

export default Main