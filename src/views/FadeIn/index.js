import { useFadeIn } from "./useFadeIn";

import {
    fade_in,
    title,
    text
} from './index.module.scss';

const FadeIn = props => {
    const fadeInH1 = useFadeIn(1, 1);
    const fadeInP = useFadeIn(2, 2);

    return (
        <div className={fade_in}>
            <h1
                className={title}
                {...fadeInH1}
            >
                페이드인 효과를
            </h1>
            <p
                className={text}
                {...fadeInP}
            >
                표현해보았다.
            </p>
        </div>
    );
}

export default FadeIn;