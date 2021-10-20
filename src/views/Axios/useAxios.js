import defaultAixos from "axios";
import { useEffect, useState } from "react";

export const useAxios = (options, axiosInstance = defaultAixos) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    const [trigger, setTrigger] = useState(0);

    const refetch = () => {
        setState({
            ...state,
            loading: true,
        });

        setTrigger(Date.now());
    }

    useEffect(() => {
        axiosInstance(options).then(data => {
            console.log('AAAAAAAAAA', data);

            setState({
                ...state,
                loading: false,
                data: data
            });
        }).catch(error => {
            setState({
                ...state,
                loading: false,
                error: error
            });
        });
    }, [trigger]);

    if (!options.url) return;

    return { ...state, refetch };
}