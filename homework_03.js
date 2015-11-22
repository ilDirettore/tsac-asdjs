/**
 * Created by Dario on 22/11/2015.
 */

function Stack() {
    this.myarray = [];
}

Stack.prototype.push = function(e) {
    this.myarray.push(e);
}

Stack.prototype.pop = function() {
    return this.myarray.pop();
}

Stack.prototype.peek = function() {
    return this.myarray[this.myarray.length - 1];
}

Stack.prototype.isEmpty = function() {
    if (this.myarray.length == 0) {
        return true;
    } else {
        return false;
    }
}

function deciTObin(x) {
    bin = new Stack();
    while (x > 0) {
        bin.push(x % 2);
        x = Math.floor(x / 2);
    }
    str = "";
    while (!bin.isEmpty()) {
        str += bin.pop();
    }
    return str;
}

function RPN(str) {
    var array = str.split(' ');
    var operandi = new Stack();
    var item, op1, op2;
    while(array.length > 0) {
        item = array.shift();
        switch (item) {
            case '+':
                op1 = operandi.pop();
                op2 = operandi.pop();
                operandi.push(op2 + op1);
                break;
            case '-':
                op1 = operandi.pop();
                op2 = operandi.pop();
                operandi.push(op2 - op1);
                break;
            case '*':
                op1 = operandi.pop();
                op2 = operandi.pop();
                operandi.push(op2 * op1);
                break;
            case '/':
                op1 = operandi.pop();
                op2 = operandi.pop();
                operandi.push(op2 / op1);
                break;
            default:
                operandi.push(parseInt(item));
        }
    }
    return operandi.pop();
}

document.write("<h1>Il risultato è: " + RPN('20 15 100 5 - * + 21 -') + "</h1><h3>powered by ilDirettore</h3>");