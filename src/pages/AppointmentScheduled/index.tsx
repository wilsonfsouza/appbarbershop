import React, { useCallback, useMemo } from 'react';
import { Container, Title, Description, OkButton, OkButtonText } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import enUS from 'date-fns/locale/en-US';

interface RouteParams {
  date: number;
}

const AppointmentScheduled: React.FunctionComponent = () => {
  const { reset } = useNavigation();
  const { params } = useRoute();

  const routeParams = params as RouteParams;

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Dashboard'
        }
      ],
      index: 0
    })
  }, [reset]);

  const formattedAppointmentDate = useMemo(() => {
    return format(
      routeParams.date,
      "PPPP 'at' hh aaaa",
      { locale: enUS });
  }, [routeParams.date]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />
      <Title>Appointment Scheduled</Title>
      <Description>{formattedAppointmentDate}</Description>
      <OkButton onPress={handleOkPressed}>
        <OkButtonText>
          Ok
        </OkButtonText>
      </OkButton>
    </Container>
  );
}

export default AppointmentScheduled;
