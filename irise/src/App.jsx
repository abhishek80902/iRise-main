import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppChatButton from "./components/WhatsAppChatButton";

import Home from "./pages/Home";
import BookCallPage from "./pages/BookCallPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#050814] text-white overflow-x-hidden">

        {/* GLOBAL HEADER */}
        <Header />

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-call" element={<BookCallPage />} />
        </Routes>

        {/* GLOBAL FOOTER */}
        <Footer />

        {/* FLOATING WHATSAPP */}
        <WhatsAppChatButton />
      </div>
    </BrowserRouter>
  );
}
