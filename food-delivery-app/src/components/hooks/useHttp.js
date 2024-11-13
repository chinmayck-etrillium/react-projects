import { useEffect, useState } from "react";

async function fetchUrl(url, config) {
  try {
    const response = await fetch(url, config);
    return response;
  } catch (error) {
    console.log("Error: ", error);
  }
}

export default function useHttp(url, config) {
  const [results, setResults] = useState([]);

  async function fetchData() {
    const response = await fetchUrl(url, config);

    const toJson = await response.json();
    setResults(toJson);
  }

  useEffect(() => {
    if (!config || config.method === "GET") {
      fetchData();
    }
  }, [url]);

  const response = { results: results, fetchData };

  return response;
}
