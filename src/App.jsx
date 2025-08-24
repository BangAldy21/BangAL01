import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import ChatRoom from "./components/ChatRoom";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <main className="px-6">
        <ProfileCard />
        <ChatRoom />
      </main>
      <Footer />
    </div>
  );
}

export default App;