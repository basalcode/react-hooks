import { useNotification } from "./useNotification";

const Notification = props => {
    const triggerNotification = useNotification("Can I steal your kimchi?", { body: "I love kimchi don't you?" });
    
    return (
        <button onClick={triggerNotification}>Hello</button>
    );
}

export default Notification;