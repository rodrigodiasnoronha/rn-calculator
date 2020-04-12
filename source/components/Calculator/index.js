import React, { useState } from 'react';
import {
  Content,
  Button,
  Result,
  Calculation,
  InputArea,
  Numbers,
  Operations,
  RowNumbers,
  ResultText,
  CalculationText,
  TouchableOpacity,
  ButtonValues,
  OpValues,
} from './styles';
import   { StatusBar } from 'react-native'
function Calculator() {
  const [buttonValue, setButtonValue] = useState('');
  const [op, setOp] = useState('');
  const [result, setResult] = useState(0);
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);

  function handlePressButton(value) {
    if (!buttonValue) setButtonValue(value);

    setButtonValue(`${buttonValue}${value}`);
  }

  function handleAddOp(value) {
    if (!numberOne) {
      setNumberOne(buttonValue);
    } else {
      setNumberTwo(buttonValue);
    }
    if (numberOne) {
      setButtonValue('');
      setOp(value);
    }
  }

  function handleSubmitResult() {
    if (numberOne && numberTwo) {
      if (op === '+') setResult(numberOne + numberTwo);
      if (op === '-') setResult(numberOne - numberTwo);
      if (op === '*') setResult(numberOne * numberTwo);
      if (op === '/') setResult(numberOne / numberTwo);
    } else {
      return;
    }
  }

  function reset() {
    setButtonValue(0);
    setResult(0);
    setNumberOne(0);
    setNumberTwo(0);
    setOp('');
  }

  return (
    <>

    
<StatusBar barStyle={'ligth-content'} backgroundColor="teal" />

    <Content>
      <Result>
        <ResultText>{buttonValue}</ResultText>
      </Result>

      <Calculation>
        <CalculationText>{result}</CalculationText>
      </Calculation>

      <InputArea>
        <Numbers>
          <RowNumbers>
            <TouchableOpacity onPress={event => handlePressButton(1)}>
              <ButtonValues>1</ButtonValues>
            </TouchableOpacity>
            <TouchableOpacity onPress={event => handlePressButton(2)}>
              <ButtonValues>2</ButtonValues>
            </TouchableOpacity>
            <TouchableOpacity onPress={event => handlePressButton(3)}>
              <ButtonValues>3</ButtonValues>
            </TouchableOpacity>
          </RowNumbers>

          <RowNumbers>
            <TouchableOpacity onPress={event => handlePressButton(4)}>
              <ButtonValues>4</ButtonValues>
            </TouchableOpacity>
            <TouchableOpacity onPress={event => handlePressButton(5)}>
              <ButtonValues>5</ButtonValues>
            </TouchableOpacity>
            <TouchableOpacity onPress={event => handlePressButton(6)}>
              <ButtonValues>6</ButtonValues>
            </TouchableOpacity>
          </RowNumbers>
          <RowNumbers>
            <TouchableOpacity onPress={event => handlePressButton(7)}>
              <ButtonValues>7</ButtonValues>
            </TouchableOpacity>
            <TouchableOpacity onPress={event => handlePressButton(8)}>
              <ButtonValues>8</ButtonValues>
            </TouchableOpacity>
            <TouchableOpacity onPress={event => handlePressButton(9)}>
              <ButtonValues>9</ButtonValues>
            </TouchableOpacity>
          </RowNumbers>
          <RowNumbers>
            <TouchableOpacity onPress={event => handlePressButton('.')}>
              <ButtonValues>.</ButtonValues>
            </TouchableOpacity>
            <TouchableOpacity onPress={event => handlePressButton(0)}>
              <ButtonValues>0</ButtonValues>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmitResult}>
              <ButtonValues>=</ButtonValues>
            </TouchableOpacity>
          </RowNumbers>
        </Numbers>
        <Operations>
          <TouchableOpacity onPress={reset}>
            <OpValues>DEL</OpValues>
          </TouchableOpacity>
          <TouchableOpacity onPress={event => handleAddOp('/')}>
            <OpValues>/</OpValues>
          </TouchableOpacity>
          <TouchableOpacity onPress={event => handleAddOp('*')}>
            <OpValues>*</OpValues>
          </TouchableOpacity>
          <TouchableOpacity onPress={event => handleAddOp('+')}>
            <OpValues>+</OpValues>
          </TouchableOpacity>
          <TouchableOpacity onPress={event => handleAddOp('-')}>
            <OpValues>-</OpValues>
          </TouchableOpacity>
        </Operations>
      </InputArea>
    </Content>
    </>
  );
}

export default Calculator;
