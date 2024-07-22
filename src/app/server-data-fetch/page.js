

// fetch

import Link from "next/link";

async function fetchListOfUsers() {
    try {
        const apiResponse = await fetch('https://dummyjson.com/users');
        const result = await apiResponse.json();

        return result.users
    } catch(error) {
        throw new Error(error)
    }
}

export default async function ServerSideDataFetching() {

    const listOfUsers = await fetchListOfUsers();

    console.log(listOfUsers);

    return (
        <div className="p-10">
            <h1>Server side data fetching : User List Page</h1>
            <ul>
                {
                    listOfUsers && listOfUsers.length > 0 
                        ? listOfUsers.map((user) => <li key={user.id} className="mt-5">
                            <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link>
                        </li>)
                        : null
                }
            </ul>
        </div>
    )
}