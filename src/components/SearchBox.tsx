import { useState } from "react";
import type { CollectionEntry } from "astro:content";

interface SearchBoxProps {
  terms: CollectionEntry<"terms">[];
}

export default function SearchBox({ terms }: SearchBoxProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    CollectionEntry<"terms">[]
  >([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 1) {
      setIsSearching(true);
      const results = terms.filter(
        (term) =>
          term.data.title.toLowerCase().includes(query.toLowerCase()) ||
          term.data.description.toLowerCase().includes(query.toLowerCase()) ||
          term.data.tags?.some((tag) =>
            tag.toLowerCase().includes(query.toLowerCase())
          )
      );
      setSearchResults(results);
    } else {
      setIsSearching(false);
      setSearchResults([]);
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Search terms..."
          value={searchQuery}
          onChange={handleSearch}
          onBlur={() => setTimeout(() => setIsSearching(false), 150)}
          onFocus={() => searchQuery.trim().length > 1 && setIsSearching(true)}
          className="w-full p-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {isSearching && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-96 overflow-y-auto border border-gray-200 dark:border-gray-700">
          {searchResults.length > 0 ? (
            searchResults.map((term) => (
              <a
                key={term.slug}
                href={`/term/${term.slug}`}
                className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-0"
              >
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {term.data.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                  {term.data.description}
                </p>
              </a>
            ))
          ) : (
            <div className="p-3 text-gray-500 dark:text-gray-400">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
