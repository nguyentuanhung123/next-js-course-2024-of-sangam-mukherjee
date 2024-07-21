import { redirect } from "next/navigation";

export default function Accounts() {

    // assume that profile info is null
    const userProfileInfo = null

    if (userProfileInfo === null) {
        // redirect('cart?search=product1&radomValue=abcxyz')
        redirect('products?search=product1')
    }

    return (
        <h1>Accounts page</h1>
    );
}