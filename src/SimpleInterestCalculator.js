import React from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class SimpleInterestCalculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                principalAmount : '',
                rateOfInterest : '',
                timePeriod : '',
                showResult : false,
                result : ''
            };
    }

    setPrincipal(principalAmount){
        this.setState((state) => {
            let newState = state;
            newState.principalAmount = principalAmount;
            return newState;
        });

        if(this.state.showResult){
            this.showResult();
        }
    }

    setROI(roi){
        this.setState((state) => {
            let newState = state;
            newState.rateOfInterest = roi;
            return newState;
        });

        if(this.state.showResult){
            this.showResult();
        }
    }

    setTimePeriod(timePeriod){
        this.setState((state) => {
            let newState = state;
            newState.timePeriod = timePeriod;
            return newState;
        });

        if(this.state.showResult){
            this.showResult();
        }
    }

    showResult(){
        this.setState((state) => {
            let newState = state;
            newState.showResult = true;
            newState.result = state.principalAmount * state.rateOfInterest * state.timePeriod / 100;
            return newState;
        });
    }

    render(){
        return (
            <div className="row col-sm-offset-1 col-md-offset-1 margin-top-2">
                <h1><u>Simple Interest Calculator</u></h1>
                <div className="row margin-top-4">
                    <TextField id="outlined-basic" label="Enter Principal amount(in Rs.)" variant="outlined" onChange={(e) => this.setPrincipal(e.target.value)} className="text-field-width" />
                </div> 
                <div className="row margin-top-2">
                    <TextField id="outlined-basic" label="Enter Rate Of Interest(in percentage)" variant="outlined" className="text-field-width" onChange={(e) => this.setROI(e.target.value)}/>
                </div>  
                <div className="row margin-top-2">
                    <TextField id="outlined-basic" label="Enter Time Period(in years)" variant="outlined" className="text-field-width" onChange={(e) => this.setTimePeriod(e.target.value)}/>
                </div>
                <div className="row margin-top-2">
                    <Button variant="contained" onClick={() => this.showResult()}>Submit</Button>
                </div>

                {
                    this.state.showResult && (
                        <div className="row margin-top-2">
                            <div className="col-sm-6 col-md-6">                        
                                <Card variant="outlined">
                                    <h3>Result:</h3>
                                    Your total receivable amount with investment of Rs {this.state.principalAmount}, with rate of interest {this.state.rateOfInterest}% for a time period of {this.state.timePeriod} years is <b>Rs {this.state.result}.</b>
                                </Card>
                            </div>                    
                        </div>
                    )
                }            
            </div>
        );
    }
}

export default SimpleInterestCalculator;