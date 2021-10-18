import { useConfirm } from './useConfirm';

import { confirm, confirm_button, confirm_result, confirm_result_content, selected, confirmed, confirmed_text, canceled, canceled_text } from './index.module.scss';
import { useEffect, useState } from 'react';

const Confirm = () => {
    const [isConfirmed, setIsConfirmed] = useState(null);

    const onConfirm = () => { setIsConfirmed(true); }
    const onCancel = () => { setIsConfirmed(false); }
    const confirmAction = useConfirm("Confirm or Cancel ?", onConfirm, onCancel);

    useEffect(() => {
        console.log('isConfirmed', isConfirmed);
    }, [isConfirmed]);

    return (
        <div className={confirm}>
            <button
                className={confirm_button}
                onClick={confirmAction}
            >
                Confirm
            </button>
            <div className={confirm_result}>
                <div className={`${confirm_result_content} ${isConfirmed === true && selected} ${confirmed}`}>
                    <p className={confirmed_text}>
                        ✅ You Confirmed!
                    </p>
                </div>
                <div className={`${confirm_result_content} ${isConfirmed === false && selected} ${canceled}`}>
                    <p className={canceled_text}>
                        ❌ You Canceled!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Confirm;