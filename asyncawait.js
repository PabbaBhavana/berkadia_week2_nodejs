var x=new Array();
x.push("software");
x.push("developer");
function verifyUser(user)
{
    var p=new Promise(function(resolve,reject)
    {
        if(user==="pabba")
        resolve(user);
        else
        {
            reject("unauthorized user");
        }
    });
    return p;
}
function getRoles(user)
{
    return new Promise(function(resolve,reject)
    {
        if(user==="pabba"){
        resolve(x);
        }
        else{
            reject("user is invalid");
        }
    })
}
function checkUserAccess(x){
    return new Promise(function(resolve,reject){
        var i;
        for(i=0;i<x.length;i++)
        {
            if(x[i]==='software')
              resolve("success");
              else
              reject("failure");
        }
    })
}
function authenticateUser(user,password)
{
    return new Promise(function(resolve,reject){
        if(user==="pabba" && password==="pabba495")
        resolve(user);
        else
        reject("Failure");
    })
}
   function  authenticateUser(user,password)
   {
       return new Promise(function(resolve,reject){
           if(user==="pabba" && password==="pabba495")
           resolve(user);
           else
           reject("failure")
       })
    }
    async function output(){
        try{
            var a=await authenticateUser("pabba","pabba495");
            var b=await verifyUser(a);
            var c=await getRoles(b);;
            var d=await checkUserAccess(c);
                console.log(d);
        }
        catch(err)
        {
            console.log("error occurred",err);
        }
    }
    output();