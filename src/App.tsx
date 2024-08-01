import React, { useState } from "react";
import ModuleList from "./components/ModuleList/ModuleList";
import Layout from "./components/Layout/Layout";

const App: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("rank");

  const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <Layout>
      <div className="controls">
        <input
          type="text"
          value={search}
          placeholder="Search modules..."
          onChange={handleUserInput}
        />
        <span>
          Sort by :{" "}
          <select
            data-testid="sortby"
            onChange={(e) => setSort(e.target.value)}
          >
            <option data-testid="rank" value="rank">
              Rank
            </option>
            <option data-testid="sort" value="stars">
              Stars
            </option>
          </select>
        </span>
      </div>
      <ModuleList search={search} sort={sort} />
    </Layout>
  );
};

export default App;
