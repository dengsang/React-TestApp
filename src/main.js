/**
 * Created by DENG on 10/13/2017.
 */
    $ = jQuery = require('jquery');
    var React = require('react');
    var Home = require('./components/homePage');
    var About = require('./components/aboutPage');

//new react component
    (function(win) {
        "use strict";
        var App = React.createClass({
            render: function () {
                var Child;

                switch (this.props.route){
                    case 'about': Child = About; break;
                    default: Child = Home;
                    }

                    return (
                        <div>
                            <Child/>
                        </div>
                    );
                }
            });

        function render () {
            var route = win.location.hash.substr(1);
            React.render(<App route={route}/>, document.getElementById('app'));
            }

            //eventListner

        win.addEEventListener('hashchange', render);
        render();

            //var App = console.log('Hello  world  from Browserify');
            // module.exports = App;

            React.render(<Home/>, document.getElementById('app'));
    }(window));