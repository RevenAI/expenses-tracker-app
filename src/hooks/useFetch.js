import {
    useState,
    useEffect,
    useCallback
} from "react";
import apiRequest from "../../config/apiRequest";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    setData,
    setLoading,
    setError
} from "../state/slices/apiSlice";

const useFetch = (url, method = "GET", body = null, dependencies = []) => {
    const dispatch = useDispatch();
    const cachedData = useSelector((state) => state.api.data[url]);
    const [localLoading, setLocalLoading] = useState(!cachedData);
    const [localError, setLocalError] = useState(null);

    const fetchData = useCallback(async () => {
        dispatch(setLoading({
            url,
            loading: true
        }));
        setLocalLoading(true);
        setLocalError(null);

        try {
            const response = await apiRequest({
                method,
                url,
                data: body,
            });

            dispatch(setData({
                url,
                data: response.data
            }));
        } catch (err) {
            let errorMessage = "Something went wrong";

            if (err.response) {
                errorMessage = err.response.data?.message || "Server error";
            } else if (err.request) {
                errorMessage = "No response from server. Please check your internet connection.";
            } else {
                errorMessage = err.message;
            }

            dispatch(setError({
                url,
                error: errorMessage
            }));
            setLocalError(errorMessage);
        } finally {
            dispatch(setLoading({
                url,
                loading: false
            }));
            setLocalLoading(false);
        }
    }, [url, method, body, dispatch]);

    useEffect(() => {
        if (!cachedData) {
            fetchData();
        }
    }, [fetchData, ...dependencies]);

    return {
        data: cachedData,
        loading: localLoading,
        error: localError,
        refetch: fetchData
    };
};

export default useFetch;