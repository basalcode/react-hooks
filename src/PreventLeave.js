import { usePreventLeave } from "./usePreventLeave";

const PreventLeave = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();

    return (
        <>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
        </>
    );
}

export default PreventLeave;