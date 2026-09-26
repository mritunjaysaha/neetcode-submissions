class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
        for (const [course, pre] of prerequisites) {
            adj[pre].push(course);
        }
        const state = new Uint8Array(numCourses);

        function hasCycle(course) {
            if (state[course] === 1) return true;
            if (state[course] === 2) return false;

            state[course] = 1;

            for (const nextCourse of adj[course]) {
                if (hasCycle(nextCourse)) return true;
            }

            state[course] = 2;
            return false;
        }

        for (let c = 0; c < numCourses; c++) {
            if (state[c] === 0 && hasCycle(c)) {
                return false;
            }
        }
        return true;
    }
}
