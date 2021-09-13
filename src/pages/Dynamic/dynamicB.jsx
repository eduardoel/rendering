export async function getServerSideProps() {
    console.log('[Server] generating props for the component')

    const resp = await fetch('http://localhost:3000/api/products')
    const products = await resp.json()

    return {
        props: {
            products: products
        }
    }
}

export default function DynamicB(props) {
    console.log('[Cliente] rendering the component')

    function renderProducts() {
        return props.products.map(products =>{
            return (
                <li key={products.id}>
                    {products.id} - {products.name} is priced at ${products.price}
                </li>
            )
        })
    }

    return (
        <div>
            <h1>Dynamic #B</h1>
            <ul>
                {renderProducts()}
            </ul>
        </div>
    )
}