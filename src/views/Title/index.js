import { useTitle } from "./useTitle";

const Title = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);

    return (
        <div>Look at the title above</div>
    );
}

export default Title;