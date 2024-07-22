"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import useSWR from "swr"

// useEffect hook
// swr, useSwr hook
// with loading state

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function ClientSideDataFetching() {

    // const [loading, setLoading] = useState(true)
    // const [users, setUsers] = useState([])

    // async function fetchListOfUsers() {
    //     try {
    //         setLoading(true)
    //         const apiResponse = await fetch('https://dummyjson.com/users');
    //         const result = await apiResponse.json();

    //         if(result?.users) {
    //             setUsers(result.users);
    //             setLoading(false);
    //         }
    //     } catch(error) {
    //         console.log(error);
    //         setUsers([]);
    //         setLoading(false);
    //     }
    // }

    // useEffect(() => {
    //     fetchListOfUsers()
    // }, [])

    const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher)

    // if(loading) return <h3 className="font-extrabold text-3xl ">Loading users ! Please wait</h3>

    if(error) return <div>Failed to load</div>

    if(isLoading) return <h3 className="font-extrabold text-3xl ">Loading users ! Please wait</h3>

    return (
        <div>
            <h1>Client side data fetching</h1>
            <ul>
                {
                    data && data?.users && data?.users.length > 0 
                        ? data?.users.map((user) => <li key={user.id} className="mt-5">
                            <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
                        </li>)
                        : null
                }
            </ul>
        </div>
    )
}