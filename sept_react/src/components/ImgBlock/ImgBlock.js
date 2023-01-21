import React from "react";

export const ImgBlock = () => {
    const url = 'https://static.onecms.io/wp-content/uploads/sites/6/2019/11/rick-and-morty-season-4-2000.jpg'

    return (
        <div>
            <img src={url} alt='rick happy'/>
        </div>
    )
}