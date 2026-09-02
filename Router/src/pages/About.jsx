import {Link} from 'react-router-dom'

function About() {

    return (
        <>
        <div>
            <h1>About page</h1>
            <Link to='/Contact'>Go to About</Link>
        </div>
        </>
    )
}

export default About;