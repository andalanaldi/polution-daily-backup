// Replace the URL with your actual API endpoint
const apiUrl = "http://api.airvisual.com/v2/city?city=Bandung&state=West Java&country=Indonesia&key=b2a488ac-15f3-4f22-970d-a3430b2ef991";

// Make the API request using the Fetch API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Extract the desired data
    const ts = data.data.current.pollution.ts;
    const aqius = data.data.current.pollution.aqius;

    // Log the results
    console.log("Timestamp (ts):", ts);
    console.log("AQI US (aqius):", aqius);
  })
  .catch(error => console.error("Error fetching data:", error));
