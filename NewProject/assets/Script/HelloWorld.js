cc.Class({
    extends: cc.Component,

    properties: {
        label: cc.Label ,
        buttno:cc.Node ,
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;

        this.buttno.on("click",this.onClick ,this);
    },

    onClick:function(){
        cc.log("二逼明是个🐶");
        //window.location.href = 'tel://' + 13691248502;
        window.location.href = 'wtai://wp//mc;13691248502 '//'sms://' + 13691248502;
        //var oDial =document.getElementById('dial').setAttribute('href','tel:100010');
        
        // const link = document.createElement('a')
        // link.setAttribute('href', 15538127696)
        // link.setAttribute('target', '_blank')

        // const evt = document.createEvent('MouseEvents')
        // evt.initMouseEvent('click', true, true)
        // link.dispatchEvent(evt）;
    },

    // called every frame
    update: function (dt) {

    },
});
