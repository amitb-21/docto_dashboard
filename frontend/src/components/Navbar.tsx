
"use client";
import React, { useState, useEffect } from "react";

export const TopBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Simple logout handler (replace with your auth logic)
  const handleLogout = () => {
    alert("Logged out!");
    // TODO: add your logout logic here
  };

  // Search function - scrolls to first matching text node containing the word
  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    // Find all elements that contain text
    const walk = (node: Node): Node | null => {
      if (node.nodeType === Node.TEXT_NODE) {
        if (
          (node.textContent ?? "").toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return node.parentNode;
        }
      } else {
        for (let i = 0; i < node.childNodes.length; i++) {
          const found = walk(node.childNodes[i]);
          if (found) return found;
        }
      }
      return null;
    };

    const el = walk(document.body);
    if (el && el instanceof HTMLElement) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      // Optionally add a highlight class for a moment
      el.classList.add("highlight-search");
      setTimeout(() => {
        el.classList.remove("highlight-search");
      }, 2000);
    } else {
      alert("No results found");
    }
  };

  return (
    <>
      <style>{`
        .topbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          height: 40px;
          background: var(--bg);
          display: flex;
          align-items: center;
          padding: 0 12px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          z-index: 1000;
        }
        input.search-input {
          height: 24px;
          font-size: 14px;
          padding: 4px 8px;
          border-radius: 4px;
          border: 1px solid #ccc;
          margin-right: 8px;
        }
        button {
          font-size: 14px;
          margin-left: 8px;
          padding: 4px 8px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          background: #3b82f6;
          color: white;
          transition: background 0.2s;
        }
        button:hover {
          background: #2563eb;
        }
        .toggle-btn {
          background: transparent;
          border: 1px solid #3b82f6;
          color: #3b82f6;
          margin-left: auto;
          padding: 4px 8px;
          border-radius: 4px;
        }
        .toggle-btn:hover {
          background: #3b82f6;
          color: white;
        }
        /* Highlight style for search result */
        .highlight-search {
          background-color: yellow;
          transition: background-color 2s ease;
        }

        /* Light and dark mode vars */
        :root {
          --bg: white;
          --text: black;
        }
        .dark {
          --bg: #111827;
          --text: #f9fafb;
        }
        body {
          background: var(--bg);
          color: var(--text);
          margin-top: 40px; /* to avoid content under topbar */
          transition: background 0.3s, color 0.3s;
        }
      `}</style>

      <div className="topbar" role="banner">
        <input
          className="search-input"
          type="text"
          aria-label="Search on page"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button onClick={handleSearch} aria-label="Find word on page">
          Find
        </button>

        <button onClick={handleLogout} aria-label="Logout">
          Logout
        </button>
      </div>
    </>
  );
};

export default function Page() {
  return (
    <>
      <TopBar />
      <main style={{ padding: "16px" }}>
        <h1>Sample Page Content</h1>
        <p>
          This is an example page with some text to test the search feature. Try typing a word
          from this paragraph in the search bar above and click Find.
        </p>
        <p>
          The logout button currently just shows an alert. Replace it with your authentication logic.
        </p>
      </main>
    </>
  );
}
