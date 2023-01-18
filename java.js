   var no=0;
function calc(val )
{
    var chk=val
    if(chk=="del")
    {
        var n= document.getElementById("inp").value
        no=n.slice(0,-1)
        document.getElementById("inp").value=n.slice(0,-1)
    }
   else if(no==0)
    {
      no=val
      document.getElementById("inp").value=no
    }
    else
    {
        no=no+val;
        document.getElementById("inp").value=no
    }
}
function opr()
{
    var nos=document.getElementById("inp").value;
    var res=eval(nos);
    document.getElementById("inp").value=res;
    no=0
}