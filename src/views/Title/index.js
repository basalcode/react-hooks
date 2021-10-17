import { useTitle } from "./useTitle";

import { title, titleText, resetButton } from './index.module.scss';

const Title = () => {
    const setTitle = useTitle("Loading...");
    setTimeout(() => setTitle("Home"), 2000);

    return (
        <div className={title}>
            <h1 className={titleText}>
                Look at the title above
            </h1>
            <button
                className={resetButton}
                onClick={event => setTitle("Loading...")}
            >
                Restart
            </button>
        </div>
    );
}

export default Title;