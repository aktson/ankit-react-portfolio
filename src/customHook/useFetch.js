import { useState, useEffect, useCallback } from "react";

function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {

        try {
            const response = await fetch(url);
            const results = await response.json();

            if (response.ok) {
                setData(results.data);
            }

        }
        catch (error) {
            setError(`Something Went wrong`);

        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        fetchData();

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        data, loading, error
    }

}

export default useFetch