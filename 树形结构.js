let arr = [
  { id: 5, name: '部门5', pid: 4 },
  { id: 1, name: '部门1', pid: 0 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
 ]

 function listToTree(arr) {
   let map = {}
   arr.forEach(item => {
    map[item.id] = {...item, children: []}
   })

   arr.forEach(item => {
     const {id, pid} = item
     const treeItem = map[id]
     if (map[pid]) {
       map[pid].children.push({...treeItem})
     }
   })

   return [map[1]]
 }

 let newList = list.fitler(item => (item.children = list.filter(i => i.pid === item.id)) && item.id === 1)