class DListNode {
    key: number;
    value: number;
    prev: DListNode | null = null;
    next: DListNode | null = null;

    constructor(key: number = 0, value: number = 0) {
        this.key = key;
        this.value = value;
    }
}

class LRUCache {
    private capacity: number;
    private map: Map<number, DListNode>;
    private head: DListNode;
    private tail: DListNode;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();

        this.head = new DListNode();
        this.tail = new DListNode();
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * Helpers
     */
    // H1: helper to remove node
    private removeNode(node: DListNode): void {
        const prevNode = node.prev!;
        const nextNode = node.next!;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    // H2: add the node to the start
    private addToHead(node: DListNode): void {
        node.prev = this.head;
        node.next = this.head.next;
        this.head.next!.prev = node;
        this.head.next = node;
    }

    // H3: move the node to head - remove the node, then add the node to head
    private moveToHead(node: DListNode): void {
        this.removeNode(node);
        this.addToHead(node);
    }

    // H4: remove the tail node
    private removeTail(): DListNode {
        const lruNode = this.tail.prev!;

        this.removeNode(lruNode);

        return lruNode;
    }

    /**
     * Actual methods
     */
    get(key: number): number {
        const node = this.map.get(key);

        if (!node) return -1;

        this.moveToHead(node);

        return node.value;
    }

    put(key: number, value: number): void {
        const existingNode = this.map.get(key);

        if (existingNode) {
            existingNode.value = value;

            this.moveToHead(existingNode);
        } else {
            const newNode = new DListNode(key, value);

            this.map.set(key, newNode);
            this.addToHead(newNode);

            if (this.map.size > this.capacity) {
                const lru = this.removeTail();

                this.map.delete(lru.key);
            }
        }
    }
}
