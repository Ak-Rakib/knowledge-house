import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <div className="blogs-child">
        <div className="ques-1">
          <h4>01: Props vs state</h4>
          <p>
            props and state are both mechanisms for managing data and passing
            information between different components of State, on the other
            hand, is a way to manage data within a component. State is defined
            within a component and can be updated through the use of setState()
            method. an application. Props (short for "properties") are a way to
            pass data from a parent component to a child component. props are
            used to pass data between components, while state is used to manage
            data within a component.
          </p>
        </div>
        <div className="ques-2">
          <h4>02: How does useState work?</h4>
          <p>
            In React, useState is a built-in hook that allows you to add state
            to your functional components. When you call useState(initialValue)
            inside a functional component, it returns an array with two values:
            the current state value and a function that can be used to update
            the state value. The initialValue argument is the initial
            value of the state.
          </p>
        </div>
        <div className="ques-3">
          <h4>Purpose of useEffect other than fetching data.</h4>
          <p>
            Although useEffect is often used for fetching data from APIs.
            1)Updating the document title: You can use useEffect to update the
            document title based on some state or prop in your component.
            2)Subscribing to a WebSocket: You can use useEffect to subscribe to
            a WebSocket and listen for incoming data. 3)Managing a timer: You
            can use useEffect to set up a timer and perform some action when
            the timer expires.
          </p>
        </div>
        <div className="ques-4">
          <h4>How Does React work?</h4>
          <p>
            React is a JavaScript library for building user interfaces. It
            follows a component-based architecture, where each component
            represents a specific part of the UI. When you build a React
            application, you create a tree of components that represent the
            entire UI. Each component can have its own state and properties,
            which are passed down to its child components. When a component's
            state or props change, React re-renders that component and its child
            components. React uses a technique called "virtual DOM" to
            efficiently update the UI without updating the entire page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
