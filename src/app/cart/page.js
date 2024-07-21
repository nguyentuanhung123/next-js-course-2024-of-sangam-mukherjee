'use client'

import { usePathname, useSearchParams } from "next/navigation";

export default function Cart() {

    const pathName = usePathname();
    console.log("pathName: ", pathName); // pathName:  /cart

    const searchParams = useSearchParams();
    console.log(searchParams.get('search'), searchParams.get('radomValue')); // product1 abcxyz

    return (
        <div>
            <h1>This is Cart component.</h1>
        </div>
    );
}