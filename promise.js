var x=new Array();
x.push("pabba");
x.push("developer");
function verifyUser(user)
{
    var a=new Promise(function(resolve,reject)
    {
        if(user==="pabba")
        resolve(user);
        else
        {
            reject("unauthorized user");
        }
    });
    return a;
}
function getRoles(user)
{
    return new Promise(function(resolve,reject)
    {
        if(user=="pabba")
        resolve(x)
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
            if(x[i]=="pabba")
              resolve("success");
              else
              reject("failure");
        }
    })
}
function autheticateUser(user,password)
{
    return new Promise(function(resolve,reject){
        if(user=="pabba" && password=="pabba495")
        resolve(user);
        else
        reject("Failure");
    })
}
    autheticateUser("pabba","pabba495")
    .then(verifyUser)
    .then(getRoles)
    .then(checkUserAccess)
    .then(function(res){
        console.log(res);
    })
    .catch(function(res){
        console.log(res);
    })
