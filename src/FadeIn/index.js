import { useFadeIn } from "./useFadeIn";

const FadeIn = props => {
    const fadeInH1 = useFadeIn(1, 1);
    const fadeInP = useFadeIn(2, 2);

    return (
        <>
            <h1 {...fadeInH1}>Hello</h1>
            <p {...fadeInP}>Lorem ipsum</p>
        </>
    );
}

export default FadeIn;