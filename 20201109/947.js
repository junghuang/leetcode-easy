// n 块石头放置在二维平面中的一些整数坐标点上。每个坐标点上最多只能有一块石头。
//
// 如果一块石头的 同行或者同列 上有其他石头存在，那么就可以移除这块石头。
//
// 给你一个长度为 n 的数组 stones ，其中 stones[i] = [xi, yi] 表示第 i 块石头的位置，返回 可以移除的石子 的最大数量。

// 示例 1：
// 输入：stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
// 输出：5
// 解释：一种移除 5 块石头的方法如下所示：
// 1. 移除石头 [2,2] ，因为它和 [2,1] 同行。
// 2. 移除石头 [2,1] ，因为它和 [0,1] 同列。
// 3. 移除石头 [1,2] ，因为它和 [1,0] 同行。
// 4. 移除石头 [1,0] ，因为它和 [0,0] 同列。
// 5. 移除石头 [0,1] ，因为它和 [0,0] 同行。
// 石头 [0,0] 不能移除，因为它没有与另一块石头同行/列。
//
// 示例 2：
// 输入：stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
// 输出：3
// 解释：一种移除 3 块石头的方法如下所示：
// 1. 移除石头 [2,2] ，因为它和 [2,0] 同行。
// 2. 移除石头 [2,0] ，因为它和 [0,0] 同列。
// 3. 移除石头 [0,2] ，因为它和 [0,0] 同行。
// 石头 [0,0] 和 [1,1] 不能移除，因为它们没有与另一块石头同行/列。
//
// 示例 3：
// 输入：stones = [[0,0]]
// 输出：0
// 解释：[0,0] 是平面上唯一一块石头，所以不可以移除它。



/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  let ans = 0;
  const len = stones.length;
  const unionfind = new Array(len).fill(0).map((val, i) => i);
  const row = [];
  const col = [];
  for (let i = 0; i < len; i++) {
    const [u, v] = stones[i];
    const rowIndex = row.indexOf(u);
    const colIndex = col.indexOf(v);
    if (rowIndex >= 0) {
      union(i, rowIndex);
    }
    if (colIndex >= 0) {
      union(i, colIndex);
    }
    row.push(u);
    col.push(v);
  }
  // console.log(unionfind);
  for (let i = 0; i < len; i++) {
    if (i !== unionfind[i]) {
      ans++;
    }
  }

  function find(x) {
    if (x === unionfind[x]) {
      return unionfind[x];
    } else {
      unionfind[x] = find(unionfind[x]);
      return unionfind[x];
    }
  }

  function union(x, y) {
    let u = find(x);
    let v = find(y);
    unionfind[u] = v;
  }

  return ans;
};
