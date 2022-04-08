import LogoIcon from "./LogoIcon";
import { useState, useEffect } from "react";

export default function Header(props) {
  const [value, setValue] = useState("");

  return (
    <div className="p-8 bg-primary-orange shadow-md">
      <div>
        <div className="flex justify-center">
          <h1 className="my-32  text-secondary-cyan text-6xl font-bold">
            What would you like to embed?
          </h1>
          <LogoIcon />
        </div>
        <div className="relative">
          <div className="flex justify-center p-2 mb-2">
            <input
              className="shadow appearance-none border rounded-l-lg w-1/2 py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="search"
              type="search"
              placeholder="マイリストのURLを入力してください"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="shadow appearance-none inline-flex items-center px-4 rounded-r-lg"
              onClick={() => props.setMylistUrl(value)}
            >
              <svg
                className="w-6 h-6 text-primary-variant-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
