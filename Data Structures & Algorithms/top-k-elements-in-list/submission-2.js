class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = nums.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1
            return acc
            }, {})
            let number = []
        
        const sortedEntries = Object.entries(frequency).sort((a, b) => b[1] - a[1]);
        for (let i = 0; i < k; i++) {
            number.push(Number(sortedEntries[i][0]));
        }

        return number
    }
}