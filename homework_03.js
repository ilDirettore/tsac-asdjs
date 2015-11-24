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

function dec2bin(x) {
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