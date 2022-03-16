

class Scheduler{
    constructor(){
        this.taskNum = 0;
        this.taskQueue = [];
    }

    async add(promiseCreator){
        //在Promise内部把resolve放到任务队列中，只有当resolve被调用，后面的的代码才被执行
        if(this.taskNum>=2){
            await new Promise((resolve)=>{
                this.taskQueue.push(resolve)
            })
        }

        this.taskNum++;
        let result = await promiseCreator();
        this.taskNum--;
        if(this.taskQueue.length>0){
        //当前任务完成后，如果任务队列里有resolve，那么就调用resolve，之前被堵住的部分就可以得到执行
            this.taskQueue.shift()();
        }
        return result;
    }
}

let scheduler = new Scheduler();

let timeout = time => new Promise((resolve)=>{
    setTimeout(resolve, time);
});

function addTask(delay, num){
    scheduler.add(()=>(
        timeout(delay).then((val)=>{
            console.log(num);
        })
    ))
}

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

// 不会 暂时记下：   https://juejin.cn/post/6918015456062210061