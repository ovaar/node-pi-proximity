// import { Gpio } from 'onoff'
import Timer from './timer'

// const proximity = new Gpio(4, 'in', 'rising')
const PROXIMITY_TIMEOUT = 10000

// const timer = new Timer(PROXIMITY_TIMEOUT)
// timer.elapsed = function() {
//   console.log('timer elapsed')
// }
// timer.start()

// proximity.watch((err, value) => {
//   try {
//     if (err) {
//       console.log(err)
//       throw err
//     }
//     console.log(`Watch = ${value}`)

//     timer.restart()
//   } catch (error) {
//     console.error(error)
//   }
// })

// process.on('SIGINT', () => {
//   proximity.unexport()
// })