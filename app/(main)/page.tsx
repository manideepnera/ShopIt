import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-4 bg-white dark:bg-black sm:items-start">
        <h4 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
          Welcome to <span className="font-lusitana">Shopit</span>!
        </h4>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 sm:text-xl">
          Your One-Stop Online Shop for Everything You Need.
        </p>
      </main>
    </div>
  );
}
