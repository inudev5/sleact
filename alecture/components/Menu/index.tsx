import React, { CSSProperties, FC, useCallback } from "react";
import { CreateMenu, CloseModalButton } from "@components/Menu/styles";

interface Props{
  show:boolean;
  onCloseModal:(e:any)=>void;
  style: CSSProperties;
  closeButton?:boolean;
}


const Menu:FC<Props> = ({children, closeButton, style, show, onCloseModal})=>{
  const stopPropagation = useCallback((e)=>{
    e.stopPropagation();
  }, []);
if(!show){
  return null;
}
  return(
    <CreateMenu onClick={onCloseModal}>
      <div onClick={stopPropagation} style={style}>
      {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
      {children}
      </div>
    </CreateMenu>
  )
}
Menu.defaultProps={
  closeButton:true,
}

export default Menu;