/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
*/

function ex_1_F(array) {
    sum = 0;
    array.every(function (x) {
        if (x < 0)
            return false;
        else {
            sum += x;
            return true;
        }
    });
    return sum;
    
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/

function ex_2_F(n) {
    a = [];
    for (n; n > 0; n--) {
        a.push(2 * n - 1);
    }
    return a.reduce(function (acc, x) {return acc + x;});
}

/*Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/

function ex_3_F(array) {
    return array.reduce(function (acc, x) {return acc + x;}) / array.length;
}

/*
Esercizio 4

Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri

compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,

calcolare la somma nell’intervallo [b,a]

Esempio:

sumInterval(3, 5) => 12

sumInterval(5, 3) => 12
*/

function ex_4_F(a, b) {
    if (a < 0 || b < 0)
        return 0;
    else if (a > b)
        return sumInterval(b, a);
    else
        return sumInterval(a, b);
}

function sumInterval(a, b) {
    vett = [];
    for (a; a <= b; a++) {
        vett.push(a);
    }
    return vett.reduce(function (acc, x) {return acc + x;});
}

/*
Esercizio 5

Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo

operatore somma.

Esempio:

mult(2, 3) => 6
*/

function ex_5_F(a, b) {
    if (a < 0 || b < 0)
        return 0;
    else
        return mult(a, b);
}

function mult(a, b) {
    vett = [];
    for (i = 0; i < b; i++) {
        vett.push(a);
    }
    return vett.reduce(function (acc, x) {return acc + x;});
}

/*
Esercizio 6

Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite

l’utilizzo dei soli operatori somma e sottrazione.

Esempio:

div(5, 3) => 1 resto 2*/

function ex_6_F(a, b) {
    if (a <= 0 || b <= 0)
        return 0;
    else
        return divisione(a, b);
}

function divisione(a, b) {
    array = [a];
    while(!(a - b < 0)) {
        array.push(a - b);
        a -= b;
    }
    n = array.length;
    return [n - 1, array[n - 1]];
}

/*
Esercizio 7

Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli

operatori somma, sottrazione e della funzione mult.

Esempio:

pow(2, 3) => 8
*/

function ex_7_F(x, y) {
    if (x < 0 || y < 0)
        return 0;
    else
        return pow(x, y);
}

function pow(x, y) {
    array = [x];
    while (y > 1) {
        array.push(mult(x, array[array.length - 1]));
        y--;
    }
    return array[array.length - 1];
}

/*
Esercizio 8

Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli

oggetti in un array bidimensionale n x n.
*/

function ex_8_F(array) {
    n = Math.sqrt(array.length);
    matrix = [];
    i = 0;
    while(array.length > 0) {
        matrix[i] = array.splice(0, n);
        i++;
    }
    return matrix;
}

/*
Esercizio 9

Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli

elementi.

Esempio:

Input: A = {2, 5, 8}

Output A= {8, 5, 2}
*/

function ex_9_F(array) {
    return array.reverse();
}

/*
Esercizio 10

Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi

contenenti a.

Esempio:

replicate(3, 4) => A= {3, 3, 3, 3}
*/

function ex_10_F(a, n) {
    if (a <= 0 || n <= 0)
        return 0;
    else {
        array = [];
        while (n) {
            array.push(a);
            n--;
        }
        return array;
    }
}

/*
Esercizio 11

Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi

dispari precedano nello stesso ordine tutti gli elementi pari.

Esempio

Input: A = {2, 5, 1, 8}

Output: A = {5, 1, 2, 8}
*/

function ex_11_F(array) {
    odd = array.filter(function (x) {return x % 2 != 0;});
    even = array.filter(function (x) {return x % 2 == 0;});
    return odd.concat(even);
}