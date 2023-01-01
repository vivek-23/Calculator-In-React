import React from "react";
import SimpleInterestCalculator from './SimpleInterestCalculator';
import CompoundInterestCalculator from './CompoundInterestCalculator';

class Calculator extends React.Component{
    render(){
        return (
            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <SimpleInterestCalculator />
                </div>
                <div className="col-sm-6 col-md-6">
                    <CompoundInterestCalculator />
                </div>                
            </div>
        );
    }
}

export default Calculator;