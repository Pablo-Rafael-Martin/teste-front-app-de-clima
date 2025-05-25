import { Flex } from "antd";
import styled from "styled-components";

function RowCurrentInfo() {
    return ( 
        <WrapperCurrentInfo>
            <Flex style={{ width: '100%', justifyContent: 'space-between', alignItems: 'flex-end' }}>

                <Container1>
                    <div className="row-1">
                        <div className="icone">Icone</div>
                    </div>

                    <div className="row-2"></div>

                    <div className="row-3"></div>
                </Container1>
                
            </Flex>
        </WrapperCurrentInfo>
     );
}

const WrapperCurrentInfo = styled.div`
    width: 100%;
    flex-shrink: 0;
`;

const Container1 = styled.div`
    background-color: red;
    flex-shrink: 0;
`;

export default RowCurrentInfo;