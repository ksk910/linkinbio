"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage("ログイン成功！");
      // TODO: トークン保存やリダイレクト処理
    } else {
      setMessage(data.error || "ログインに失敗しました");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h2 className="text-2xl font-bold mb-4">ログイン</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="border rounded px-3 py-2"
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="border rounded px-3 py-2"
        />
        <button type="submit" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">ログイン</button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </main>
  );
}
