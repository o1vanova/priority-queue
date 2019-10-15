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

			let grandParent = parent.parent;
			let current = this;
			let currentLeft = this.left;
			let currentRight = this.right;

			this.parent = grandParent;
			if(!!grandParent) {
				if(parent == grandParent.left) {
					grandParent.left = this;
				} else if (parent == grandParent.right) {
					grandParent.right = this;
				}
			}

			parent.parent = current;
			if(current == parent.left) {
				this.left = parent;
				this.right = parent.right;

				if(!!currentLeft) {
					currentLeft.parent = this.left;
				}

				if(!!currentRight) {
					currentRight.parent = this.left;
				}
				
				this.left.left = !currentLeft ? null : currentLeft;
				this.left.right = !currentRight ? null : currentRight;

			} else if (current == parent.right) {
				this.right = parent;
				this.left = parent.left;

				if(!!currentLeft) {
					currentLeft.parent = this.right;
				}

				if(!!currentRight) {
					currentRight.parent = this.right;
				}

				this.right.left = !currentLeft ? null : currentLeft;
				this.right.right = !currentRight ? null : currentRight;
			}
		}
	}
}

module.exports = Node;
