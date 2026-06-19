//Array of Employee Objects
let employeesArray = [
    {
        name:"Joe",
        hourlyRate:11,
        hoursWorked:20
    },{
        name:"Jane",
        hourlyRate:13.50,
        hoursWorked:70
    },{
        name:"Bob",
        hourlyRate:10,
        hoursWorked:20
    },{
        name:"Larry",
        hourlyRate:10,
        hoursWorked:30
    },{
        name:"Sebastian",
        hourlyRate:16,
        hoursWorked:60
    },{
        name:"Jess",
        hourlyRate:20,
        hoursWorked:30
    }]

//function that calculates Employee's base pay
function calculateBasePay(rate, hours){
    if (hours >= 40){
        return (rate * 40);
    }else{
        return (rate * hours);
    }
}

//function that calulates overtime pay
let calculateOvertimePay = function(rate, hours){
    let overtime = hours - 40;
    if (overtime < 0){
        return 0;
    }else{
        return (rate * overtime * 1.5);
    }
}

//function that calculates taxes by deducting a 15% tax.
const TAXRATE = 0.15;
const calculateTaxes = (grosspay) => grosspay*(1-TAXRATE);