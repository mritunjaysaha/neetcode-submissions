class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = Array.from({ length: n }, () => [])
        const visited = Array(n).fill(false)

        for (const [u, v] of edges) {
            adj[u].push(v)
            adj[v].push(u)
        }

        const dfs = (node) => {
            for (const ngbr of adj[node]) {
                if (!visited[ngbr]) {
                    visited[ngbr] = true
                    dfs(ngbr)
                }
            }
        }

        let res = 0

        for (let node = 0; node < n; node++) {
            if (!visited[node]) {
                visited[node] = true
                dfs(node)
                res++
            }
        }

        return res
    }
}
