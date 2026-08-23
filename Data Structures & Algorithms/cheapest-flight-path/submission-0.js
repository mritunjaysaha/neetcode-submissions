class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n, flights, src, dst, k) {
        const adj = Array.from({ length: n }, () => [])
        const dist = Array.from({ length: n }, () => Array(k + 5).fill(Infinity))

        for (let [u, v, cost] of flights) {
            adj[u].push([v, cost])
        }

        dist[src][0] = 0
        const minHeap = new MinPriorityQueue(entry => entry[0])

        minHeap.push([0, src, -1])

        while (!minHeap.isEmpty()) {
            const [cst, node, stops] = minHeap.pop()

            if (node === dst) return cst
            if (stops === k || dist[node][stops + 1] < cst) continue

            for (let [ngbr, w] of adj[node]) {
                const nextCost = cst + w
                const nextStops = stops + 1

                if (dist[ngbr][nextStops + 1] > nextCost) {
                    dist[ngbr][nextStops + 1] = nextCost
                    minHeap.push([nextCost, ngbr, nextStops])
                }
            }
        }

        return -1
    }
}
