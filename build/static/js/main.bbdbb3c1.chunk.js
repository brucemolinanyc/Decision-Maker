(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(30)},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(6),l=n.n(i),s=n(1),r=n(2),c=n(4),d=n(3),u=n(5),p=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={error:void 0},n.handleAddOption=function(e){e.preventDefault();var t=e.target.elements.option.value.trim(),a=n.props.handleAddOption(t);n.setState(function(){return{error:a}}),a||(e.target.elements.option.value="")},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.error&&o.a.createElement("p",{className:"add-option-error"},this.state.error),o.a.createElement("form",{className:"add-option",onSubmit:this.handleAddOption},o.a.createElement("input",{className:"add-option__input",type:"text",name:"option"}),o.a.createElement("button",{className:"button"},"Add Option")))}}]),t}(o.a.Component),m=function(e){return o.a.createElement("div",{className:"option"},o.a.createElement("p",{className:"option__text"},e.count,". ",e.optionText),o.a.createElement("button",{className:"button button--link",onClick:function(t){return e.handleDeleteOption(e.optionText)}},"Remove"))},h=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"widget-header"},o.a.createElement("h3",{className:"widget-header__title"},"Your Options"),o.a.createElement("button",{className:"button button--link",onClick:e.handleDeleteOptions},"Remove All")),0===e.options.length&&o.a.createElement("p",{className:"widget__message"},"Please add an option to get started"),e.options.map(function(t,n){return o.a.createElement(m,{key:n,optionText:t,count:n+1,handleDeleteOption:e.handleDeleteOption})}))},O=function(e){return o.a.createElement("div",null,o.a.createElement("button",{className:"big-button",onClick:e.handlePick,disabled:!e.hasOptions},"What should I do?"))},f=function(e){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"header__title"},e.title),e.subtitle&&o.a.createElement("h2",{className:"header__subtitle"},e.subtitle)))};f.defaultProps={title:"Indecision"};var v=f,E=n(13),b=n.n(E),N=function(e){return o.a.createElement(b.a,{isOpen:!!e.selectedOption,onRequestClose:e.clearModalOption,contentLabel:"Selected Option",closeTimeoutMS:200,className:"modal"},o.a.createElement("h3",{className:"modal__title"},"Selected Option"),e.selectedOption&&o.a.createElement("p",{className:"modal__body"},e.selectedOption),o.a.createElement("button",{className:"button",onClick:e.clearModalOption},"Okay"))},g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={options:[],selectedOption:void 0},n.handleDeleteOptions=function(){n.setState(function(){return{options:[]}})},n.handleDeleteOption=function(e){n.setState(function(t){return{options:t.options.filter(function(t){return e!==t})}})},n.handlePick=function(){var e=Math.floor(Math.random()*n.state.options.length),t=n.state.options[e];n.setState(function(){return{selectedOption:t}})},n.handleAddOption=function(e){return e?n.state.options.indexOf(e)>-1?"This option already exists":void n.setState(function(t){return{options:t.options.concat(e)}}):"Enter valid value to add item!"},n.clearModalOption=function(){n.setState(function(){return{selectedOption:void 0}})},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){try{var e=localStorage.getItem("options"),t=JSON.parse(e);t&&this.setState(function(){return{options:t}})}catch(n){}}},{key:"componentDidUpdate",value:function(e,t){if(t.options.length!==this.state.options.length){var n=JSON.stringify(this.state.options);localStorage.setItem("options",n)}}},{key:"componentWillUnmount",value:function(){console.log("componentWillUnmount")}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(v,{subtitle:"Put your life in the hands of a computer"}),o.a.createElement("div",{className:"container"},o.a.createElement(O,{hasOptions:this.state.options.length>0,handlePick:this.handlePick}),o.a.createElement("div",{className:"widget"},o.a.createElement(h,{options:this.state.options,handleDeleteOptions:this.handleDeleteOptions,handleDeleteOption:this.handleDeleteOption}),o.a.createElement(p,{handleAddOption:this.handleAddOption})),o.a.createElement(N,{selectedOption:this.state.selectedOption,clearModalOption:this.clearModalOption})))}}]),t}(o.a.Component);n(28),n(29);l.a.render(o.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bbdbb3c1.chunk.js.map