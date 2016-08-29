function* gen(){
  let p1 = yield cp(1);
  let p2 = yield cp(2);
  console.log(p1);
  console.log(p2);
}

function cp(id){
  return new Promise((resolve)=>{
    console.log(id);
    resolve(id);
  })
}

function run(gen){
  let g = gen();

  function next(data?:any){
    let result = g.next(data);
    if(result.done){
      return result.value;
    }
    result.value.then(()=>{next(result.value)});
  }

  next();
}

export function runGen(){
  run(gen);
}
