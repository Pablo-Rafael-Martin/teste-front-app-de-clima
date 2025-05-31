// 'use client';

import styled from "styled-components";
import NextDaysInfoCard from "./NextDaysInfoCard";
import TodaysInfo from "./TodaysInfo";
import NextDaysInfo from "./NextDaysInfo";

// create an array containing objects with the following properties:
// temperature: string;
// time: string; from 00:00 to 23:00;


function RowHistoricInfo() {
    return (
        <WrapperRowHistoricInfo>
            <TodaysInfo />

            <NextDaysInfo />
        </WrapperRowHistoricInfo>
    );
}

export default RowHistoricInfo;

const WrapperRowHistoricInfo = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
`;

