import { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { IoClose, IoSend } from "react-icons/io5";
import { IoChatbubbleEllipses } from "react-icons/io5";
import ProfileImage from "../assets/images/gallery/profile.png";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");

const SYSTEM_CONTEXT = `Act as Raymund's digital twin. Respond exactly how he thinks and communicates.

Profile:
- CS graduate from PHINMA UPang College of Urdaneta (2022-2026)
- Skills: Laravel, PHP, CakePHP, JavaScript, AngularJS, HTML/CSS, Tailwind CSS, MySQL, Kotlin, Firebase, Git, GitHub, Figma, Android Studio
- OJT at DSWD: built a real-time Excel data sync system
- Data Entry at Alchemy RPG
- Thesis: PUCU Library Management System (Best in Software Development) - Laravel, Kotlin, Firebase, RFID
- Personality: calm, practical, direct, humble, friendly, curious

Rules:
- Answer ONLY what was asked. No extra info.
- Max 2-3 sentences per reply
- Sound natural and human, not robotic
- Never use bullet points in casual replies
- Only discuss Raymund's skills, projects, and experience
- If off-topic, briefly redirect back`;

interface Message {
  role: "user" | "model";
  text: string;
}

const GREETING = "Hi there! 👋🏻 Thanks for visiting my website. Feel free to ask me anything about programming, web development, or my experiences in tech. Let me know how I can help!";

const SUGGESTIONS = [
  "What are your skills?",
  "Tell me about your projects",
  "What is your experience?",
];

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text?: string) => {
    const userMessage = (text ?? input).trim();
    if (!userMessage || loading) return;

    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      setInput("");
      setMessages((prev) => [
        ...prev,
        { role: "user", text: userMessage },
        {
          role: "model",
          text: "Gemini API key is not configured. Please add VITE_GEMINI_API_KEY to your .env file.",
        },
      ]);
      return;
    }

    setInput("");
    const newMessages: Message[] = [...messages, { role: "user", text: userMessage }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: SYSTEM_CONTEXT,
      });

      const contents = [
        ...messages.map((m) => ({
          role: m.role,
          parts: [{ text: m.text }],
        })),
        {
          role: "user",
          parts: [{ text: userMessage }],
        },
      ];

      const result = await model.generateContent({ contents });
      const reply = result.response.text() ?? "No response.";
      setMessages((prev) => [...prev, { role: "model", text: reply }]);
    } catch (error) {
      console.error("Gemini API error:", error);
      setMessages((prev) => [...prev, { role: "model", text: "I'm having trouble connecting right now. Please try again in a moment." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="relative flex items-center gap-2 px-4 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-xl hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
          aria-label="Toggle Chatbot"
        >
          {open ? (
            <>
              <IoClose className="w-5 h-5" />
              <span className="text-sm font-medium">Close</span>
            </>
          ) : (
            <>
              <IoChatbubbleEllipses className="w-4 h-4 animate-bounce" />
              <span className="text-sm font-medium">Chat with Ray</span>
            </>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[540px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl flex flex-col animate-fade-slide-up overflow-hidden">

          {/* Header */}
          <div className="px-4 py-3 flex items-center gap-3 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="relative shrink-0">
              <img src={ProfileImage} alt="Raymund" className="w-9 h-9 rounded-full object-cover" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white dark:border-gray-900"></span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">Chat with Ray</p>
              <p className="text-xs text-green-500">● Online</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
            >
              <IoClose className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-gray-50 dark:bg-gray-950">

            {/* Greeting bubble */}
            <div className="flex items-start gap-2">
              <img src={ProfileImage} alt="Ray" className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Ray Dev</span>
                <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-2.5 rounded-2xl rounded-tl-none max-w-[80%] leading-relaxed shadow-sm border border-gray-100 dark:border-gray-700">
                  {GREETING}
                </div>
              </div>
            </div>

            {/* Suggestion chips */}
            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 mt-1 ml-9">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-xs px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:opacity-80 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Chat messages */}
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-start gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "model" && (
                  <img src={ProfileImage} alt="Ray" className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5" />
                )}
                <div className={`flex flex-col gap-1 max-w-[75%] ${msg.role === "user" ? "items-end" : "items-start"}`}>
                  {msg.role === "model" && (
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Ray Dev</span>
                  )}
                  <div
                    className={`text-xs px-3 py-2.5 rounded-2xl leading-relaxed shadow-sm ${
                      msg.role === "user"
                        ? "bg-black dark:bg-white text-white dark:text-black rounded-br-none"
                        : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none border border-gray-100 dark:border-gray-700"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex items-start gap-2">
                <img src={ProfileImage} alt="Ray" className="w-7 h-7 rounded-full object-cover shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Ray Dev</span>
                  <div className="bg-white dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1 items-center shadow-sm border border-gray-100 dark:border-gray-700">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0ms]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="px-3 py-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex gap-2 items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 text-xs px-4 py-2.5 rounded-full border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white outline-none focus:border-gray-400 dark:focus:border-gray-500 transition-colors"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center disabled:opacity-40 hover:opacity-80 transition-opacity shrink-0"
            >
              <IoSend className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-center text-gray-400 dark:text-gray-600 text-xs py-2 bg-white dark:bg-gray-900">
            Ask me about programming, web dev, or tech!
          </p>
        </div>
      )}
    </>
  );
};

export default Chatbot;
