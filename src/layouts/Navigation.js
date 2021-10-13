import { Link } from "react-router-dom"
import { navigations } from "assets/navigations";

import { navigation, lists, list, link } from "./Navigation.module.scss";

const Navigation = () => {
    return (
        <nav className={navigation}>
            <ul className={lists}>
                {navigations.map(navigation => {
                    const { title } = navigation;
                    const path = title.toLowerCase();
                    return (
                        <li
                            className={list}
                            key={title}
                        >
                            <Link
                                className={link}
                                to={`/${path}`}
                            >
                                <p>{title}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navigation;