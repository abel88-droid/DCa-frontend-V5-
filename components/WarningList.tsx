// components/WarningList.tsx
interface Warning {
  id: number;
  user_id: string;
  guild_id: string;
  reason?: string;
}

export default function WarningList({ warnings }: { warnings: Warning[] }) {
  if (!warnings.length) return <p>No warnings found.</p>;

  return (
    <div className="space-y-4">
      {warnings.map((w) => (
        <div
          key={w.id}
          className="border p-4 rounded-lg shadow-md bg-white"
        >
          <p><strong>User ID:</strong> {w.user_id}</p>
          <p><strong>Guild ID:</strong> {w.guild_id}</p>
          <p><strong>Reason:</strong> {w.reason || "No reason provided"}</p>
        </div>
      ))}
    </div>
  );
}
