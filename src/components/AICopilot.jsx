import React, { useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { genAIResponse } from "./genAIResponse.js";

const AICopilot = () => {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState([]);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const aiResponse = await genAIResponse(question)
      setConversation((prev) => [...prev, { q: question, a: aiResponse }]);
      setQuestion("");
    } catch (err) {
      setConversation((prev) => [
        ...prev,
        {
          q: question,
          a: "Sorry, I couldn't generate a response. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full justify-between px-4 py-6 bg-gradient-to-t from-[#dedfed] via-[#faf8fa] to-white">
      <div className="space-y-6 text-sm overflow-y-auto pr-2">
        {conversation.length === 0 ? (
          <div className="flex-1 text-center mt-24 mx-6 sm:mt-60">
            <p className="text-2xl">🤖</p>
            <h1 className="font-bold text-gray-800">Hi, I'm Fin AI Copilot</h1>
            <p className="text-gray-400 font-semibold">
              Ask me anything about this conversation
            </p>
          </div>
        ) : (
          conversation.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="font-semibold">You</div>
              <div className="text-gray-800">{item.q}</div>

              <div className="flex items-center gap-2 mt-2">
                <span className="text-xl">🤖</span>
                <span className="font-semibold">Fin</span>
              </div>

              <div className="text-gray-800 bg-gradient-to-b font-[500] from-[#cfd5f6] via-[#e1cee0] to-[#f1cfd1] p-4 rounded-2xl">
                {item.a}
                <button className="mt-2 text-[14px] cursor-pointer bg-white w-full text-gray-800 px-3 py-1 rounded-md">
                  Add to Composer
                </button>
              </div>
            </div>
          ))
        )}
        {loading && (
          <div className="flex items-center gap-2 mt-4 text-gray-800">
            <span className="text-xl">🤖</span>
            <span className="font-semibold">Fin is typing...</span>
          </div>
        )}
      </div>

      {/* Suggested Questions + Input */}
      <div className="mt-4">
        <div
          className="inline-block text-gray-800 text-sm bg-white rounded-lg px-2 py-1 mb-2 cursor-pointer"
          onClick={() => setQuestion("How do I get a refund?")}
        >
          <span className="font-semibold">Suggested: </span>How do I get a
          refund?
        </div>
        <div
          className="inline-block text-gray-800 text-sm bg-white rounded-lg px-2 py-1 mb-4 cursor-pointer"
          onClick={() => setQuestion("Can you tell me the price of the plan?")}
        >
          <span className="font-semibold">Suggested: </span>Can you tell me the
          price of the plan?
        </div>

        <div className="flex justify-between bg-white rounded-lg px-2 py-3">
          <textarea
            placeholder="Ask a question..."
            className="w-full h-[20px] text-gray-800 text-sm outline-none resize-none overflow-hidden whitespace-pre-wrap"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            onClick={handleAsk}
            className="text-gray-500 cursor-pointer hover:text-gray-800"
            disabled={loading}
          >
            <BiUpArrowAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AICopilot;
