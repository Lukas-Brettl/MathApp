import { useState, useEffect } from "react";

export default function Explain({ data, indexExplain, next }) {
  const [result, setResult] = useState(null)

  useEffect(() => {
    const entries = Object.entries(data.obsah["Explain"])
    for (let [key, value] of entries) {
      if (key == indexExplain) {
        setResult(value)
        break
      }
    }
  }, [indexExplain, data.obsah])

 
  return (
    <div>
      <div>{result}</div>
      <button onClick={() => next(indexExplain + 2)}>Další</button>
    </div>
  );
}
