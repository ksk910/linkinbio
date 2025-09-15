export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-4">ImpLink（Link in Bio）へようこそ！</h1>
      <p className="mb-2 text-lg">あなたのSNSやWebサイトのリンクをまとめて公開できます。</p>
      <p className="mb-6">新規登録・ログインしてご利用ください。</p>
      <div className="flex gap-4">
        <a href="/register" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">新規登録</a>
        <a href="/login" className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">ログイン</a>
      </div>
    </main>
  );
}