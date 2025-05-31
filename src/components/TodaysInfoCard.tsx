// import { TodaysInfoFontSizes } from "@/app/style/theme";

import { TodaysInfoFontSizes } from "@/app/style/theme";
import { CloudSunIcon } from "@phosphor-icons/react";
import styled from "styled-components";

interface TodaysInfoCardProps {
    time: string;
    temperature: string;
    index: number;
}

function TodaysInfoCard( { time, temperature, index } : TodaysInfoCardProps ) {
    return (
        <Card key={index}>
            <div className="time">{time}</div>
            <CloudSunIcon size={TodaysInfoFontSizes.icon.desktop} />
            <div className="temperature">{temperature}</div>
        </Card>
        // <TodaysInfoCard key={index}>
        //     <div className="time">{data.time}</div>
        //     <CloudSunIcon size={TodaysInfoFontSizes.icon.desktop} />
        //     <div className="temperature">{data.temperature}</div>
        // </TodaysInfoCard>
    );
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10rem;
    padding: 16rem 0;
    width: 89rem;
    border-radius: 24rem;
    border: 1px solid white;
    backdrop-filter: blur(36px);
    background-color: rgba(255, 255, 255, 0.1);
    flex-basis: 89rem;
    flex-shrink: 0;
    flex-grow: 0;

    .temperature {
        font-size: ${TodaysInfoFontSizes.temperature.desktop};
        font-weight: 600;
    }

    .time {
        font-size: ${TodaysInfoFontSizes.time.desktop};
        font-weight: 400;
    }
`;

export default TodaysInfoCard;