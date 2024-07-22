async function fetchUserDetails(currentUserId) { 
    try {
        const apiResponse = await fetch(`https://dummyjson.com/users/${currentUserId}`);
        const result = await apiResponse.json();

        return result;
    } catch(e) {
        throw new Error(e)
    }
}

export default async function UserDetails({params}) {

    console.log(params); // { details: '7' }

    const userDetails = await fetchUserDetails(params.details);

    return (
        <div>
            <h1>This is the user details page</h1>
            <p>{userDetails?.firstName} {userDetails?.lastName}</p>
            <p>{userDetails?.age} years old</p>
            <p>{userDetails?.email}</p>
            <p>{userDetails?.phone}</p>
            <p>{userDetails?.birthDate}</p>
        </div>
    )
}