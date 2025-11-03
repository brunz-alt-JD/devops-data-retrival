import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const res = await fetch("http://localhost:8000/data");
    const json = await res.json();
    setData(json);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Data Retrieval Dashboard</h1>
      <button onClick={fetchData}>
        Fetch Data
      </button>

      {data && (
        <pre style={{ marginTop: "20px", background: "#eee", padding: "10px" }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
