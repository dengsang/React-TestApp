/**
 * Created by DENG on 10/18/2017.
 */

"use strict";  // test the variable to ensure that everything that we are doing is correct.


    var React =require('react');

    var Home = React.createClass({
        render: function () {
            return (
                <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                    <p>React, React Router and Flux for ultra-responsive webb apps</p>
                </div>
            );
        }
    });

    module.exports = Home;