import { useState } from "react";

function App() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        console.log("Name:", name);
        console.log("Email:", email);
    }

    return (
        <form onSubmit={handleSubmit}>

            <label>Name</label>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <label>Email</label>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <button type="submit">
                Submit
            </button>

        </form>
    );
}

export default App;