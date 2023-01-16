import React, { useState, } from "react";
import { toast } from "react-toastify";
import Axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Userinfo from "./Components/profile/Userinfo";
// import Repos from "./Components/profile/repo/Repos";

function App() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const url = `https://api.github.com/users/${query}`;

  const fetchDetails = async () => {
    try {
      const { data } = await Axios.get(url)
      setUser(data)
    } catch (error) {
      if (query === "") {
        return toast("The field is required", { type: "error" })
      } else {
        if (error.type === 404) {
          return toast("Oh no! Something went wrong. Try again later!", { type: "error" })
        } else {
          return toast(`${query} isn't a user on Github`, { type: "error" })
        }
      }
    }
  };

  return (
    <>
      <div className="bg">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-sm ">
            <div className="flex items-center border-b border-teal-500 py-2">
              <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Find your Git Profile" value={query} onChange={e => setQuery(e.target.value)} />
              <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" onClick={fetchDetails}>
                Search
              </button>
            </div>
          </div>
        </div><br />
      </div>
      {user ? <Userinfo user={user} /> : ""}

      {/* {user ? <Repos repos_url={user.repos_url} /> : ""} */}
      <ToastContainer theme="dark" position="bottom-right" />
    </>
  );
}

export default App;
