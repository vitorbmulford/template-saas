import Cta from "./components/Cta/page";
import Features from "./components/Features/page";
import Hero from "./components/Hero/page";
import Testimonials from "./components/Testimonials/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-800/15 via-purple-700/15 to-pink-600/15 opacity-40 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-indigo-700 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-pink-600 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[150px] h-[150px] bg-purple-500 rounded-full blur-3xl opacity-15 pointer-events-none" />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <Cta />

    </div>
  );
}