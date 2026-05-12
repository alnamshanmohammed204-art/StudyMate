import { useState } from "react";

function Journal() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState("");

  const addEntry = () => {
    if (newEntry) {
      const entry = {
        text: newEntry,
        date: new Date().toLocaleString(),
      };
      setEntries([...entries, entry]);
      setNewEntry("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Journal</h2>
      <input
        type="text"
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
        placeholder="Write your thoughts..."
        className="w-full p-2 mb-4 border rounded-md"
      />
      <button
        onClick={addEntry}
        className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
      >
        Add Entry
      </button>

      <ul className="mt-4 space-y-2">
        {entries.map((entry, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded-md">
            <p className="text-gray-800">{entry.text}</p>
            <span className="text-gray-500 text-sm">{entry.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Journal;