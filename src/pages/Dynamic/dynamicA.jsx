export function getServerSideProps() {
    console.log('[Server]')
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function DynamicA(props) {
    return (
        <div>
            <h1>Dynamic #A</h1>
            <h2>{props.number}</h2>
        </div>
        
        )
}