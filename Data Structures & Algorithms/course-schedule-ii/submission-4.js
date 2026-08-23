class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const indegree = new Array(numCourses).fill(0)
        const adj = Array.from({ length: numCourses }, () => [])

        for (let [nxt, pre] of prerequisites) {
            indegree[nxt]++;
            adj[pre].push(nxt);
        }

        const output = []

        const dfs = (node) => {
            output.push(node)
            indegree[node]--

            for (const ngbr of adj[node]) {
                indegree[ngbr]--

                if (indegree[ngbr] === 0) {
                    dfs(ngbr)
                }
            }
        }

        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) {
                dfs(i)
            }
        }

        return output.length === numCourses ? output : []
    }
}
