import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./ModuleList.css";

interface Module {
  name: string;
  description: string;
  stars: number;
}

interface Props {
  search: string;
  sort: string;
}

const ModuleList: React.FC<Props> = ({ search, sort }) => {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  const fetchModules = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://libraries.io/api/search?q=${search}&api_key=d610d9a744c78dc76bad02f073542106&sort=${sort}&page=${page}&per_page=5`
      );
      setModules(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }, [page, search, sort]);

  useEffect(() => {
    fetchModules();
  }, [fetchModules]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="module-list">
      {modules.map((module, index) => (
        <div key={index} className="module">
          <h2>{module.name}</h2>
          <p>description: {module.description}</p>
          <p>Stars: {module.stars}</p>
        </div>
      ))}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default ModuleList;
