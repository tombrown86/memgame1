
import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const StyledButtonTO = styled(TouchableOpacity)`
  background-color: #1565C0;
  border-radius: 25px;
  padding: 15px 30px;
  margin: 0 15px;
  flex-direction: row;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
`;

const StyledButton = ({ onPress, text, iconName }) => {
  return (
    <StyledButtonTO onPress={onPress}>
      <Icon name={iconName} size={28} color="#fff" />
      <ButtonText>{text}</ButtonText>
    </StyledButtonTO>
  );
};

export default StyledButton;
