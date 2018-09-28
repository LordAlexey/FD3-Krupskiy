var ListBlock = React.createClass({
    displayName:'ListBlock',
    propTypes : {
        list:React.PropTypes.arrayOf (
            React.PropTypes.shape({
                text: React.PropTypes.string.isRequired,
                key: React.PropTypes.number.isRequired,
            })
        )
    },

    getInitialState : function () {
      return {
          inputText: "",
          checkbox:false
      };
    },


    textChanged: function (text) {
       // console.log(text);
        this.setState({inputText:text});
    },

    checkboxChanged :function (checked) {
        //console.log('changed');
        this.setState({checkbox:checked});
        //this.setState({checkbox:true});
    },

    sort : function (a,b) {
        if(a.text>b.text) return 1;
        if (a.text < b.text) return -1;
    },


    render : function () {
       // console.log(this.state.inputText);
        var list = [];
        var selfState = this.state;
        var oldList = [];

        this.props.list.forEach(function (item,key) {
            oldList[key] = item;
        });

      //  console.log(oldList);
      //  console.log(this.props.list);

        if(this.state.checkbox) {
            oldList.sort(this.sort);
        }

        oldList.forEach(function (item,key) {
            if(item.text.indexOf(selfState.inputText) !== -1 || selfState.inputText==="")
            list[key] = React.DOM.option
            (
                {
                    key:item.key,
                },
                item.text
            )
        });

       // console.log(
          // this.textChanged
           // this.checkboxChanged
           // this.state.checkbox
      //  );

        return React.DOM.div (
            null,
            React.createElement(Sort,{defval:this.state.checkbox,
                cbcheckboxChanged:this.checkboxChanged}),
            React.createElement(Search,{defval:this.state.inputText,
                cbtextChanged:this.textChanged,
            }),
            React.DOM.select(
                {className:'list',multiple:'true'},
                list
            )
        )
    },
});