class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length > n - 1) {
            return false
        }

        const adj = Array.from({ length: n }, () => [])

        for (const [u, v] of edges) {
            adj[u].push(v)
            adj[v].push(u)
        }

        const visit = new Set()
        const queue = []

        visit.add(0)
        queue.push([0, -1])

        while (queue.length > 0) {
            const [node, parent] = queue.shift()

            for (const ngbr of adj[node]) {
                if (ngbr === parent) continue
                if (visit.has(ngbr)) return false

                visit.add(ngbr)

                queue.push([ngbr, node])
            }
        }

        return visit.size === n
    }
}
