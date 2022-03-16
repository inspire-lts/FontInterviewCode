class evenEmmit{
  constructor() {
    this.container = {}
  }

  on(type, handler) {
    if (!this.container[type]) {
      this.container[type] = []
    }
    this.container[type].push(handler)
  }

  emit(type, param) {
    if (this.container[type]) {

      this.container[type].forEach(item => item(param))
    }
  }

  off(type, handler) {
    this.container[type] = this.container[type].filter(item => item !== handler)
  }
}