var x=new Array();
x.push("software");
x.push("developer");
function verifyUser(user,callback)
{
        if(user=="pabba")
        callback(user)
        else
        {
            callback("unauthorized user")
        }
}
function getRoles(user,callback)
{
        if(user=="pabba")
        callback(x)
        else{
            callback("user is invalid")
        }
}
function checkUserAccess(x,callback){
        var i;
        for(i=1;i<=x.length;i++)
        {
            if(x[i]=="pabba"){
              callback("success");
              break;
            }
              else
              callback("failure")
        }
    }
function autheticateUser(user,password,callback)
{
        if(user=="pabba" && password=="pabba495")
        callback(user);
        else
        callback("Failure");
}
    autheticateUser("pabba","pabba495",function(xres){
    verifyUser(xres,function(vres){
    getRoles(vres,function(gres){
    checkUserAccess(gres,function(cres){
        console.log(cres);
    })
})
    })
})