import { useState, useEffect } from "react";

function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData() {

        try {
            const response = await fetch(url);
            const results = await response.json();
            setData(results.data);
            setLoading(false);

        }
        catch (error) {
            setError(`Something Went wrong ${error}`);
            setLoading(false);
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