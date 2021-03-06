const barker = (state) => ({
  bark: () => console.log('Woof, I am ' + state.name)
})

// var barker = function(state) {
//     return {
//         bark: function(){
//             console.log('Woof, I am ' + state.name);
//         }
//     }
// }

const driver = (state) => ({
  drive: () => state.position = state.position + state.speed
})

const murderRobotDog = (name)  => {
  let state = {
    name,
    speed: 100,
    position: 0
  }
  return Object.assign(
        {},
        barker(state),
        driver(state),
        killer(state)
    )
}

const bruno =  murderRobotDog('bruno');
bruno.bark();