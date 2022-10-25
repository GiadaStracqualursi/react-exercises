import React from 'react';

export function Sum({numbers = [1, 2, 3, 4]}) {
    const initialValue = 0;
    let result = numbers.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue)
    return (<h1>The result is {result} </h1>);
}
