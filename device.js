deviceTypes['wake on lan']={
    name:'wake on lan',
    onChange:function(){
        var device=$('<li class="form-group">')
            .append('<label class="col-sm-2 control-label" for="code">Mac Address</label>')
            .append('<div class="col-sm-10"><input class="form-control" placeholder="XX:XX:XX:XX:XX:XX" id="mac" name="mac"></select></div>')
            .appendTo('#commands');
        return 'dynamic';
    },
    onAdd:function(){
    }, 
    onSave:function(data){
        data.append('mac', $('#mac').val());
    },
    onServerSave:function(device, body){
        var ptType={
            commands:
            {
               'on':'/api/wol/'+body.mac,
            }
        };
        
        device.type='switch';
        var deviceToSave=$.extend({}, device);
        deviceToSave.prototype=ptType;
        $.extend(device, ptType);
    }
};  