class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const prereq = new Map()

        for (const [course, pre] of prerequisites) {
            if (!prereq.has(course)) {
                prereq.set(course, [])
            }

            prereq.get(course).push(pre)
        }

        const output = []
        const visited = new Set()
        const cycle = new Set()

        for (let c = 0; c < numCourses; c++) {
            if (!this.dfs(c, prereq, visited, cycle, output)) {
                return []
            }
        }

        return output
    }

    dfs(course, prereq, visited, cycle, output) {
        if (cycle.has(course)) {
            return false
        }

        if (visited.has(course)) {
            return true
        }

        cycle.add(course)

        for (const pre of prereq.get(course) || []) {
            if (!this.dfs(pre, prereq, visited, cycle, output)) {
                return false
            }
        }

        cycle.delete(course)
        visited.add(course)
        output.push(course)

        return true
    }
}
