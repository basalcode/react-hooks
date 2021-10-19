import { useNotification } from "./useNotification";

import { notification, main_title, label, title_label, message_label, input, alarm_button } from './index.module.scss';
import { useState } from "react/cjs/react.development";

const Notification = props => {
    const [title, setTitle] = useState("알림이 왔어요 ~!");
    const [message, setMessage] = useState("알림은 이런식으로 온답니다.");

    const triggerNotification = useNotification(title, { body: message });

    const onChangeInput = (event, setState) => {
        const { target: { value } } = event;

        setState(value);
    }

    return (
        <div className={notification}>
            <h1 className={main_title}>알림 보내기</h1>
            <lable
                className={`${label} ${title_label}`}
            >
                제목:
                <input
                    className={input}
                    type="text"
                    placeholder="알림 제목을 적어주세요."
                    value={title}
                    onChange={event => onChangeInput(event, setTitle)}
                />
            </lable>
            <lable
                className={`${label} ${message_label}`}
            >
                내용:
                <input
                    className={input}
                    type="text"
                    placeholder="알림 메세지를 적어주세요."
                    value={message}
                    onChange={event => onChangeInput(event, setMessage)}
                />
            </lable>
            <button
                className={alarm_button}
                onClick={triggerNotification}
            >
                알림 테스트 해보기
            </button>
        </div>
    );
}

export default Notification;