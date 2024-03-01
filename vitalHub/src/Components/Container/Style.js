import styled from "styled-components";

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #fafafa;
    gap: 5px;
`

export const ContainerLeft = styled(Container)`
    align-items: flex-start;
`

export const ContainerRow = styled.View`
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

export const ContainerConsultas = styled.SafeAreaView`
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    margin-top: 38px;
`

export const ContainerClinicas = styled.View`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-top: 30px;
    gap: 20px;
    overflow: hidden;
`

export const ContainerSpace = styled.View`
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
`