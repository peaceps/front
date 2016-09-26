export async function test(){
    let a = await new Promise((resolve,reject)=>setTimeout(resolve("a"),3000));
    console.log(a);
    let b = await new Promise((resolve,reject)=>setTimeout(resolve("b"),3000));
    console.log(b);
}
