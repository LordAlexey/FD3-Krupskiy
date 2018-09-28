var Sort = React.createClass({
    displayName: 'Sort',

    propsTypes : {
        defval: React.PropTypes.number,
        cbcheckboxChanged:React.PropTypes.func,
    },

    checkboxChanged:function (EO) {
        //console.log('changed from sort');
       this.props.cbcheckboxChanged(EO.target.checked);
       // console.log(EO.target.checked);
    },

    render : function () {
        return React.DOM.input({type:'checkbox',defaultChecked:(this.props.defval?true:false),
            onChange:this.checkboxChanged});
    }
});