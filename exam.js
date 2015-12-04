/**
 * Created by Dario on 04/12/2015.
 */

//Esercizio ricorsione

function ex_1(array) {
    var count = 0;
    if(array.length == 0)
        return 0;
    else if(array[0] == 5070)
        count++;
    return count + ex_1(array.splice(1));
}

//Esercizio filter/map/reduce

function ex_2(array) {
    return Math.sqrt(array.filter(function(x) {
        return x >= 0 && x % 2 == 0;
    }).map(function(x) {
        return x * x;
    }).reduce(function(acc, x) {
        return acc + x;
    }))
}

//Esercizio Stack

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

function ex_stack(str) {
    var array = str.split(' ');
    var v = new Stack();
    var s = new Stack();
    var item, op1, op2, operatore;
    while(array.length > 0) {
        item = array.shift();
        if (item == '+' || item == '-' || item == '*' || item == '/' || item == '(')
            s.push(item);
        else if (item == ')') {
            op1 = v.pop();
            op2 = v.pop();
            operatore = s.pop();
            s.pop();
            switch (operatore) {
                case '+':
                    v.push(op2 + op1);
                    break;
                case '-':
                    v.push(op2 - op1);
                    break;
                case '*':
                    v.push(op2 * op1);
                    break;
                case '/':
                    v.push(op2 / op1);
                    break;
            }
        } else
            v.push(parseInt(item));
    }
    return v.pop();
}

//Tree

function Node(i, left, right) {
    this.item = i;
    this.l = left;
    this.r = right;
}

function BST() {
    this.root = null;

}

BST.prototype.addNode = function(currentNode, newNode) {
    if (newNode.item < currentNode.item) {
        if (currentNode.l == null)
            currentNode.l = newNode;
        else
            this.addNode(currentNode.l, newNode);
    } else {
        if (currentNode.r == null)
            currentNode.r = newNode;
        else
            this.addNode(currentNode.r, newNode);
    }
}

BST.prototype.add = function(item) {
    if (this.root == null) {
        this.root = new Node(item, null, null);
    } else {
        this.addNode(this.root, new Node(item, null, null));
    }
}

function caricaAlbero(tree, array) {
    for(var i = 0;i < array.length;i++) {
        tree.add(array[i]);
    }
}

function maxTree(root) {
    if (root == null)
        return 0;
    else if (root.r == null)
        return root.item;
    else
        return maxTree(root.r);
}

//MAIN

function main() {
    console.log("esercizio ricorsione: " + ex_1(initialArray()));
    console.log("esercizio filter ecc: " + ex_2(initialArray()));
    var albero = new BST();
    caricaAlbero(albero, initialArray());
    console.log("esercizio albero: " + maxTree(albero.root));
    var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];
    function evaluateExpr(callback) {
        return callback(_0xd10d[0]);
    }
    console.log("esercizio stack: " + evaluateExpr(ex_stack));
    console.log(albero);
}

main();

function initialArray() {
    var seed = 1;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return Math.floor(x);
    }

    var a = [];
    for(var i = 0; i < 10000; ++i) {
        a.push(random());
    }
    return a;
}