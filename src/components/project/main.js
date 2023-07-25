import React from "react";
import TabView from "../tabview";
import MainMenu from "../menu";


const Home = (props) => {
    const { username, password } = props
    // const data= localStorage.getItem("credentails")
    //  const userdetails = JSON.stringify(data)
    // console.log(data,"lll");
    console.log(username, password);

    return (
        <>
            <MainMenu
                username={username}
                password={password}></MainMenu>
            <TabView></TabView>
        </>
    )
}

export default Home