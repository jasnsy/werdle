import React, { useCallback, useEffect, useContext } from 'react'
import { AppContext } from '../App';
import Key from './Key';

function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const allKeys = keys1.concat(keys2, keys3);

  const { onEnter, onDelete, onSelectLetter, disabledLetters, correctLetters } = useContext(AppContext)

  const handleKeyboard = useCallback((event) => {
    switch (event.key) {
      case "Enter":
        onEnter();
        break;
      case "Backspace":
        onDelete();
        break;
      default:
        if (allKeys.find((key) => key === event.key.toUpperCase())) {
          onSelectLetter(event.key.toUpperCase());
        }
    }
  });

  useEffect(() => {
      document.addEventListener("keydown", handleKeyboard);

      return () => {
          document.removeEventListener("keydown", handleKeyboard);
      };
  }, [handleKeyboard]);

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
        <div className='line1'>
            { keys1.map((key) => <Key keyVal={key} disabled={disabledLetters.includes(key)} correct={correctLetters.includes(key)} key={key} />) }
        </div>
        <div className='line2'>
            { keys2.map((key) =><Key keyVal={key} disabled={disabledLetters.includes(key)} correct={correctLetters.includes(key)} key={key} />) }
        </div>
        <div className='line3'>
            <Key keyVal={"ENTER"} bigKey />
            { keys3.map((key) => <Key keyVal={key} disabled={disabledLetters.includes(key)} correct={correctLetters.includes(key)} key={key} />) }
            <Key keyVal={"DELETE"} bigKey />
        </div>
    </div>
  )
}

export default Keyboard