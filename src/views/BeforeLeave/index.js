import { useBeforeLeave } from './useBeforeLeave';

import {
    before_leave,
    text
} from './index.module.scss';

const BeforeLeave = () => {
    const begForLife = () => alert("마우스가 페이지를 벗어났습니다.");

    useBeforeLeave(begForLife);

    return (
        <div className={before_leave}>
            <p className={text}>
                마우스가 화면 밖으로 이탈하면 경고창이 표시됩니다.
            </p>
        </div>
    );
}

export default BeforeLeave;