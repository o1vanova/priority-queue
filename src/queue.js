const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = !maxSize ? 30: maxSize;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		let size = this.heap.size();

		if(size < this.maxSize) {
			this.heap.push(data, priority);
		} else {
			throw new Exception('the queue has max size');
		}
	}

	shift() {
		if(this.isEmpty()) {
			throw new Exception('the queue is empty');
		}
		return this.heap.pop();
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return this.heap.isEmpty();	
	}
}

module.exports = PriorityQueue;
