export function getStaticProps() {
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function staticB(props) {
    return (
        <div>
            <h1>Static #B</h1>
            <h2>{props.number}</h2>
        </div>
    )
}