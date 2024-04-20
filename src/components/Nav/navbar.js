import "./navbar.css"

const navbar = {} => {
    return (
        <nav>
            {" "}
            <div className="logo">
                <Link to="/">MTB</Link>
            </div>
            <ul>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/contact"></Link>
                </li>
                <li>{/*.<CreatePostModal./> */</li>
            </ul>
        </nav>;
    );
};

export default navbar;