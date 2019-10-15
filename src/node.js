class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;

		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if(!this.left) {
			this.left = node;
			this.left.parent = this;
		} else if(!this.right) {
			this.right = node;
			this.right.parent = this;
		}
	}

	removeChild(node) {
		node.parent = null;

		if(node == this.left) {
			this.left = null;
		} else if(node == this.right) {
			this.right = null;
		} else {
			throw new Exception('the passed node is not a child of this node');
		}
	}

	remove() {
		if(!!this.parent) {
			this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		let parent = this.parent;

		if(!!parent) {
		}
	}
}

module.exports = Node;
