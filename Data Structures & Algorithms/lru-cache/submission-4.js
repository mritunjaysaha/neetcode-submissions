class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;

        // Pointers for the doubly linked list
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.cap = capacity;

        // Map gives O(1) access to a node using its key
        // key -> Node
        this.cache = new Map();

        // Dummy/sentinel nodes
        // left = beginning of list = Least Recently Used
        // right = end of list = Most Recently Used
        this.left = new Node(0, 0);
        this.right = new Node(0, 0);

        // Initially there are no actual nodes
        // left <-> right
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    // Removes a node from wherever it currently exists
    // Example: A <-> B <-> C
    // Remove B -> A <-> C
    remove(node) {
        const prev = node.prev;
        const next = node.next;

        // Connect the two neighbors directly
        prev.next = next;
        next.prev = prev;
    }

    // Inserts a node just before the right dummy node
    // This makes the node the Most Recently Used
    insert(node) {
        // Current last real node
        const prev = this.right.prev;

        // Connect: prev <-> node <-> right
        prev.next = node;
        node.prev = prev;

        // Connect the new node to the right dummy node
        // node -> right
        node.next = this.right;

        // Connect the right dummy node back to the new node
        // right <- node
        this.right.prev = node;
    }

    get(key) {
        // Check if key exists in O(1) using the Map
        if (this.cache.has(key)) {
            const node = this.cache.get(key);

            // Accessing the node makes it recently used,
            // so remove it from its current position
            // and move it to the MRU end
            this.remove(node);
            this.insert(node);

            return node.val;
        }

        // Key doesn't exist
        return -1;
    }

    put(key, value) {
        // If key already exists, remove the old node
        // because we will create/update it as the MRU node
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }

        // Create a new node and store it in the Map
        const newNode = new Node(key, value);
        this.cache.set(key, newNode);

        // Newly added/updated key becomes Most Recently Used
        this.insert(newNode);

        // If cache exceeds capacity, remove the LRU node
        if (this.cache.size > this.cap) {
            // The first real node after 'left' is the LRU
            const lru = this.left.next;

            // Remove it from the linked list
            this.remove(lru);

            // Also remove it from the Map
            this.cache.delete(lru.key);
        }
    }
}
