import { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "app-id": process.env.NEXT_PUBLIC_APP_ID,
          },
        });
        const result = await response.json();
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Veri Listesi</h1>
      {data ? (
        <ul>
          {data.map((item) => (
            <div key={item?.id}>
              <p>{item?.name}</p>
            </div> // Örnek olarak 'name' özelliğini kullanıyorum
          ))}
        </ul>
      ) : (
        <p>Veri yükleniyor...</p>
      )}
    </div>
  );
}

export default MyComponent;
