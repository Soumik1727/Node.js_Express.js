var f = require('fs')


f.readFile('myfile.txt','utf-8',(err, data)=>{      // utf-8 = encoding or type of the file or format of the file
    console.log(data);
})
f.writeFile('myfile.txt','Hello Soumik!',(err)=>{    
    console.log("write successfully...");
})
f.appendFile('myfile.txt',' You will be loved by everyone!',(err)=>{      
    console.log("write successfully...");
})

                // For deleting a file write f.ulink instead of f.delete

f.unlink('file1.js',(err)=>{
    console.log("File is deleted successfully...");
})

// ............................Not related to file...realted to os module
var os = require('os')
console.log(os.cpus().length)   // Output : 4 => I have 4 core in my CPU
