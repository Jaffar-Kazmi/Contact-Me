"use client";

export default function MessageCard({ message, onUpdate, onDelete }) {
  return (
    <div className={`message-card ${message.replied ? "replied" : ""}`}>
      <h3>{message.subject}</h3>
      <p><strong>From:</strong> {message.name} ({message.email})</p>
      <p>{message.message}</p>

      <div className="message-card-buttons">
        <button
          type="button"
          className="btn-reply-toggle"
          onClick={() => onUpdate(message._id, !message.replied)}
        >
          {message.replied ? "Mark Unreplied" : "Mark Replied"}
        </button>

        <button
          type="button"
          className="btn-delete"
          onClick={() => onDelete(message._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
