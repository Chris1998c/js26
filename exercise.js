function sum(...numeri) {
    return numeri.reduce((totale,corrente)=>totale + corrente, 0);
}

console.log(sum(1, 2, 3, 4, 5));