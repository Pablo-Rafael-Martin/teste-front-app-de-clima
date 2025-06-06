'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { fetchWeatherApi } from "openmeteo";
import { WeatherData } from "@/types/Weather";
import { UnlockOutlined } from "@ant-design/icons";

interface WeatherContextValue {
    data: WeatherData | null;
    loading: boolean;
    error: string | null;
}

const WeatherContext = createContext<WeatherContextValue | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchWeather = async () => {
        try {
            setLoading(true);
            const params = {
                latitude: 52.52,
                longitude: 13.41,
                daily: ['temperature_2m_max', 'temperature_2m_min'],
                hourly: [
                    'temperature_2m',
                    'precipitation',
                    'apparent_temperature',
                    'relative_humidity_2m',
                ],
                timezone: 'America/Sao_Paulo',
            };

            const url = 'https://api.open-meteo.com/v1/forecast';
            const [response] = await fetchWeatherApi(url, params);

            const utc = response.utcOffsetSeconds();
            const h = response.hourly()!;
            const d = response.daily()!;

            const hours = (end: bigint, start: bigint, int: number) =>
                [...Array(Number((end - start) / BigInt(int)))].map((_, i) =>
                    new Date((Number(start) + i * int + utc) * 1000),
                );

            const weather: WeatherData = {
                hourly: {
                    time: hours(h.timeEnd(), h.time(), h.interval()),
                    temperature2m: h.variables(0)!.valuesArray()!,
                    precipitation: h.variables(1)!.valuesArray()!,
                    apparentTemperature: h.variables(2)!.valuesArray()!,
                    relativeHumidity2m: h.variables(3)!.valuesArray()!,
                },
                daily: {
                    time: hours(d.timeEnd(), d.time(), d.interval()),
                    temperature2mMax: d.variables(0)!.valuesArray()!,
                    temperature2mMin: d.variables(1)!.valuesArray()!,
                },
            };

            setData(weather);
            setError(null);
            
        } catch (err) {
            setError('Falha ao buscar dados climáticos');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!data) return;
        fetchWeather();
    }, []);

    const value: WeatherContextValue = { data, loading, error };

    return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
}