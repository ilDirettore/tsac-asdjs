function T(myarray, result) {
    if (myarray.length == 0)
        return result;
    else
        return T(myarray.slice(1), result + (5 * myarray[0]));
}

function Tfacade(array) {
    return T(array, 10);
}

console.log(Tfacade([5, 5]));

function sumEvenSQR(myarray) {
    var arrEven = myarray.filter(function(x) {return x % 2 == 0;});
    var arrSQR = arrEven.map(function(x) {return x * x;});
    return arrSQR.reduce(function(acc, x) {return acc + x;}, 0);
}

console.log(sumEvenSQR([2, 4, 5]));

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

function stackQueue(myaaray) {
    var even = new Stack();
    var odd = new Stack();
    var arr2 = [even];
    arr2.push(odd);
    myaaray.forEach(function (x){(x % 2 == 0)?this[0].push(x):this[1].push(x)}, arr2);
    var result = new Stack();
    while(!even.isEmpty() && !odd.isEmpty()) {
        result.push(even.pop() * odd.pop())
    }
    var rsl = 0;
    while(!result.isEmpty()) {
        rsl += result.pop();
    }
    return rsl;
}

console.log(stackQueue([2,8,12,3,7]));

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

function inOrder(tree, callback) {
    if (tree != null) {
        inOrder(tree.l, callback)
        callback(tree.item)
        inOrder(tree.r, callback)
    }
}

function inPreOrder(tree, callback) {
    if (tree != null) {
        callback(tree.item)
        inPreOrder(tree.l, callback)
        inPreOrder(tree.r, callback)
    }
}

function inPostOrder(tree, callback) {
    if (tree != null) {
        inPostOrder(tree.l, callback)
        inPostOrder(tree.r, callback)
        callback(tree.item)
    }
}

function searchTree(node, e) {
    if (node == null) {
        return false;
    }

    if (e == node.item) {
        return true;
    } else {
        if (e < node.item) {
            return searchTree(node.l, e)
        } else if (e > node.item) {
            return searchTree(node.r, e)
        }
    }
}

function searchNode(nodo, e) {
    if (nodo == null || nodo.item == e)
        return nodo;
    else if (e < nodo.item)
        return searchNode(nodo.l, e);
    else
        return searchNode(nodo.r, e);
}

function main() {
    var albero = new BST();
    albero.add("alberto");
    albero.add("marco");
    albero.add("vasyl");
    albero.add("manuel");
    albero.add("ale giov");
    albero.add("ilDirettore");
    inOrder(albero.root, function(x) {console.log(x)});
    console.log(searchTree(albero.root, "ale giov"));
    console.log(searchNode(albero.root, "alegiov"));
}

main();

