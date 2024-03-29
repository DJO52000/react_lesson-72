import { Link } from "react-router-dom"

//GO AROUND REFRESH PAGE Y USE LINK
export function TeamNav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="joe">Team - Joe</Link>
                </li>
                <li>
                    <Link to="sally">Team - Sally</Link>
                </li>
                <li>
                    <Link to="..">.. Route</Link>
                </li>
                <li>
                    <Link to=".." relative="path">.. Path</Link>
                </li>
            </ul>
        </nav>
    )
}
