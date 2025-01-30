import React from 'react';

export interface ButtonProps {
  size: "sm"|"lg"|"md";
  variant: "primary"|"secondary";
  disabled?: boolean;
  text:string;
  onClick?: () => void;
  startIcon?:any;  // optional
  endIcon?: any;
}
const Button = (props:ButtonProps) => {
  return (
    <div >{props.text}</div>
  )
}

//<Button endIcon={"+"} startIcon={"-"} size='sm' variant='primary' text={'signup'} onClick={()=>{alert("hey")}} ></Button>

export default Button