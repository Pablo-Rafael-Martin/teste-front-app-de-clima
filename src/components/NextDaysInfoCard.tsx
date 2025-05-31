import { NextDaysInfoFontSizes } from "@/app/style/theme";
import { Flex } from "antd";
import styled from "styled-components";

interface NextDaysInfoCardProps {
    date: string;
    temperature: string;
    description: string;
    minimum: string;
    maximum: string;
    index: number;
}

function NextDaysInfoCard( { date, temperature, description, minimum, maximum, index } : NextDaysInfoCardProps) {
    return (
        <Card key={index}>
            <Flex justify="space-between" align="center" className="header">
                <span className="date">{date}</span>
                <span className="temp">{temperature}</span>
            </Flex>

            <Flex justify="space-between" align="center" className="content">
                <span className="description">{description}</span>
                <div>
                    <span className="min">min.: {minimum}</span>
                    <span className="max">max.: {maximum}</span>
                </div>
            </Flex>
        </Card>
    );
}

const Card = styled.li`
    border: 1px solid white;
    border-radius: 20rem;
    padding: 16rem;
    display: flex;
    flex-direction: column;
    row-gap: 12rem;
    backdrop-filter: blur(36px);
    background-color: rgba(255, 255, 255, 0.18);

    .date {
        font-size: ${NextDaysInfoFontSizes.date.desktop};
    }

    .temp {
        font-size: ${NextDaysInfoFontSizes.temp.desktop};
        font-weight: 500;
    }

    .description {
        font-size: ${NextDaysInfoFontSizes.description.desktop};
        opacity: .72;
    }

    .min, .max {
        font-size: ${NextDaysInfoFontSizes.minMax.desktop};
        opacity: .72;
    }
`;

export default NextDaysInfoCard;