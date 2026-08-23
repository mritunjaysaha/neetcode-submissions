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

        const visited = new Set()

        const dfs = (node, parent) => {
            if (visited.has(node)) return false

            visited.add(node)

            for (const ngbr of adj[node]) {
                if (ngbr === parent) continue

                if (!dfs(ngbr, node)) return false
            }

            return true
        }

        return dfs(0, -1) && visited.size === n
    }

}
