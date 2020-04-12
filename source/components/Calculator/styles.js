import styled from 'styled-components/native';

export const Content = styled.SafeAreaView`
  flex: 1;
  background-color: #ccc;
  flex-direction: column;
`;

export const Button = styled.Button`
  @font-face {
    font-family: Roboto;
    src: url(../../fonts/Roboto-REgular.ttf);
  }
`;

export const InputArea = styled.View`
  background-color: #353535;
  flex: 7;
  flex-direction: row;
  
`;

export const Operations = styled.View`
  flex: 3;
  background-color: #ccc;
  justify-content: space-around;
  align-items: stretch;
`;

export const Numbers = styled.View`
  flex: 7;
`;

export const RowNumbers = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  align-items: stretch;
`;

export const Result = styled.View`
  flex: 3;
  background-color: #fff;
  justify-content: center;
  align-items: flex-end;
`;

export const ResultText = styled.Text`
  font-size: 30;
`;

export const Calculation = styled.View`
  flex: 1;
  background-color: #f5f5f5;
  justify-content: center;
`;

export const CalculationText = styled.Text`
  font-size: 30;
  padding-left: 15px;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 1;
  align-self: stretch;
`;

export const ButtonValues = styled.Text`
  color: white;
  font-size: 30;
  font-weight: bold;
`;

export const OpValues = styled.Text`
  color: #353535;
  font-size: 30;
  font-weight: bold;
`;
