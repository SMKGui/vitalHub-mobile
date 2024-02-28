import { Modal } from "react-native"
import { AppointmentModal, AppointmentModalView, ButtonConsulta, ButtonTextConsulta, SubTitleModal } from "./Style"
import { Title } from "../Title/Style"
import { FilterAppointment } from "../FilterAppointment/FilterAppointment"
import { ProntuarioInputMenor } from "../Input/Style"
import { Button, ButtonSecondary } from "../Button/Style"
import { ButtonSecondaryTitle, ButtonTitle } from "../ButtonTitle/Style"
import { ButtonCard, ButtonText } from "../AppointmentCard/Style"

export const AgendarModal = ({
    visible,
    setShowModalAgendar,
    ...rest
}) => {
    return (
        <Modal
            {...rest}
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            <AppointmentModal>
                <AppointmentModalView>

                    <Title>Agendar consulta</Title>

                    <SubTitleModal>Qual o nível da consulta</SubTitleModal>


                    <FilterAppointment>
                        <ButtonConsulta>
                            <ButtonTextConsulta>Rotina</ButtonTextConsulta>
                        </ButtonConsulta>
                        <ButtonConsulta>
                            <ButtonTextConsulta>Exame</ButtonTextConsulta>
                        </ButtonConsulta>
                        <ButtonConsulta>
                            <ButtonTextConsulta>Urgência</ButtonTextConsulta>
                        </ButtonConsulta>
                    </FilterAppointment>

                    <SubTitleModal>Informe a localização desejada</SubTitleModal>

                    <ProntuarioInputMenor
                        placeholder="Informe a localização"
                    />

                    <Button>
                        <ButtonTitle>Continuar</ButtonTitle>
                    </Button>

                    <ButtonSecondary onPress={() => setShowModalAgendar(false)}>
                        <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
                    </ButtonSecondary>

                </AppointmentModalView>
            </AppointmentModal>


        </Modal>
    )
}