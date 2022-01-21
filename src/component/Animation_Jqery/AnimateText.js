import React, { useEffect, useRef } from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery'

export default function AnimateText({children}) {
    const first = useRef();
    // const slide = useRef();
    useEffect(() => {
      

         $(findDOMNode(first.current)).animate({height:"40px"},1000);
      
    
    },[]);
  return <div ref={first}>{children}</div>;
}

