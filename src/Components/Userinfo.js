import { Avatar } from '@material-tailwind/react';
import React from "react"

const Userinfo = ({user}) => {
    return (
        <>
            <div className="bg">
                <div className="bg-slate-300 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-slate-500">
                    <div className="relative mb-5 mx-auto flex justify-center item-center">
                        <Avatar src={user.avatar_url} alt={user.name} variant="circular" size="sm" className='object-cover cursor-pointer h-64 w-64 rounded-3xl' />
                    </div>
                    <div className="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
                        <h2 className="mb-5 mt-5 mx-auto text-center text-3xl text-gray-100 text-base tracking-tight font-medium">
                        {user.name}
                        </h2>
                        <h3 className="mb-2 mt-5 mx-auto text-center text-2xl text-green-500 text-base tracking-tight text-sm">
                            <a href={user.html_url} target="_blank" rel="nonopener noreferrer">- @ {user.login}</a>
                        </h3>
                        <ul className='p-2 flex gap-x-5 items-center justify-center'>
                            <li className='text-1xl text-gray-500 text-base tracking-tight font-medium'>
                                <i class='bx bx-pin'></i>
                                <span>{user.location}</span>
                            </li>
                        </ul>
                        <div className="flex gap-x-1 items-center justify-center">
                            <div className="p-3 flex flex-col sm:shrink text-center">
                                <span className='text-2xl text-base tracking-tight text-sm text-green-500'>{user.public_repos}</span>
                                <span className='text-1xl text-base font-bold text-gray-500'>Repositories</span>
                            </div>
                            <div className="p-3 flex flex-col shrink text-center">
                                <span className='text-2xl text-base tracking-tight text-sm text-green-500'>{user.followers}</span>
                                <span className='text-1xl text-base font-bold text-gray-500'>Followers</span>
                            </div>
                            <div className="p-3 flex flex-col shrink text-center">
                                <span className='text-2xl text-base tracking-tight text-sm text-green-500'>{user.following}</span>
                                <span className='text-1xl text-base font-bold text-gray-500'>Following</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Userinfo;