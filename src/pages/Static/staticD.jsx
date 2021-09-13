export async function getStaticProps() {
    const resp = await fetch('http://localhost:3000/api/products')
    const products = await resp.json()

    return {
        props: {
            products: products
        }
    }
}

export default function staticD(props) {
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
            <h1>Static #D</h1>
            <ul>
                {renderProducts()}
            </ul>
        </div>
    )
}