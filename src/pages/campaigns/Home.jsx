import { Link } from "react-router-dom"

const Home = () => {
    return (
        <section className="flex flex-col justify-center items-center h-screen">
            <p className="pb-3 text-4xl">coming soon!!!!</p>
            <Link to="/" className="font-bold underline">Home</Link>
        </section>
    )
}

export default Home