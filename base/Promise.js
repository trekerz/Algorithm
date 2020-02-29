/**
 * 自定义Promise
 * @since 2020-02-29
 */
(function() {

  var PENDING = 'pending'
  var FULFILLED = 'fulfilled'
  var REJECTED = 'rejected'

  function Promise(executor) {
    var self = this

    // 初始化
    self.value = void 0
    self.status = PENDING
    self.callbacks = [] // { onResolved, onRejected }

    function resolve(value) {
      if (self.status !== PENDING) return

      // 1. 改变状态
      // 2. 如果回调已经传入则异步调用回调
      self.value = value
      self.status = FULFILLED
      if (self.callbacks.length > 0) {
        simulateAsync(() => {
          self.callbacks.forEach(cb => {
            cb.onResolved(value)
          })
        })
      }
    }

    function reject(reason) {
      if (self.status !== PENDING) return

      // 1. 改变状态
      // 2. 如果回调已经传入则异步调用回调
      self.value = reason
      self.status = REJECTED
      if (self.callbacks.length > 0) {
        simulateAsync(() => {
          self.callbacks.forEach(cb => {
            cb.onRejected(reason)
          })
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  // then返回一个新Promise
  // 新Promise的值和状态就是onResolved或onRejected执行后的值和状态
  Promise.prototype.then = function(onResolved, onRejected) {
    var self = this

    // 0. 如果不传onResolved / onRejected，需要做穿透功能的兼容
    onResolved = typeof onResolved === 'function' ? onResolved : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    return new Promise((resolve, reject) => {

      // 2.1 如果抛出异常，则新Promise就会失败，reason就是error
      // 2.2 如果返回是Promise，则新Promise的结果就是此Promise的结果
      // 2.3 如果返回不是Promise，则新Promise就会成功，value就是返回值
      function handler(callback) {
        try {
          var result = callback(self.value)
          if (result instanceof Promise) {
            result.then(resolve, reject)
          } else {
            resolve(result)
          }
        } catch (err) {
          reject(err)
        }
      }

      // 1. 如果原Promise还处于PENDING，则推入回调函数
      // 2. 如果原Promise处于FULFILLED，则执行onResolved，根据执行后的返回确定新Promise的值和状态
      if (self.status === PENDING) {
        self.callbacks.push({
          onResolved() {
            handler(onResolved)
          },
          onRejected() {
            handler(onRejected)
          }
        })
      } else if (self.status === FULFILLED) {
        simulateAsync(() => {
          handler(onResolved)
        })
      } else {
        simulateAsync(() => {
          handler(onRejected)
        })
      }
    })
  }

  // catch方法
  Promise.prototype.catch = function(onRejected) {
    return this.then(void 0, onRejected)
  }

  // 静态resolve
  // 规范规定：Promise.resolve可能接收Promise或非Promise
  // 1. 如果valud是Promise，则value的结果就是返回的结果
  // 2. 如果value不是Promise，则返回成功，值就是value
  Promise.resolve = function(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })
  }

  // 静态reject
  Promise.reject = function(reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }

  // 异步模拟函数
  function simulateAsync(fn) {
    setTimeout(fn)
  }

  window.Promise = Promise
})()
