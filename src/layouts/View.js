import { Route } from "react-router-dom"
import { navigations } from "assets/navigations";

import {
    view,
    title,
    description,
    link
} from './View.module.scss';

const View = () => {
    return (
        <div className={view}>
            <Route exact path={'/'}>
                <h1 className={title}>
                    Hello, React hook !
                </h1>
                <p className={description}>
                    위의 버튼을 클릭해 다양한 리액트 훅 예제를 실행해보세요.
                </p>
                <p>
                    공식 문서 링크는 아래에
                </p>
                <a
                    className={link}
                    href="https://ko.reactjs.org/docs/hooks-intro.html"
                >
                    ✅ React hook document
                </a>
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