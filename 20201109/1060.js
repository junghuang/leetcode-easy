// 给出一个有序数组 A，数组中的每个数字都是 独一无二的，找出从数组最左边开始的第 K 个缺失数字。
//
// 示例 1：
//
// 输入：A = [4,7,9,10], K = 1
// 输出：5
// 解释：
// 第一个缺失数字为 5 。
// 示例 2：
//
// 输入：A = [4,7,9,10], K = 3
// 输出：8
// 解释：
// 缺失数字有 [5,6,8,...]，因此第三个缺失数字为 8 。
// 示例 3：
//
// 输入：A = [1,2,4], K = 3
// 输出：6
// 解释：
// 缺失数字有 [3,5,6,7,...]，因此第三个缺失数字为 6 。

var missingElement = function (A, K) {
  let minn = A[0]
  let left = 0
  let right = A.length - 1
  while(left < right) {
    let mid = left + ((right - left + 1) >> 1)
    if (A[mid] >= minn + K + mid) right = mid - 1
    else left = mid
  }
  return minn + left + K
}
console.log(missingElement([4, 7, 9, 10], 1));
console.log(missingElement([4, 7, 9, 10], 3));
console.log(missingElement([1, 2, 4], 3));
