import React from 'react';

export function Sum({numbers}) {
   
    let result = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    return (<h1>The result is {result} </h1>);
}
