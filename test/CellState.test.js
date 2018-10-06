import { expect } from "chai";


import CellState from "../CellState";

describe( "CellState" , () => {

    it ( "Should have an ALIVE state" , () => {

        expect (CellState.ALIVE).to.equal(1);
    });

    it("Should have an DEAD state", () => {


        expect(CellState.DEAD).to.equal(0);
    });


});
