"use client";

export default function WhatsAppButton() {
  return (
    <button
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 group"
      type="button"
    >
      <svg className="lucide lucide-message-circle text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
      <span className="absolute right-16 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        WhatsApp Chat
      </span>
    </button>
  );
}
