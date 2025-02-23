import { useState } from "react";
import { NavLink } from "react-router";

export default function NavBar() {

    const [page, setPage] = useState(document.location.pathname);

    const classNames = {
        NavLink: "lg:text-2xl px-3 py-1 text-nowrap",
    }

    const links = [
        { pathname: '/Home', text: "Home" },
        { pathname: '/student-profile', text: "StudentProfile" },
    ]

    return (
        <div className="text-center mb-5">
            <nav>
                <ul>
                    <li>
                        {links.map(linkData => {
                            return (
                                <NavLink key={linkData.pathname}
                                    to={linkData.pathname}
                                    onClick={() => setPage(linkData.pathname)}
                                    className={`${classNames.NavLink} ${page === linkData.pathname ? 'bg-jasmine rounded border-b-2' : ''}`}>
                                    {linkData.text}
                                </NavLink>
                            );
                        })}
                    </li>
                </ul>
            </nav>
        </div>
    );
}