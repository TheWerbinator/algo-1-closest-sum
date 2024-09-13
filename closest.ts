export function closest(nums: number[], target: number): number {
  const sums: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue
      for (let k = 0; k < nums.length; k++) {
        if (k === i || j === k) continue
        const newSum = nums[i] + nums[j] + nums[k]
        if (!sums.includes(newSum)) {
          sums.push(newSum);
        }
      }
    }
  }

  const sortedByProximity = sums.sort((a, b) => {
    const diffa = Math.abs(target - a);
    const diffb = Math.abs(target - b);
    if (diffa < diffb) {
      return -1
    }
    if (diffa > diffb) {
      return 1
    }
    return 0
  })

  return sortedByProximity[0];
}

module.exports = { closest }
