import React from "react"
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile=()=>{
    return  <div className={classes.content}>
        <div className={classes.back}>
            <img src="https://w-dog.ru/wallpapers/9/14/358044626273700/vesna-gory-alpy-dolina-doma-derevya-trava-zelen-nebo.jpg"/>
        </div>
        <div className={classes.ava}>
            <img src="http://images.fanpop.com/images/image_uploads/Bunny-Wallpapers-bunny-rabbits-128639_1024_768.jpg"/>
            ava+description
        </div>
       <MyPosts/>

    </div>

}

export default Profile;