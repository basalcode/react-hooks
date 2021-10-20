import { useAxios } from "./useAxios";

import { axios, title, refresh_button, status, movie_container, movie_item } from './index.module.scss';

const Axios = () => {
    const { loading, data, error, refetch } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json" });

    return (
        <div className={axios}>
            <h1 className={title}>영화 정보 불러오기</h1>
            <button
                className={refresh_button}
                onClick={refetch}
            >
                새로고침
            </button>
            <h2 className={status}>
                {`Status: ${loading ? "Loading..." : data?.status}`}
            </h2>
            <div className={movie_container}>
                {loading
                    ? (
                        <h2 className={movie_item}>
                            Please Wait
                        </h2>
                    )
                    : data?.data?.data?.movies.map((movie) => {
                        const { title, rating } = movie;

                        return (
                            <h3 className={movie_item}>
                                {`${title} - ${rating}`}
                            </h3>
                        );
                    })}
            </div>
        </div>
    );
}

export default Axios;