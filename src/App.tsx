import React from "react";
import axios from "axios";
import User from "./components/User";

import "./App.scss";

interface UserType {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

function App() {
  const [users, setUsers] = React.useState<UserType[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [perPage, setPerPage] = React.useState<number>(10);

  React.useEffect(() => {
    // GET POSTS FROM API
    async function fetchUsers() {
      setLoading(true);
      const URL = "https://api.github.com/users/mmarconm/followers";
      const URLCONFIGURED = `${URL}?per_page=${perPage}&page=${currentPage}`;

      try {
        const res = await axios.get(URLCONFIGURED);
        setUsers((prevState) => [...prevState, ...res.data]);
      } catch (error) {
        
        // const sentinel = document.querySelector("#sentinel") as Element;
        // sentinel.style.display = "none";

        setCurrentPage((prevState) => prevState - 1); // Decrease current page to retry the failed request
        console.error("Error fetching users:", error);
      }

      setLoading(false);
    }

    fetchUsers();
  }, [currentPage]);

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setCurrentPage((prevState) => prevState + 1);
      }
    });

    intersectionObserver.observe(
      document.querySelector("#sentinel") as Element
    );

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <div className="container">
      <div className="users">
        {users.map((user, idx) => {
          return <User key={Math.random()} user={user} index={idx + 1} />;
        })}
      </div>
      <div id="sentinel"></div>
    </div>
  );
}

export default App;
