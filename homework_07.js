function T(myarray, result) {
    if (myarray.length == 0)
        return result;
    else
        return T(myarray.slice(1), result + (5 * myarray[0]));
}

function ex_1a(array) {
    return T(array, 10);
}

console.log(ex_1a([5, 5]));

function ex_2(myarray) {
    return myarray.filter(function(x) {return x % 2 == 0;}).map(function(x) {return x * x;}).reduce(function(acc, x) {return acc + x;}, 0);
}

console.log(ex_2([2, 4, 5]));

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

function ex_3(myarray) {
    var even = new Stack();
    var odd = new Stack();
    myarray.forEach(function(x) {
        if (x % 2 == 0)
            even.push(x);
        else
            odd.push(x);
    });
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

console.log(ex_3([2,8,12,3,7]));

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
    inOrder(albero.root, function(x) {console.log(x)});
    console.log(searchTree(albero.root, "ale giov"));
    console.log(searchNode(albero.root, "alegiov"));
}

main();

function LinkedList()
{
    this.head=null;
}

function ListItem(i,n)
{
    this.item=i;
    this.next=n;
}

LinkedList.prototype.add=function(index,element)
{
    if(this.head==null || index==0)
        this.head=new ListItem(element,this.head);
    else
        this.addItem(0,this.head,index,element);
}

LinkedList.prototype.addItem=function(previousIndex,previousItem,index,element)
{
    if(++previousIndex<index && previousItem.next!=null)
        this.addItem(previousIndex,previousItem.next,index,element);
    else
        previousItem.next=new ListItem(element,previousItem.next);
}

LinkedList.prototype.get=function(index)
{
    var item=this.head;
    for(var i=0;i<index && item.next!=null;i++)
    {
        item=item.next;
    }
    return item.item;
}

function main2()
{
    var l=new LinkedList();
    l.add(0,'a');
    l.add(1,'b');
    l.add(1,'c');
    l.add(5,'d');
    l.add(0,'e');
    console.log(l.get(0));
    console.log(l.get(1));
    console.log(l.get(2));
    console.log(l.get(3));
    console.log(l.get(4));
    console.log(l.get(8));
    console.log(l);
}

main2();