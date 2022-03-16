function sleep(wait) {
  return new Promise(resolve => {
    setTimeout(resolve, wait)
  })
}

// https://blog.csdn.net/weixin_33817333/article/details/91437469