// 1913. Maximum Product Difference Between Two Pairs

// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

// Return the maximum such product difference.

var maxProductDifference = function(nums) {
    
    nums.sort((a,b) => a - b)

    let firstLargest = nums[nums.length-1]
    let secondLargest = nums[nums.length-2]
    let smallest = nums[0]
    let secondSmallest = nums[1]

    let sum = (firstLargest * secondLargest) - (smallest * secondSmallest)

    return sum
};