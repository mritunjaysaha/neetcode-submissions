class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const preMap = new Map()

        for (let i = 0; i < numCourses; i++) {
            preMap.set(i, [])
        }

        for (let [course, pre] of prerequisites) {
            preMap.get(course).push(pre)
        }

        const visiting = new Set()

        const dfs = (course) => {
            if (visiting.has(course)) {
                return false
            }

            if (preMap.get(course).length === 0) {
                return true
            }

            visiting.add(course)

            for (let pre of preMap.get(course)) {
                if (!dfs(pre)) {
                    return false
                }
            }

            visiting.delete(course)
            preMap.set(course, [])
            return true
        }

        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) {
                return false
            }
        }

        return true
    }
}
