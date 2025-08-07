import React, { useState } from "react";
import { Wand2 } from "lucide-react";

export default function EmailRefiner() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRefine = () => {
    setIsLoading(true);
    setTimeout(() => {
      setOutputText(
        `Refined: ${inputText.trim()} (this is a placeholder for your AI-powered refinement)`
      );
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Email Refiner</h1>
        <textarea
          className="w-full h-32 p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Paste your rough draft email here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        ></textarea>
        <button
          onClick={handleRefine}
          disabled={isLoading || !inputText.trim()}
          className="flex items-center justify-center w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isLoading ? (
            <span className="animate-pulse">Refining...</span>
          ) : (
            <>
              <Wand2 className="w-5 h-5 mr-2" /> Refine Email
            </>
          )}
        </button>
        {outputText && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Refined Email:</h2>
            <div className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">
              {outputText}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}