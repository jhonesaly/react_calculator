//Importando componentes
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {
  
  const [visorNumber, setVisorNumber] = useState('0');
  const [answerNumber, setAnswerNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const [state, setState] = useState('on')

  const handleOff = () => {
    setVisorNumber('')
    setState('off')
  };

  const handleAddNumber = (num) => {
    if (state === 'on'){
      setVisorNumber(prev => `${prev === '0' ? '' : prev}${num}`);
    }
  };

  const handleOnClear = () => {
    setState('on')
    setOperation('')
    setVisorNumber('0')
    setAnswerNumber('0')
  };

  const showAnswer = () => {
    if (state === 'on'){
    setVisorNumber(answerNumber);
    }
  };

  const handleEquals = () => {
    if (state === 'on' && operation !== '' && answerNumber!== '0' && visorNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'x':
          handleMultiplicateNumbers();
          break;
        case '/':
          handleDivisionNumbers();
          break;
        case '^':
          handleExponencialNumbers();
          break;
        default:
          showAnswer();
          break;
      }
    }
  };

  const handleSumNumbers = () => {
    if (state === 'on'){
    if (operation !== '+'){
      setAnswerNumber(String(visorNumber));
      setVisorNumber('0');
      setOperation('+');
    }else {
      const sum = Number(answerNumber) + Number(visorNumber);
      setVisorNumber(String(sum));
      setAnswerNumber(visorNumber);
    }}
  };

  const handleMinusNumbers = () => {
    if (state === 'on'){
    if (operation !== '-'){
      setAnswerNumber(String(visorNumber));
      setVisorNumber('0');
      setOperation('-');
    }else {
      const sum = Number(answerNumber) - Number(visorNumber);
      setVisorNumber(String(sum));
      setAnswerNumber(visorNumber);
    }}
  };

  const handleMultiplicateNumbers = () => {
    if (state === 'on'){
    if (operation !== 'x'){
      setAnswerNumber(String(visorNumber));
      setVisorNumber('0');
      setOperation('x');
    }else {
      const sum = Number(answerNumber) * Number(visorNumber);
      setVisorNumber(String(sum));
      setAnswerNumber(visorNumber);
    }}
  };

  const handleDivisionNumbers = () => {
    if (state === 'on'){
    if (operation !== '/'){
      setAnswerNumber(String(visorNumber));
      setVisorNumber('0');
      setOperation('/');
    }else {
      const sum = Number(answerNumber) / Number(visorNumber);
      setVisorNumber(String(sum));
      setAnswerNumber(visorNumber);
    }}
  };

  const handleExponencialNumbers = () => {
    if (state === 'on'){
    if (operation !== '^'){
      setAnswerNumber(String(visorNumber));
      setVisorNumber('0');
      setOperation('^');
    }else {
      const sum = Number(answerNumber) ** Number(visorNumber);
      setVisorNumber(String(sum));
      setAnswerNumber(visorNumber);
    }}
  };

  return (
      <Container>
        <Content>
          <Input value={visorNumber}/>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="Off" onClick={handleOff}/>
            <Button label="On" onClick={handleOnClear}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="x" onClick={handleMultiplicateNumbers}/>
            <Button label="/" onClick={handleDivisionNumbers}/>
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="+" onClick={handleSumNumbers}/>
            <Button label="-" onClick={handleMinusNumbers}/>
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="," onClick={() => handleAddNumber('.')}/>
            <Button label="^" onClick={handleExponencialNumbers}/>
            <Button label="A"onClick={showAnswer}/>
            <Button label="=" onClick={handleEquals}/>
          </Row>
        </Content>
      </Container>
  );
};

export default App;