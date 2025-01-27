import useLocalStorage from "../components/useLocalStorage"; 

const UseLocalStorage = () => {
    const [text, setText] = useLocalStorage("customerID", "");
    const [password, setPassword] = useLocalStorage("password", "");

    return (
        <div>
            <h2>Utilizing Custom Hook</h2>
            <label htmlFor="user">Username</label><br />
            <input
                type="text"
                id="user"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="password">Password</label><br />
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <h3>The text is: {text}</h3>
        </div>
    );
};

export default UseLocalStorage;
