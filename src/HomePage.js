import { useState } from 'react';
import NavBar from './NavBar';
import Board from './Board';

/* 
Jagged Array
Get row of specified index as opposed to checking move (rename function)
Check which boxes have been checked this turn "old state" and "working state" (new moves list) and "visible board"
*/

export default function Website() {
  return (
    <div>
      <Board />
    </div>
  );
}