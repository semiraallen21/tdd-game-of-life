import { expect } from "chai";
import CellState from "../CellState";
import Cell from "../Cell";

describe( "Cell" , () => {


   it  ( "Should be initialized with a cellState" , () => {

       const aliveCell = new Cell(CellState.ALIVE);
       expect(aliveCell.state).to.equal(CellState.ALIVE);


       const deadCell = new Cell(CellState.DEAD);
       expect(deadCell.state).to.equal(CellState.DEAD);

    });




});
