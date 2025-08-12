"use client";

import { useEffect, useState } from "react";
import MessageCard from "@/components/MessageCard";

export default function AdminPage() {
  const [messages, setMessages] = useState([]);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const fetchMessages = async () => {
    const res = await fetch("/api/messages");
    if (res.ok) {
      const data = await res.json();
      setMessages(data);
    }
  };

  const updateMessage = async (id, replied) => {
    await fetch(`/api/messages/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ replied }),
    });
    fetchMessages();
  };

  const deleteMessage = async (id) => {
    await fetch(`/api/messages/${id}`, { method: "DELETE" });
    fetchMessages();
  };

  useEffect(() => {
    if (authenticated) fetchMessages();
  }, [authenticated]);

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({password}),
    })
    if (res.ok) {
      setAuthenticated(true);
    } else {
      alert("Wrong password");
    }
  };

  if (!authenticated) {
    return (
      <div className="login-box"style={{ padding: "20px" }}>
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Messages</h2>
      {messages.map((msg) => (
        <MessageCard
          key={msg._id}
          message={msg}
          onUpdate={updateMessage}
          onDelete={deleteMessage}
        />
      ))}
    </div>
  );
}
