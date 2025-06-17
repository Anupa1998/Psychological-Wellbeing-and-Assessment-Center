import React from 'react'

const SearchBar = () => {
    return (
        <div className="flex justify-end mb-4 max-w-96 w-full relative ">
            <input
                type="text"
                className="px-4 rounded-2xl py-2 max-w-96 w-full border border-cusred focus:outline-0"
                placeholder="Search"
            />
            <svg
                className="w-5 h-5 text-cusred absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
                />
            </svg>
        </div>

    )
}

export default SearchBar