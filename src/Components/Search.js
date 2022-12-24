import React, { useState } from "react";
import { toast } from "react-toastify";
import Axios from "axios";
import Userinfo from "./Userinfo";

const Search = () => {
    const [query, setQuery] = useState("");
    const [user, setUser] = useState(null);
    const url = `https://api.github.com/users/${query}`;

    const fetchDetails = async () => {
        try {
            const { data } = await Axios.get(url)
            setUser(data)
        } catch (error) {
            toast("User not found", { type: "error" })
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
                        {/* <div className='text-red-500 text-xs italic'>{errmsg}</div> */}
                    </div>
                </div>
                {user ? <Userinfo user={user} /> : null}

            </div>
        </>
    );
};
export default Search;