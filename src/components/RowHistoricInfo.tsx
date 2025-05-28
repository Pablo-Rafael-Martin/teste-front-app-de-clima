import styled from "styled-components";


function RowHistoricInfo() {
    return (
        <WrapperRowHistoricInfo>
            <TodaysInfo>
                <Line></Line>


            </TodaysInfo>

            <div className="next-days-info">

            </div>
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

const TodaysInfo = styled.div`
    position: relative;
    width: 100%;
    max-width: 66.6666%;
    padding: 0;
    padding-left: 16px;
    padding-right: 16px;
`;

const Line = styled.div`
    position: relative;
    width: 100%;
    height: 0px;
    
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
