//! App
//! version : 1.0.0
//! author  : De Bels Carl
//! license : MIT
//! date    : Q1-2019


import "../css/site.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/jspanel4/dist/jspanel.css";

import "lib_jspanel";
//import "lib_jspanel_hint";



var w: any = window;
var panel = w.jsPanel.create({
    setStatus: 'maximized'
});

window.setTimeout(function () {
    panel.normalize();
}, 2000);
// note the class 'jsPanel-ftr-btn' added to the button elements preventing them from acting as drag handle
// while the span element does drag the panel

//w.jsPanel.hint.create({
//    position: 'center-top 0 15 down',
//    contentSize: '330 auto',
//    content: '<p>carl de bels</p>',
//    theme: 'success filled',
//    headerTitle: '<i class="fa fa-check"></i> Success'
//});

//w.jsPanel.create({
//    theme: {
//        bgPanel: 'rgb(65, 126, 128)',
//        bgContent: '#67989A',
//        colorHeader: '#f0f0f0',
//        colorContent: '#333'
//    },
//    headerToolbar: '<span>just some text ...</span>',
//    content: '<p>Lorem ipsum ...</p>',
//    contentSize: '400 170',
//    position: 'center -60 -60'
//});

//w.jsPanel.create({
//    theme: {
//        bgPanel: 'url("img/trianglify-primary.svg") right bottom',
//        bgContent: '#fff',
//        colorHeader: '#fff',
//        colorContent: '#000'
//    },
//    headerToolbar: '<span>just some text ...</span>',
//    content: '<p>Lorem ipsum ...</p>',
//    contentSize: '400 170'
//});

//w.jsPanel.create({
//    theme: {
//        bgPanel: 'linear-gradient(120deg,#155799,#159957)',
//        bgContent: 'transparent',
//        colorHeader: '#fff',
//        colorContent: '#fff',
//        border: '4px solid #157B75'
//    },
//    headerToolbar: '<span>just some text ...</span>',
//    content: '<p>Lorem ipsum ...</p>',
//    contentSize: '400 170',
//    position: 'center 60 60'
//});
//w.jsPanel.create({
//    theme: 'primary',
//    headerTitle: 'my panel #1',
//    position: 'center-top 0 58',
//    contentSize: '450 250',
//    content: '<p>Example panel ...</p>',
//    callback: function () {
//        this.content.style.padding = '20px';
//    },
//    onbeforeclose: function () {
//        return confirm('Do you really want to close the panel?');
//    }
//});


//w.jsPanel.create({
//    headerTitle: 'just another title'
//});

//w.jsPanel.create({
//    animateIn: 'jsPanelFadeIn'
//});

//w.jsPanel.create({
//    animateIn: 'animated bounceInLeft',    // animation from animate.css
//    animateOut: 'animated bounceOutRight',  // animation from animate.css
//    autoclose: 4000
//});

//w.jsPanel.create({
//    theme: "crimson",
//    border: "2px solid" /* without a color value primary theme color is used for border */
//});

//w.jsPanel.create({
//    theme: 'gainsboro',
//    border: '2px grey', /* border-style defaults to 'solid' */
//    position: 'center 60 60'
//});
//w.jsPanel.create({
//    theme: 'red900',
//    border: 'inset red600', /* border-width defaults to 'medium' */
//    position: 'center 120 120'
//});

//w.jsPanel.create({
//    theme: 'crimson filled',
//    borderRadius: 6
//});

//w.jsPanel.create({
//    border: 'solid',
//    borderRadius: '8px',
//    position: 'center 60 60'
//});

//w.jsPanel.create({
//    boxShadow: 5
//});

//w.jsPanel.create({
//    closeOnEscape: true
//});
//w.jsPanel.create({
//    theme: 'info',
//    position: 'center 50 50',
//    content: '<p>This panel will not close on hitting the <kbd>ESC</kbd> key.</p>'
//});
//w.jsPanel.create({
//    closeOnEscape: true,
//    position: 'center 100 200',
//    callback: function () {
//        var content = this.content;
//        w.jsPanel.create({ // note that this is a childpanel
//            container: content,
//            theme: 'warning',
//            contentSize: '200 80',
//            position: 'center-bottom 0 -10'
//        });
//    }
//})



