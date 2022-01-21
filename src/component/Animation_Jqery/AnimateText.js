import React, { useEffect, useRef } from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery'

export default function AnimateText({children}) {
    const First = useRef();
    // const slide = useRef();
    useEffect(() => {
        $(findDOMNode(First)).animate({top:"30px"},"slow");
    
    },[]);
  return <div ref={First}>{children}</div>;
}

