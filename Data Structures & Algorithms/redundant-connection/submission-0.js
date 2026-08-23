class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length
        const adj = Array.from({ length: n + 1 }, () => [])

        const dfs = (node, parent, visited) => {
            if (visited[node]) return true

            visited[node] = true

            for (const ngbr of adj[node]) {
                if (ngbr === parent) continue
                if (dfs(ngbr, node, visited)) return true
            }

            return false
        }

        for (const [u, v] of edges) {
            adj[u].push(v)
            adj[v].push(u)

            const visited = Array(n + 1).fill(false)

            if (dfs(u, -1, visited)) {
                return [u, v]
            }
        }

        return []
    }
}
