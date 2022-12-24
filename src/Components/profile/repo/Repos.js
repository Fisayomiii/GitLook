import React, { useState, useEffect } from "react"
import Axios from "axios"
import { CardFooter, Typography, } from "@material-tailwind/react";
import "../repo/style.css";

const Repos = ({ repos_url }) => {

    const [repos, setRepos] = useState([])
    const fetchRepos = async () => {
        const { data } = await Axios.get(repos_url)
        setRepos(data)
    }
    useEffect(() => {
        fetchRepos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="card">
                <ul className="p-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {repos.map(repo => (
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
            </div>
        </>

    );
}
export default Repos;