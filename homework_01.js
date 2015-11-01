/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore negativo
*/
// Iterative
// Spazio: O(1) 
// Tempo: O(n)
function sumAllN(a) {
    sum = 0;
    for (i = 0; (i < a.length) && (a[i] >= 0); i++) {
        sum = sum + a[i];
    }
    return sum;
}


// Ricorsive
// Spazio: O(n) 
// Tempo: O(n)
function sumAllNR(a) {
    if (a.length == 0 || a[0] < 0)
        return 0;
    else
        return a[0] + sumAllNR(a.slice(1));
}

// Per Tiziano.
function ex_1_I(myarray) {
    return sumAllN(myarray);
}

function ex_1_R(myarray) {
    return sumAllNR(myarray);
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
// Spazio: O(1) 
// Tempo: O(n)
function firstOdd(n) {
    var tot = 0;
    for(i = 0; i < n; ++i) {
        tot += 1 + 2 * i;
    }
    return tot;
}


// Spazio: O(n) 
// Tempo: O(n)
function firstOddR(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + firstOddR(n - 1);
    }
}



// Per Tiziano.
function ex_2_I(x) {
    return firstOdd(x);
}

function ex_2_R(x) {
    return firstOddR(x);
}

/*Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/

// Iterative
// Spazio: O(1) 
// Tempo: O(n)
function avarege(a) {
    sum = 0;
    for (i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum / a.length;
}

function ex_3_I(a) {
    return avarege(a);
}

// Ricorsive
// Spazio: O(1) 
// Tempo: O(n)
function avgR(a, l, sum) {
    if (a.length == 0)
        return sum / l;
    else
        return avgR(a.slice(1), l, sum + a[0])
}

function ex_3_R(a) {
    return avgR(a, a.length, 0);
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

function sumInterval(a, b) {
    app = 0;
    sum = 0;
    if (a > b) {
        app = a;
        a = b;
        b = app;
    }
    for (a; a <= b; a++) {
        sum += a;
    }
    return sum;
}

function ex_4_I(a, b) {
    return sumInterval(a, b);
}

function sumIntervalR(a, b) {
    if (a > b)
        return 0;
    else
        return a + sumIntervalR(a + 1, b); // js ODIA l operatore ++ nella chiamata ricorsiva
}

function ex_4_R(a, b) {
    if (a > b)
        return sumIntervalR(b, a);
    else
        return sumIntervalR(a, b);
}

/*
Esercizio 5

Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo

operatore somma.

Esempio:

mult(2, 3) => 6
*/

function mult(a, b) {
    if (a < 0 || b < 0)
        return 0;
    m = 0;
    for (i = 0; i < b; i++) {
        m += a;
    }
    return m;
}

function ex_5_I(a, b) {
    return mult(a, b);
}

function multR(a, b) {
    if (a < 0 || b < 0)
        return 0;
    if (b == 0)
        return 0;
    else
        return a + multR(a, b - 1);
}

function ex_5_R(a, b) {
    return multR(a, b);
}

/*
Esercizio 6

Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite

l’utilizzo dei soli operatori somma e sottrazione.

Esempio:

div(5, 3) => 1 resto 2*/

function div(a, b) {
    if (a < 0 || b < 0)
        return 0;
    ris = 0;
    while ((a - b) >= 0) {
        ris++;
        a = a - b;
    } 
    return ris + " resto " + a;
}

function ex_6_I(a, b) {
    return div(a, b);
}

function divR(a, b) {
    if (a < b)
        return 0;
    else
        return 1 + divR(a - b, b);
}

function F_divR(a, b) {
    if (a < 0 || b < 0)
        return 0;
    else {
        ris = divR(a, b);
        return ris + " resto " + (a - (mult(ris, b)));
    }
}

function ex_6_R(a, b) {
    return F_divR(a, b);
}

/*
Esercizio 7

Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli

operatori somma, sottrazione e della funzione mult.

Esempio:

pow(2, 3) => 8
*/

function powIter(x, y) {
    potenza = x;
    while (y > 1) {
        potenza = mult(potenza, x);
        y--;
    }
    return potenza;
}

function ex_7_I(x, y) {
    return powIter(x, y);
}

function pow(x, y, potenza) {
    if (y == 1)
        return potenza;
    else
        return pow(x, y - 1, mult(x, potenza));
}

function ex_7_R(x, y) {
    return pow(x, y, x);
}

/*
Esercizio 8

Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli

oggetti in un array bidimensionale n x n.
*/

function matrix(a) {
    matrice = [];
    v = 0;
    n = Math.sqrt(a.length);
    for (i = 0; i < n; i++) {
        matrice[i] = [];
        for (j = 0; j < n; j++) {
            matrice[i][j] = a[v];
            v++;
        }
    }
    return matrice;
}

function ex_8_I(a) {
    return matrix(a);
}

function matrixR(a, m, n) {
    if (a.length == 0) {
        return m;
    } else {
        b = [n];
        for (i = 0; i < n; i++) {
            b[i] = a[i];
        }
        m[m.length] = b;
        return matrixR(a.slice(n), m, n);
    }
}

function ex_8_R(a) {
    m = [];
    return matrixR(a, m, Math.sqrt(a.length));
}

/*
Esercizio 9

Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli

elementi.

Esempio:

Input: A = {2, 5, 8}

Output A= {8, 5, 2}
*/

function invert(a) {
    for (i = a.length - 1; i >= 0; i--) {
        a[a.length] = a[i];
        console.log()
    }
    return a.slice(a.length / 2);
}

function ex_9_I(a) {
    return invert(a);
}

function invertR(a, b) {
    if (a.length == 0)
        return b;
    else {
        b[b.length] = a[a.length - 1];
        return invertR(a.slice(0, a.length - 1), b);
    }
}

function ex_9_R(a) {
    b = [];
    return invertR(a, b);
}

/*
Esercizio 10

Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi

contenenti a.

Esempio:

replicate(3, 4) => A= {3, 3, 3, 3}
*/

function replicate(x, n) {
    if (x < 0 || n < 0) {
        return 0;
    }
    a = [];
    for (i = n; n > 0; n--) {
        a[a.length] = x;
    }
    return a;
}

function ex_10_I(x, n) {
    return replicate(x, n);
}

function replicateR(x, n, a) {
    if (x < 0 || n <= 0)
        return a;
    else {
        a[a.length] = x;
        return replicateR(x, n - 1, a);
    }
}

function ex_10_R(x, n) {
    a = [];
    return replicateR(x, n, a);
}

/*
Esercizio 11

Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi

dispari precedano nello stesso ordine tutti gli elementi pari.

Esempio

Input: A = {2, 5, 1, 8}

Output: A = {5, 1, 2, 8}
*/
function order(a) {
    n = a.length;
    for (i = 0; i < n; i++) {
        if (a[i] % 2)
            a[a.length] = a[i];
    }
    for (i = 0; i < n; i++) {
        if (!(a[i] % 2))
            a[a.length] = a[i];
    }
    return a.slice(n);
}

function ex_11_I(a) {
    return order(a);
}

function orderR(a, even, odd) {
    if (a.length == 0)
        return;
    else if (a[0] % 2)
        odd[odd.length] = a[0];
    else
        even[even.length] = a[0];
    return orderR(a.slice(1), even, odd);
}

function ex_11_R(a) {
    even = [];
    odd = [];
    orderR(a, even, odd);
    return odd.concat(even);
}