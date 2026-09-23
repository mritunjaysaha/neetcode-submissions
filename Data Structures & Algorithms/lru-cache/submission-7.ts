class DListNode {
  key: number;
  val: number;
  prev: DListNode | null = null;
  next: DListNode | null = null;

  constructor(key: number = 0, val: number = 0) {
    this.key = key;
    this.val = val;
  }
}

class LRUCache {
  private capacity: number;
  private map: Map<number, DListNode>;
  private head: DListNode; // Dummy Head Sentinel (MRU anchor)
  private tail: DListNode; // Dummy Tail Sentinel (LRU anchor)

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();

    // Initialize sentinels
    this.head = new DListNode();
    this.tail = new DListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Time: O(1)
  get(key: number): number {
    const node = this.map.get(key);
    if (!node) return -1;

    // Refresh recency
    this.moveToHead(node);
    return node.val;
  }

  // Time: O(1)
  put(key: number, value: number): void {
    const existingNode = this.map.get(key);

    if (existingNode) {
      // Key exists: update value and promote to MRU
      existingNode.val = value;
      this.moveToHead(existingNode);
    } else {
      // New key: insert at head
      const newNode = new DListNode(key, value);
      this.map.set(key, newNode);
      this.addToHead(newNode);

      // Evict LRU if capacity exceeded
      if (this.map.size > this.capacity) {
        const lruNode = this.removeTail();
        this.map.delete(lruNode.key); // Must delete from Map using node.key
      }
    }
  }

  // Helper 1: Disconnect node from its current neighbors
  private removeNode(node: DListNode): void {
    const prevNode = node.prev!;
    const nextNode = node.next!;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }

  // Helper 2: Place node immediately after dummy head
  private addToHead(node: DListNode): void {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next!.prev = node;
    this.head.next = node;
  }

  // Helper 3: Unlink and move to head
  private moveToHead(node: DListNode): void {
    this.removeNode(node);
    this.addToHead(node);
  }

  // Helper 4: Evict node directly before dummy tail
  private removeTail(): DListNode {
    const lru = this.tail.prev!;
    this.removeNode(lru);
    return lru;
  }
}