let obj={ name:"abc",
          age:0,
          color:{
            color1:"red",
            color2:"green"
          }
       }
let fun=(obj)=>{
    let obj2=JSON.parse(JSON.stringify(obj));
    obj2.age=20;
    obj2.color.color1="yellow";
    console.log(obj,obj2);

}
fun(obj);



