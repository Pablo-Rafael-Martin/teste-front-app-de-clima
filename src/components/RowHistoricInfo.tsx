// 'use client';

import { CloudSunIcon } from "@phosphor-icons/react";
import { Flex } from "antd";
import styled from "styled-components";

// create an array containing objects with the following properties:
// temperature: string;
// time: string; from 00:00 to 23:00;

const historicData = [
    { temperature: '20°', time: '00:00' },
    { temperature: '21°', time: '01:00' },
    { temperature: '22°', time: '02:00' },
    { temperature: '23°', time: '03:00' },
    { temperature: '24°', time: '04:00' },
    { temperature: '25°', time: '05:00' },
    { temperature: '26°', time: '06:00' },
    { temperature: '27°', time: '07:00' },
    { temperature: '28°', time: '08:00' },
    { temperature: '29°', time: '09:00' },
    { temperature: '30°', time: '10:00' },
    { temperature: '31°', time: '11:00' },
    { temperature: '32°', time: '12:00' },
    { temperature: '33°', time: '13:00' },
    { temperature: '34°', time: '14:00' },
    { temperature: '35°', time: '15:00' },
    { temperature: '36°', time: '16:00' },
    { temperature: '37°', time: '17:00' },
    { temperature: '38°', time: '18:00' },
    { temperature: '39°', time: '19:00' },
    { temperature: '40°', time: '20:00' },
    { temperature: '41°', time: '21:00' },
    { temperature: '42°', time: '22:00' },
    { temperature: '43°', time: '23:00' }
];

const forecastData = [
    {
        dia: "Hoje",
        descricao: "Parcialmente nublado",
        temperatura: "20º",
        minima: "18º",
        maxima: "28º",
    },
    {
        dia: "Amanhã",
        descricao: "Ensolarado",
        temperatura: "20º",
        minima: "18º",
        maxima: "28º",
    },
    {
        dia: "Quarta",
        descricao: "Chuva",
        temperatura: "20º",
        minima: "18º",
        maxima: "28º",
    },
    {
        dia: "Quinta",
        descricao: "Tempestade",
        temperatura: "20º",
        minima: "18º",
        maxima: "28º",
    },
    {
        dia: "Sexta",
        descricao: "Frio intenso",
        temperatura: "20º",
        minima: "18º",
        maxima: "28º",
    },
    {
        dia: "Sábado",
        descricao: "Nublado",
        temperatura: "20º",
        minima: "18º",
        maxima: "28º",
    },
    {
        dia: "Sábado",
        descricao: "Ensolarado",
        temperatura: "20º",
        minima: "18º",
        maxima: "28º",
    },
];


function RowHistoricInfo() {
    return (
        <WrapperRowHistoricInfo>
            {/* <GlobalVars /> */}
            <TodaysInfo>
                <Line></Line>

                <ContainerTodaysInfoCards>
                    {
                        historicData.map((data, index) => {
                            return (
                                <TodaysInfoCard key={index}>
                                    <div className="time">{data.time}</div>
                                    <CloudSunIcon size="28rem" />
                                    <div className="temperature">{data.temperature}</div>
                                </TodaysInfoCard>
                            )
                        })
                    }
                </ContainerTodaysInfoCards>
            </TodaysInfo>

            <NextDaysInfo className="next-days-info">
                <ContainerNextDaysInfoCards>
                    <h2>Próximos dias</h2>
                    {
                        forecastData.map((data, index) => {
                            return (
                                <NextDaysInfoCard key={index}>
                                    <Flex justify="space-between" align="center" className="header">
                                        <span className="date">{data.dia}</span>
                                        <span className="temp">{data.temperatura}</span>
                                    </Flex>

                                    <Flex justify="space-between" align="center" className="content">
                                        <span className="description">{data.descricao}</span>
                                        <div>
                                            <span className="min">min.: {data.minima}</span>
                                            <span className="max">max.: {data.maxima}</span>
                                        </div>
                                    </Flex>
                                </NextDaysInfoCard>
                            )
                        })
                    }
                </ContainerNextDaysInfoCards>
            </NextDaysInfo>
        </WrapperRowHistoricInfo>
    );
}

export default RowHistoricInfo;

const WrapperRowHistoricInfo = styled.div`
    width: 100%;
    /* border: 1px solid white;
    border-color: rgba(255, 255, 255, 0.1); */
    display: flex;
`;

const NextDaysInfo = styled.div`
    width: 33.3334%;
    /* height: 500rem; */
    flex: 1;
    padding-left: 16rem;
`;

const ContainerNextDaysInfoCards = styled.ul`
    width: 100%;
    padding: 24rem;
`;

const NextDaysInfoCard = styled.li`

`;

const TodaysInfo = styled.div`
    position: relative;
    width: 100%;
    max-width: 66.6666%;
    padding: 0;
    padding-left: 16rem;
    padding-right: 16rem;
`;

const ContainerTodaysInfoCards = styled.div`
    width: 100%;
    padding-top: 42rem;
    padding-bottom: 42rem;
    display: flex;
    column-gap: 8rem;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    overflow: auto;
`;

const TodaysInfoCard = styled.div`
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
        font-size: 24rem;
        font-weight: 600;
    }

    .time {
        font-size: 12rem;
        font-weight: 400;
    }
`;

const Line = styled.div`
    position: absolute;
    width: calc(100% - 32rem);
    left: 16rem;
    top: 0;
    z-index: 1;
    height: 0rem;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: white;
        opacity: .5;
    }
`;
