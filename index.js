const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const sums = function(batteryBatches) {
   return batteryBatches.reduce((acc, cur) => acc + cur)
}
const totalBatteries = sums(batteryBatches)

console.log(totalBatteries)
