import { Modal } from "react-native"
import { ConfirmarConteudoView, ConfirmarModalView } from "./Style"
import { ModalContent } from "../CancelationModal/Style"
import { ModalContentSubTitle, ModalInfo, ModalSubTitle, Title } from "../Title/Style"
import { Button, ButtonSecondary } from "../Button/Style"
import { ButtonSecondaryTitle, ButtonTitle } from "../ButtonTitle/Style"
import { ContentAccount, TextAccountLink } from "../ContentAccount/Style"

export const ConfirmarModal = ({
    visible,
    setShowModalConfirm,
    ...rest
}) => {
    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            <ConfirmarModalView>
                <ModalContent>
                    <Title>Agendar Consulta</Title>

                    <ModalSubTitle>Consulte os dados selecionados para a sua consulta</ModalSubTitle>

                    <ConfirmarConteudoView>

                    <ModalContentSubTitle>Data da consulta</ModalContentSubTitle>
                    <ModalInfo>1 de Novembro de 2023</ModalInfo>

                    <ModalContentSubTitle>Médico(a) da consulta</ModalContentSubTitle>
                    <ModalInfo>Dra Alessandra</ModalInfo>
                    <ModalInfo>Demartologa, Esteticista</ModalInfo>

                    <ModalContentSubTitle>Local da consulta</ModalContentSubTitle>
                    <ModalInfo>São Paulo, SP</ModalInfo>

                    <ModalContentSubTitle>Tipo da consulta</ModalContentSubTitle>
                    <ModalInfo>Rotina</ModalInfo>
                    </ConfirmarConteudoView>

                    <Button>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </Button>

                    <ButtonSecondary onPress={() => setShowModalConfirm(false)}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonSecondary>
                    
                </ModalContent>
            </ConfirmarModalView>

        </Modal>
    )
}