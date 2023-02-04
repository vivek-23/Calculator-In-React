import React from "react";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class CompoundInterestCalculator extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            principalAmount : '',
            rateOfInterest : '',
            timePeriod : '',
            nTimes : '',
            showResult : false,
            result : []
        };
    }

    setPrincipalAmount(principalAmount){
        this.setState((state) => {
            let newState = state;
            newState.principalAmount = principalAmount;
            newState.showResult = false;
            return newState;
        });
    }

    setRateOfInterest(rateOfInterest){
        this.setState((state) => {
            let newState = state;
            newState.rateOfInterest = rateOfInterest;
            newState.showResult = false;
            return newState;
        });
    }

    setTimePeriod(timePeriod){
        this.setState((state) => {
            let newState = state;
            newState.timePeriod = timePeriod;
            newState.showResult = false;
            return newState;
        });
    }

    setNoOfTimesInAYear(nTimes){
        this.setState((state) => {
            let newState = state;
            newState.nTimes = nTimes;
            newState.showResult = false;
            return newState;
        });
    }

    showResult(){
        this.setState((state) => {
            let newState = state;
            newState.showResult = true;
            newState.result = this.computeCI();
            return newState;
        });
    }

    computeCI(){
        let p = this.state.principalAmount;
        let r = this.state.rateOfInterest;
        let n = this.state.nTimes;
        let t = this.state.timePeriod;
        let constantMultiplier = Math.pow(1 + r / n, n);
        let result= [];
        for(let i = 1; i <= t; ++i){
            let newP = p * constantMultiplier;
            result.push(newP);
            p = newP;
        }
        console.log('computed result', result);
        return result;
    }

    render(){
        return (
            <div className="row col-sm-offset-1 col-md-offset-1 margin-top-2">
                <h3><u>Compound Interest Calculator</u></h3>
                <div className="row margin-top-4">
                    <TextField type="number" min="1" step="1" id="outlined-basic" label="Enter Principal amount(in Rs.)" variant="outlined" onChange={(e) => this.setPrincipalAmount(e.target.value)} className="text-field-width" />
                </div> 
                <div className="row margin-top-2">
                    <TextField id="outlined-basic" label="Enter Rate Of Interest(in percentage)" variant="outlined" className="text-field-width" onChange={(e) => this.setRateOfInterest(e.target.value)}/>
                </div>  
                <div className="row margin-top-2">
                    <TextField type="number" min="1" step="1" id="outlined-basic" label="Enter Time Period(in years)" variant="outlined" className="text-field-width" onChange={(e) => this.setTimePeriod(e.target.value)}/>
                </div>
                <div className="row margin-top-2">
                    <TextField type="number" min="1" step="1" id="outlined-basic" label="Enter no. of times it will be compounded in a year" variant="outlined" className="text-field-width" onChange={(e) => this.setNoOfTimesInAYear(e.target.value)}/>
                </div>
                <div className="row margin-top-2">
                    <Button variant="contained" onClick={() => this.showResult()}>Submit</Button>
                </div>

                {
                    this.state.showResult && (
                        <div className="row margin-top-2">
                            <div className="col-sm-12 col-md-12">                        
                                <Card variant="outlined">
                                    <h2 style={{'text-align':'center'}}><u>Result</u></h2>
                                    <TableContainer component={Paper}>
                                        <Table  aria-label="simple table">
                                            <TableHead>
                                                <TableRow>               
                                                    <TableCell align="center">Year No.</TableCell>
                                                    <TableCell align="center">Rate Of Interest</TableCell>
                                                    <TableCell align="center">Compounded Times Per Year</TableCell>
                                                    <TableCell align="center">Principal Amount(In Rs)</TableCell>               
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    this.state.result.map((val, idx) => {
                                                        return (
                                                            <TableRow key={idx}>
                                                                <TableCell component="th" scope="row" align="center">
                                                                {idx + 1}
                                                                </TableCell>
                                                                <TableCell align="center">{this.state.rateOfInterest}</TableCell>
                                                                <TableCell align="center">{this.state.nTimes}</TableCell>
                                                                <TableCell align="center">{val}</TableCell>         
                                                            </TableRow>
                                                        )
                                                    })
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Card>
                            </div>                    
                        </div>
                    )
                }            
            </div>
        );
    }
}

export default CompoundInterestCalculator;