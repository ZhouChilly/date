// 1 递归实现 merage p into c
var deepCopy = function(obj) {
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}


// 2 JSON解析,无法复制函数原型链没了，对象就是object，所属的类没了

b = JSON.parse(JSON.stringify(a))


// 3 jquery.extend  merage b into a
$.extend(true,a,b)  //deep
$.extend(a,b)  //shallow

// 4 Object.assign() 无引用对象（深复制），有引用对象（浅复制）
Object.assign({}, {'a': 1}, {'b': 2})
