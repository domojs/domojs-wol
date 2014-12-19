module.exports={
    get:function(id, callback)
    {
        console.log('waking up '+id);
        require('wake_on_lan').wake(id, function(error){
            console.log('sent packet');
            console.log(error);
            if(error)
                callback(error);
            else
                callback(200);
        });
     },
 }; 