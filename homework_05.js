/*
	homework_05
		PriorityQueue()
		PriorityQueueC(n)
	
	homework_06
		mergeSort(array)
*/

function PriorityQueue() {
    this.coda = [];
}

PriorityQueue.prototype.enqueue = function(val, prio) {
	var obj = {
		valore: val,
		priority: prio
	}
	var trovato = false;
	if(this.coda.length == 0) {
		this.coda.push(obj);
	} else {
		for (i = 0;i < this.coda.length && !trovato;i++) {
			if (obj.priority > this.coda[i].priority) {
				this.coda.splice(i, 0, obj);
				trovato = true;
			}
		}
	}
}

PriorityQueue.prototype.dequeue = function() {
	return this.coda.pop();
}

PriorityQueue.prototype.front = function() {
	return this.coda[this.coda.length - 1];
}

PriorityQueue.prototype.isEmpty = function() {
	return (this.coda.length == 0);
}

PriorityQueue.prototype.dimension = function() {
	return this.coda.length;
}

PriorityQueue.prototype.stamp = function() {
	var i = 0;
	while (i < this.coda.length) {
		console.log(this.coda[i]);
		i++;
	}
}

function main() {
	var test = new PriorityQueue();
	test.enqueue("manuel", 1);
    test.enqueue("marco", 10);
    test.enqueue("persano", 2);
    test.enqueue("dario", 9);
    test.enqueue("daniele", 3);
    test.enqueue("MENIS", 7);
    test.enqueue("MARANTA", 15);
	test.enqueue("ALEMANNO", 15);
    test.stamp();
}

//main();

//---------------------------------

function PriorityQueueCallback(func) {
	this.coda = [];
	this.callback = func;
}

PriorityQueueCallback.prototype.enqueue = function(val, prio) {
	var obj = {
		valore: val,
		priority: prio
	}
	if(this.coda.length == 0)
		this.coda.push(obj);
	else {
		var i = 0;
		while (!this.callback(this.coda[i], obj )) {
			i++;
		}
		this.coda.splice(i, 0, obj);
	}
}

PriorityQueueCallback.prototype.dequeue = function() {
	return this.coda.pop();
}

PriorityQueueCallback.prototype.front = function() {
	return this.coda[this.coda.length - 1];
}

PriorityQueueCallback.prototype.isEmpty = function() {
	return (this.coda.length == 0);
}

PriorityQueueCallback.prototype.size = function() {
	return this.coda.length;
}

PriorityQueueCallback.prototype.stamp = function() {
	var i = 0;
	while (i < this.coda.length) {
		console.log(this.coda[i]);
		i++;
	}
}

function main2() {
	var confronto = function(itemI, itemC) {
		if (itemC.priority > itemI.priority)
			return true;
		else
			return false;
	}
	var test = new PriorityQueueCallback(confronto);
	test.enqueue("manuel", 1);
	test.enqueue("marco", 10);
	test.enqueue("persano", 2);
	test.enqueue("dario", 9);
	test.enqueue("daniele", 3);
	test.enqueue("MENIS", 7);
	test.enqueue("MARANTA", 15);
	test.enqueue("ALEMANNO", 15);
	test.stamp();
}

main2();

function CircularQueue(dim) {
	this.n = dim;
	this.coda = [];
	this.primo = this.ultimo = this.dimension = 0;

}

CircularQueue.prototype.enqueue = function(item) {
	if (this.dimension == this.n)
		return 0;
	else {
		this.coda[this.ultimo] = item;
		this.ultimo = (this.ultimo + 1) % this.n;
		this.dimension++;
	}
}

CircularQueue.prototype.dequeue = function() {
	var item;
	if (this.dimension == 0)
		return item;
	else {
		item = this.coda[this.primo];
		this.primo = (this.primo + 1) % this.n;
		this.dimension--;
		return item;
	}
}

CircularQueue.prototype.front = function() {
	if (this.primo == this.ultimo) {
		return 0;
	}
	else
		return this.coda[this.primo];
}

CircularQueue.prototype.isEmpty = function() {
	return (this.dimension == 0);
}

CircularQueue.prototype.size = function() {
	return this.dimension;
}

function main3() {
	var test = new CircularQueue(3);
	test.enqueue("manuel");
	test.enqueue("marco");
	test.enqueue("persano");
	test.enqueue("claire");
	test.dequeue();
	test.dequeue();
	while(test.size()) {
		console.log(test.dequeue());
	}
	console.log(test.size());

}

//main3();
