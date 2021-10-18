import { useNetwork } from "./useNetwork";

import { network, text, status, status_online, status_offline } from './index.module.scss';

const Network = props => {
    const handleNetworkChange = (online) => {
        console.log(online ? "We just went online" : "We are offline")
    }

    const online = useNetwork(handleNetworkChange);

    return (
        <div className={network}>
            <h1 className={text}>
                You are in
            </h1>
            <h1 className={`${status} ${online ? status_online : status_offline}`}>
                {online ? "Online" : "Offline"}
            </h1>
        </div>
    );
}

export default Network;