import { usePreventLeave } from "./usePreventLeave";

import { prevent_leave, state_container, text, state, buttons, button, selected, protect_button, unprotect_button } from './index.module.scss';
import { useState } from "react";

const PreventLeave = () => {
    const [isProtected, setIsProtected] = useState(null);
    const { enablePrevent, disablePrevent } = usePreventLeave();

    return (
        <div className={prevent_leave}>
            <div className={state_container}>
                <p className={text}>
                    창 닫기 보호 모드:
                </p>
                <p className={state}>
                    {isProtected === null ? "" : isProtected ? "On" : "Off"}
                </p>
            </div>
            <div className={buttons}>
                <button
                    className={`${button} ${isProtected === true && selected} ${protect_button}`}
                    onClick={event => {
                        setIsProtected(true);
                        enablePrevent();
                    }}
                >
                    Protect
                </button>
                <button
                    className={`${button} ${isProtected === false && selected} ${unprotect_button}`}
                    onClick={event => {
                        setIsProtected(false);
                        disablePrevent();
                    }}
                >
                    Unprotect
                </button>
            </div>
        </div>
    );
}

export default PreventLeave;