import { useEffect, useState } from "react";
import WarningList from "@/components/WarningList";
import axios from "axios";
import { loginWithDiscord } from "@/utils/api"; // Make sure this path is correct

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

      {/* Discord Login Button */}
      <button
        onClick={loginWithDiscord}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 mb-6"
      >
        Login with Discord
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <WarningList warnings={warnings} />
      )}
    </div>
  );
        }
