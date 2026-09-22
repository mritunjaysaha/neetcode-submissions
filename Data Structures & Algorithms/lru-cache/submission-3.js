class LRUCache {
    constructor(capacity) {
        this.cache = [];
        this.capacity = capacity;
    }

    get(key) {
        for (let i = 0; i < this.cache.length; i++) {
            if (this.cache[i][0] === key) {
                const item = this.cache.splice(i, 1)[0];

                // Most recently used
                this.cache.push(item);

                return item[1];
            }
        }

        return -1;
    }

    put(key, value) {
        // If key already exists, remove it first
        for (let i = 0; i < this.cache.length; i++) {
            if (this.cache[i][0] === key) {
                this.cache.splice(i, 1);
                break;
            }
        }

        // Remove least recently used
        if (this.cache.length === this.capacity) {
            this.cache.shift();
        }

        // Add as most recently used
        this.cache.push([key, value]);
    }
}