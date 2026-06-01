class Solution {
    /**
     * @param {string[]}
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for (let i = 0; i < strs.length; i++) {
            let sortedStr = strs[i].split('').sort().join('');
            if (!res[sortedStr]) {
                res[sortedStr] = [];
            }
            res[sortedStr].push(strs[i]);
        }
        return Object.values(res);
    }
}