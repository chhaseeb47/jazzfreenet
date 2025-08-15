<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Popup Example</title>
  <style>
    /* Popup box style */
    #popup {
      display: none; /* Hidden by default */
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #333;
      color: white;
      padding: 15px 25px;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      z-index: 1000;
      font-size: 16px;
    }
  </style>
</head>
<body>

  <!-- Popup -->
  <div id="popup">Yeh aik popup message hai!</div>

  <script>
    // Show popup after 3 seconds
    window.onload = function() {
      setTimeout(function() {
        var popup = document.getElementById("popup");
        popup.style.display = "block";

        // Hide popup after 3 seconds
        setTimeout(function() {
          popup.style.display = "none";
        }, 3000);
      }, 3000);
    }
  </script>

</body>
</html>



import React from 'react';
import { MessageCircle, Instagram, Youtube, Send } from 'lucide-react';

function App() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923407472645', '_blank');
  };

  const handleDeveloperClick = () => {
    window.open('https://wa.me/923407472645', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-x-hidden">
      {/* Main Content */}
      <div className="relative z-10 px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Profile Picture */}
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg">
              <img 
                src="https://i.ibb.co/wFNwyBJk/60479fc4e17784c9.jpg" 
                alt="Hasi Profile" 
                className="w-full h-full rounded-full object-cover border-2 border-white shadow-md"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
             Hasi Free Data 
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Buttons */}
        <div className="max-w-md mx-auto space-y-6 mb-12">
          <button
            onClick={() => window.open('https://whatsapp.com/channel/0029VaHI7LsFnSz1irwgsL1z', '_blank')}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
            📱 Jazz 100 GB DATA FREE 📱
          </button>
          
          <button
            onClick={() => window.open('https://whatsapp.com/channel/0029VaHI7LsFnSz1irwgsL1z', '_blank')}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
            📡 Zong / Telenor / Ufone 📡
          </button>
          
          <button
            onClick={() => window.open('https://whatsapp.com/channel/0029VaHI7LsFnSz1irwgsL1z', '_blank')}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
            💫 FOR OTHER SIM FOLLOW 💫
          </button>
        </div>

        {/* Scrolling Text */}
        <div className="relative overflow-hidden bg-white/20 backdrop-blur-sm rounded-lg py-3 mb-12">
          <div className="animate-scroll whitespace-nowrap">
            <span className="text-white font-semibold text-lg px-4">
              📱 Ufone Jazz, Telenor ka Free Package ka liay WhatsApp Channel ko Visit karky Follow karlo 📱
            </span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="max-w-md mx-auto mb-12">
          <h3 className="text-white text-xl font-bold text-center mb-6">Follow Us On Social Media</h3>
          <div className="flex justify-center space-x-8">
            <button 
              onClick={() => window.open('https://www.instagram.com/innocent_hasi47/', '_blank')}
              className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              <Instagram className="w-6 h-6 text-white" />
            </button>
            <button 
              onClick={() => window.open('https://youtube.com/@mhmodsofc?si=0-iCuV_GxDaZX2qv', '_blank')}
              className="bg-red-600 hover:bg-red-700 p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              <Youtube className="w-6 h-6 text-white" />
            </button>
            <button 
              onClick={() => window.open('https://t.me/@MHMODSOFC', '_blank')}
              className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
            >
              <Send className="w-6 h-6 text-white" />
            </button>
          </div>
          <p className="text-white/80 text-sm text-center mt-4">
            Instagram • YouTube • Telegram
          </p>
        </div>

        {/* Developer Credit */}
        <div className="text-center">
          <button
            onClick={handleDeveloperClick}
            className="text-white/90 hover:text-white text-sm font-medium hover:underline transition-all duration-300"
          >
            Developed by Haseeb Rashid
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 z-50 animate-bounce"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </button>

      {/* Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
