async function doSomething(done) {
    return new Promise((resolve, reject) => {
      console.log('waiting...')
      setTimeout(() => {
        done ? resolve('success') : reject('failure')
      }, 5000)
    })
  }
  //1. then() + catch ()
  // doSomething(false)
  //   .then((result) => {
  //     console.log(result)
  //   })
  //   .catch((error) => {
  //     console.log(`error: ${error}`)
  //   })
  
  //2. async-await
  async function waitDoSomething(flag) {
    try {
      const x = await doSomething(flag)
      console.log(x)
    } catch (error) {
      console.log(`error: ${error}`)
    }
  }
  waitDoSomething(false)