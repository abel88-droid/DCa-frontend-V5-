// pages/index.tsx
import { useEffect, useState } from "react";
import WarningList from "@/components/WarningList";
import axios from "axios";

export default function Home() {
  const [warnings, setWarnings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://your-backend-url.com/warnings")
      .then((res) => setWarnings(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []); 

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Warning Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <WarningList warnings={warnings} />
      )}
    </div>
  );
      }
