export function getStaticProps() {
    return {
        props: {
            revalidate: 10,
            number: Math.random()
        }
    }
}

export default function staticC(props) {
    return (
        <div>
            <h1>Static #C</h1>
            <h2>{props.number}</h2>
        </div>
    )
}