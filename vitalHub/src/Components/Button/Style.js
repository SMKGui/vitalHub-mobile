import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;

    background-color: #496bba;
    border: 1px solid #496bba;
    margin-top: 15px;
    padding: 12px 8px 12px 8px;
    border-radius: 5px;

    align-items: center;
    justify-content: center;
`;

export const ButtonGoogle = styled(Button)`
    background-color: #FAFAFA;
    flex-direction: row;
    gap: 27px;
`

export const ButtonMenor = styled.TouchableHighlight`
    padding: 12px 14px;
    border-radius: 5px;
    
    ${props => props.clickButton ? css`
        background-color: #496bba;
    `: css`
        background-color: transparent;
        border: 2px solid #607ec5
        `}
`

export const ButtonMenorBranco = styled(ButtonMenor)`
    background-color: #FBFBFB;
    border: #607EC5;
`

export const ButtonModal = styled(Button)`
    width: 80%;
`

export const ButtonSecondary = styled(Button)`
    background-color: transparent;
    border: none;
`
export const ButtonCinza = styled(Button)`
    background-color: #ACABB7;
    border: none;
`

export const IconModal = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 5px;
    align-items: end;
`

export const ImagemBotao = styled.ImageBackground`
    width: 60px;
    height: 60px;
`

export const ViewIcon = styled.View`
    position: fixed;
    left: 150px;
    bottom: 30px;
`