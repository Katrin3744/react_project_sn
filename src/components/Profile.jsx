import React from "react"
import classes from './Profile.module.css'
const Profile=()=>{
    return  <div className={classes.content}>
        <div >
            <img src="https://w-dog.ru/wallpapers/9/14/358044626273700/vesna-gory-alpy-dolina-doma-derevya-trava-zelen-nebo.jpg"/>
        </div>
        <div >
            <img src="http://images.fanpop.com/images/image_uploads/Bunny-Wallpapers-bunny-rabbits-128639_1024_768.jpg"/>
            ava+description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className='posts'>
                <div className={classes.item}>
                    post 1
                </div>
                <div className={classes.item}>
                    post2
                </div>
            </div>

        </div>

    </div>

}

export default Profile;