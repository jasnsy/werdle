import React, { useContext } from 'react'
import { AppContext } from '../App';

function Key({ keyVal, bigKey, disabled, correct }) {
  const { onEnter, onDelete, onSelectLetter } = useContext(AppContext)

  const selectLetter = () => {
    switch (keyVal) {
      case "ENTER":
        onEnter();
        break;
      case "DELETE":
        onDelete();
        break;
      default:
        onSelectLetter(keyVal);
    }
  }

  return (
    <div className={keyVal === "ENTER" ? 'enterKey' : keyVal === "DELETE" ? 'delKey' : 'key'} id={ bigKey ? "big" : disabled ? "disabled" : correct ? "correct" : undefined } onClick={selectLetter}>
        {keyVal}
    </div>
  )
}

export default Key