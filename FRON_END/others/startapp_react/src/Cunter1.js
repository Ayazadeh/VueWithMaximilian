import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Counter1() {

    function sayHello(name, e) {
        console.log(`Hello ${name}`)
        e.target.textContent = "clicked!"
    }

    const { number } = useParams()

    return (
        <div className="Counter1">
            <button onClick={ e => sayHello("Mohammad", e) }>{ number }</button><br/><br/>
            <Link to="/Article">Article</Link> <br/><br/>
            <Link to="/">home page</Link>
        </div>
    );
}

export default Counter1;
