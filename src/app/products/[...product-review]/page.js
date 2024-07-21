export default function ProductReview({params}) {

    console.log(params); // { 'product-review': [ '1', '2', '3', '4' ] }

    return (
        <div>
            <h1>This is Product Review page and this is a catch all segment/route</h1>
        </div>
    );
}