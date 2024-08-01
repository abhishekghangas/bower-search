import React from "react";
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/search">Search</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
