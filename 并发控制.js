const sleep = (time, task) => {
    return new Promise((resolve, reject) => {
        console.log(`开始${task}`)
        setTimeout(() => {
            resolve()
            console.log(`结束${task}`)
        }, time)
    })
}

async function limitConcurrent(limit, tasks) {
    let pool = new Set()

    for (let task of tasks) {
        const promise = task()
        pool.add(promise)
        promise.then(() => pool.delete(promise))
        if (pool.size >= limit) {
            await Promise.race(pool)
        }
    }
}

const tasks = [
    () => sleep(1000, '睡觉'),
    () => sleep(2000, '吃饭'),
    () => sleep(3000, '打豆豆'),
    () => sleep(5000, '刷题')
]

limitConcurrent(2, tasks)