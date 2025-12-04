import type React from "react";
import { useState } from "react";

const Home = () => {

    const [email, setEmail] = useState<string>("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        alert("Email: " + email);
}

  return (
    <form onSubmit={handleSubmit}>
        <input value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Nhap email" />

        <button type="submit">Submit</button>
    </form>

)
}

export default Home