import { useState, useEffect, useCallback } from "react";

function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {

        try {
            const response = await fetch(url);
            const results = await response.json();

            if (!response.ok) {
                throw new error("Something went wrong")
            }
            setData(results.data);


        }
        catch (error) {
            setError(`Something Went wrong`);

        } finally {
            setLoading(false)
        }

    }, [])

    useEffect(() => {
        fetchData();
        setTimeout(() => {
            fetchData()
        }, 1000);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchData])

    return {
        data, loading, error
    }

}

export default useFetch