import React from "react";
import * as C from "./styles"
import SidebarChats from "./SidebarChats/index";
import SidebarHeader from "./SidebarHeader/index";




const Sidebar = ({setUserChat, userChat}) => {
return (
    <C.Container>
        <SidebarHeader setUserChat={setUserChat} />
        <SidebarChats setUserChat={userChat} userChat={userChat} />
    </C.Container>
)
};

export default Sidebar
