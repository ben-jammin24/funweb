artButton = () =>
{
    var w = window.open(""); //o[pen a new tab
    //tell it to do the literal html you want
    w.document.writeln("<html><head><title>Welcome to Art</title></head><body>todo: someing like add coloring pages</body></html>"); 
}
sportButton = () =>
{
    var w = window.open(""); //o[pen a new tab
    //tell it to do the literal html you want 
    w.location = "sports.html";
}
nbaHighlights = () =>
{
    const c =document.getElementById("basketballDiv");
    const node = document.createTextNode("you clicked basketball");
    c.appendChild(node);

}
