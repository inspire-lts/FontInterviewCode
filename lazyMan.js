class lazyMan {
  constructor() {
    this.container = Promise.resolve()
  }
  console(str) {
    this.container = this.container.then((value) => {
      console.log(str)
    })
    return this
  }
  setTimeout(wait) {
    this.container = this.container.then((value) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, wait)
      })
    })
    return this
  }
}

let lazMan = new lazyMan()
lazMan.console("breakfast").setTimeout(3000).console("lunch").setTimeout(2000).console("dinner")