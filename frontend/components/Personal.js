import React, { Component } from "react";
import Link from "next/link";
import stylesheet from '../src/styles/style.scss'

const container = {
  width: 'calc(0.416666665 * (100vw - 20px))',
  height: '50vh',
  backgroundColor: '#eee',
  margin: '20px 0 0 20px',
  padding: 0,
  display: 'inline-block'
};

const caption = {
    position: 'absolute',
    bottom: 20,
    /*right: 'calc(0.08333333333 * (100vw - 20px))'*/
};

const Personal = () => (
    <div style={container}>
      <img />
      <div style={caption}>
      <p>Personal Work Details</p>
      </div>
    </div>
);

export default Personal;
