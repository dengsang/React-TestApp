/**
 * Created by DENG on 10/24/2017.
 */

"use strict";

var React = require('react');

var About = React.create({
    render: function () {
        return(
          <div>
              <h1> ABOUT </h1>
                  <p>
                      This application uses the following technologies:
                      <ul>
                          <li>React</li>
                          <li>React Router</li>
                          <li>Flux</li>
                          <li>node</li>
                          <li>Gulp</li>
                          <li>Browserify</li>
                          <li>Bootstrap</li>

                      </ul>
                  </p>

          </div>
        );
    }
});

module.exports = About;