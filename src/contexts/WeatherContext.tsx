'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { fetchWeatherApi } from "openmeteo";
import { WeatherData } from "@/types/Weather";

interface WeatherContextValue {
    data: WeatherData | null;
    loading: boolean;
    error: string | null;
}

const WeatherContext = createContext<WeatherContextValue | undefined>(undefined);

export const WeatherProvider = ({children}: {children: ReactNode}) => {
    const [data, setData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {

        }
    }, []);

    const value: WeatherContextValue = {data, loading, error};

    return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
}