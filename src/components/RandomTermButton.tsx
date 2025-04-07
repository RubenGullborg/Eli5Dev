import { useState, useEffect } from "react";
import type { CollectionEntry } from "astro:content";

interface RandomTermButtonProps {
  terms: CollectionEntry<"terms">[];
}

export default function RandomTermButton({ terms }: RandomTermButtonProps) {
  const [randomTerm, setRandomTerm] = useState<CollectionEntry<"terms"> | null>(
    null
  );

  const getRandomTerm = () => {
    if (terms.length === 0) return;

    const randomIndex = Math.floor(Math.random() * terms.length);
    const term = terms[randomIndex];
    setRandomTerm(term);

    // Update the DOM element with the random term details
    const container = document.getElementById("randomTermContainer");
    if (container) {
      container.innerHTML = `
        <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all">
          <div class="mb-6">
            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">${term.data.title}</h2>
            <p class="text-gray-600 dark:text-gray-300">${term.data.description}</p>
          </div>
          
          ${term.data.tags?.length ? `
            <div class="flex flex-wrap gap-2 mb-6">
              ${term.data.tags.map(tag => `<span class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">${tag}</span>`).join('')}
            </div>
          ` : ''}
          
          <a href="/term/${term.slug}" class="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
            Read Full Explanation
          </a>
        </div>
      `;
    }
  };

  // Select a random term on initial component mount
  useEffect(() => {
    getRandomTerm();
  }, [terms]); // Re-run if terms prop changes

  return (
    <button
      onClick={getRandomTerm}
      className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 py-4 rounded-lg flex items-center justify-center transition-colors duration-200 text-lg shadow-md hover:shadow-lg"
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
      Discover Random Term
    </button>
  );
}
