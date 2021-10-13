import { useNetwork } from "./useNetwork";

const Network = props => {
    const handleNetworkChange = (online) => {
        console.log(online ? "We just went online" : "We are offline")
    }

    const online = useNetwork(handleNetworkChange);

    return (
        <h1>{online ? "Online" : "Offline"}</h1>
    );
}

export default Network;