
import {Link} from "react-router-dom"


function Links() {

    return (
        <div className="Links">

            <Link to="/counter/1">counter1</Link><br/><br/>
            <Link to="/Article/">Article</Link><br/>

        </div>
    );
}

export default Links;
