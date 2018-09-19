 z="";
process.argv.forEach(element => {
    if(element!=process.argv[0]&&element!=process.argv[1])
    {
    z+=element.toString()+',';  
    }
    
});
console.log(z);