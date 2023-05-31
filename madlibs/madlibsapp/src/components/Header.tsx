import { Link } from "react-router-dom"
export function Header() {
    return(
        <div>
            <h1>
                GC Mad Libs
            </h1>
            <ul>
                <li><Link to="/stories">See Saved Stories</Link></li>
                <li><Link to="create-story">Create a New Story</Link></li>
            </ul>
        </div>

    )
}