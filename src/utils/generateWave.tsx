export function generateSineWaveData(frequency: number, sampleRate: number, duration: number, amplitude: number) {
  const allData: Array<{ date: number, value: number }> = [{
    date: 0,
    value: 0
  }]

  const step = 1 / sampleRate
  for (let t = 0; t < duration; t += step) {
    const value = amplitude * Math.sin(2 * Math.PI * frequency * t)
    allData.push({
      date: t,
      value
    })
  }
  return allData
}

// setTension2(
//   tension2.concat({
//     date:
//       message.timestamp !== null && message.timestamp !== undefined
//         ? new Date(message.timestamp).toLocaleTimeString()
//         : new Date().toLocaleTimeString(),
//     value: message.data.split(',')[1] as number,
//   }),
