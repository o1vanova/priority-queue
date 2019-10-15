const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.length  = 0;
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.length++;
	}

	pop() {
		if(!this.isEmpty()) {
			let detached = this.detachRoot();
			this.restoreRootFromLastInsertedNode(detached);
			this.shiftNodeDown(this.root);
			this.length--;
			return detached.data;
		}
	}

	detachRoot() {
		let root = this.root;
		this.root = null;
		return root;	
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.length;	
	}

	isEmpty() {
		return this.length === 0;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.length = 0;
	}

	insertNode(node) {
		this.parentNodes.push(node);

		if(!this.root) {
			this.root = node;
		} else {
			let item = this.parentNodes[0];
			item.appendChild(node);

			if (!!item.right) {
				this.parentNodes.shift();
			}
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
