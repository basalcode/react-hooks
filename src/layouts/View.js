import { Route } from "react-router-dom"
import { navigations } from "assets/navigations";

const View = () => {
    return (
        <div>
            <Route exact path={'/'}>
                <div>
                    hello
                </div>
            </Route>
            <ul>
                {navigations.map(navigation => {
                    const { title, component } = navigation;
                    const path = title.toLowerCase();

                    return (
                        <Route
                            key={title}
                            path={`/${path}`}
                            component={component}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default View;