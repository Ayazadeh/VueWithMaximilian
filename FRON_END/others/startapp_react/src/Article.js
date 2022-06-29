import {useEffect, useState} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Article() {

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ")
            .then(resp => setData(resp.data))
    }, [])

    return (
        <div className="Article">
            {!data && <p>Please wait !!!</p>}

            {data &&
            <div>
                <h1>{data.title}</h1>
                <img src={data.url} width="400"/>
                <p>{data.explanation}</p>
            </div>
            }
            <Link to="/">home page</Link> <br/>
            <Link to="/counter/1">counter 1</Link>
        </div>

    );
}

export default Article;