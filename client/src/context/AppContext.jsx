import { createContext, useContext, useEffect, useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const { getToken } = useAuth();
    const { user } = useUser();
    
    // const backendUrl = import.meta.env.VITE_API_URL;
    const backendUrl = "http://localhost:3000";
    
    const [creations, setCreations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userMetadata, setUserMetadata] = useState(null);

    const getCreations = async () => {
        try {
            const token = await getToken();
            const { data } = await axios.get(`${backendUrl}/api/ai/get-creations`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            if (data.success) {
                setCreations(data.creations);
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        if (user) {
            getCreations();
        }
    }, [user]);

    const value = {
        backendUrl,
        creations,
        setCreations,
        getCreations,
        loading,
        setLoading,
        userMetadata,
        setUserMetadata
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);
