import React, { useEffect } from "react"
import axios from "axios"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { CardFooter, Typography, } from "@material-tailwind/react";
import "../repo/style.css";

const Repos = ({ query, setRepoData }) => {

    const url = `https://api.github.com/users/${query}/repos?per_page=100`;

    const fetchDetails = async () => {
        try {
            const { data } = await axios.get(url)
            setRepoData(data)
        } catch (error) {
            toast("User not found", { type: "error" })
        }
    };

    useEffect(() => {
        fetchDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="card">
                {setRepoData.length > 0 ? (
                    <ul className="p-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {setRepoData.map(repo => (
                            <li key={repo.id}>
                                <div className="mt-8 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <a href={repo.html_url}>
                                        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{repo.name}</h5>
                                    </a>
                                    <span className="font-light text-1xl">{repo.date}</span>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{repo.description}</p>
                                    <CardFooter divider className="flex items-center justify-between py-3">
                                        <Typography variant="small" className="font-normal text-gray-700 dark:text-gray-400">{repo.language}</Typography>
                                        <Typography variant="small" color="gray" className="flex gap-1 font-normal text-gray-700 dark:text-gray-400">
                                            {repo.size} KB
                                        </Typography>
                                    </CardFooter>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="mb-12 text-2xl text-base font-bold text-gray-500">No available repositories!</p>
                )}
            </div>
        </>

    );
}
export default Repos;