const assert = chai.assert.deepStrictEqual
const range = _.range
const print=console.log
print('##### begin #####') 

function f (lst) {
    result = [] 
    for (value of lst){
        result.push (Math.floor (value%4/2))
    }
    return result
}

//assert(f([0,1,2,3,4,5,6,7,8,9,10]), [0,2,4,6,8,10,12,14,16,18,20])
//assert(f([0,1,2,3,4,5,6,7,8,9,10]), [0,1,0,1,0,1,0,1,0,1,0])
//assert(f([0,1,2,3,4,5,6,7,8,9,10]), [0,0,0,0,0,0,1,1,1,1,1])
//assert(f([0,1,2,3,4,5,6,7,8,9,10]), [0,0,1,1,0,0,1,1,0,0,1])
assert(f([0,1,2,3,4,5,6,7,8,9,10]), [7,11,17,25,35,47,61,77,95,115,137])

print('#####  end  #####')