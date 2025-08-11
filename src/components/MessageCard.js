"use client";
export default function MessageCard({ message, onUpdate, onDelete }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
      <h4>{message.subject}</h4>
      <p><b>Name:</b> {message.name}</p>
      <p><b>Email:</b> {message.email}</p>
      <p>{message.message}</p>
      <p>Status: {message.replied ? "✅ Replied" : "❌ Not Replied"}</p>

      <button onClick={() => onUpdate(message._id, !message.replied)}>
        Mark as {message.replied ? "Not Replied" : "Replied"}
      </button>
      <button onClick={() => onDelete(message._id)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
}
