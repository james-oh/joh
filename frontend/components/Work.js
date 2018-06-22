import React, { Component } from "react";
import Link from "next/link";
import stylesheet from '../src/styles/style.scss'

const container = {
    width: 'calc(0.416666665 * (100vw - 20px))',
    height: '50vh',
    backgroundColor: '#eee',
    margin: '20px 0 0 calc(0.08333333333 * (100vw - 20px))',
    padding: 0,
    display: 'inline-block'
};

const caption = {
    position: 'absolute',
    bottom: 20,
    left: 'calc(0.08333333333 * (100vw - 20px))'
};

const Work = (props) => (
    <div style={container}>
      <div>{JSON.stringify(props.imgURLs)}</div>
      <img src={props.imgURLs[0]}/>
      <img src={props.imgURLs[1]}/>

      <div style={caption}>
        <p>Project Details</p>
      </div>
    </div>
);

export default Work;
