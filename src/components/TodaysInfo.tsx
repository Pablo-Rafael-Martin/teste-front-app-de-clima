import styled from "styled-components";
import TodaysInfoCard from "./TodaysInfoCard";


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


function TodaysInfo() {
    return (
        <WrapperTodaysInfo>
            <Line></Line>

            <ContainerTodaysInfoCards>
                {
                    historicData.map((data, index) => {
                        return (
                            <TodaysInfoCard index={index} temperature={data.temperature} time={data.time} />
                        )
                    })
                }
            </ContainerTodaysInfoCards>
        </WrapperTodaysInfo>
    );
}

const WrapperTodaysInfo = styled.div`
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


export default TodaysInfo;