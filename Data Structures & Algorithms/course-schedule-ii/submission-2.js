class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const indegree = new Array(numCourses).fill(0)
        const adj = new Map()

        prerequisites.forEach(([a, b]) => {
            if (!adj.has(a)) adj.set(a, [])

            adj.get(a).push(b)
        })

        adj.forEach((nodes) => {
            nodes.forEach((node) => indegree[node]++)
        })

        const queue = []

        for (let i = 0; i < numCourses; i++) {
            if (indegree[i] === 0) queue.push(i)
        }

        const ans = []

        while (queue.length > 0) {
            const node = queue.shift()

            ans.unshift(node)

            if (adj.has(node)) {
                adj.get(node).forEach((ngbr) => {
                    indegree[ngbr]--

                    if (indegree[ngbr] === 0) queue.push(ngbr)
                })
            }
        }

        return ans.length === numCourses ? ans : []
    }
}
