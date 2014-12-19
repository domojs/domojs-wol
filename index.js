
exports.init=function(config)
{
    $('fs').exists('./modules/wol/devices.json', function(exists){
        if(exists)
            $.each($('./modules/wol/devices.json'), function(index, device){
                $.device(device);
            });
    });
};  