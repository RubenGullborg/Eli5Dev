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
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <div class="flex justify-between items-start mb-3">
            <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">${term.data.title}</h2>
            <a href="/term/${term.slug}" class="text-sm text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap ml-4">Details →</a>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">${term.data.description}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            ${term.data.tags?.slice(0, 3).map(tag => `<span class="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">${tag}</span>`).join('') || ''}
            ${term.data.tags && term.data.tags.length > 3 ? `<span class="text-xs text-gray-500 dark:text-gray-400">+${term.data.tags.length - 3} more</span>` : ''}
          </div>
          <a href="/term/${term.slug}" class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 text-sm">
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
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium flex items-center justify-center transition-colors duration-200 whitespace-nowrap"
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
      Random Term
    </button>
  );
}
