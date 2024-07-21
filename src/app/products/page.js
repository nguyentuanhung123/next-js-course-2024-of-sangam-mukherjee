export default function Products({searchParams}) {

    // console.log("params on products page: ", params); // params on products page:  {}
    // console.log("searchParams on products page: ", searchParams); // searchParams on products page:  { search: 'product1' }
    console.log(searchParams.search) // product1

    return (
        <h1>Products page</h1>
    );
}