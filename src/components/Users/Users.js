import React from "react";
import userPhoto from "../../assets/user-icon.svg";
import {NavLink} from "react-router-dom";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={(e) => {props.onPageChanged(p);}}
                             className={props.currentPage === p && "selectedPage"}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                     <span>
                         <div>
                             <NavLink to={'/profile/'+u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" width="80px"/>
                             </NavLink>
                         </div>
                         <div>
                             {u.followed
                                 ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                           onClick={() => {props.unfollow(u.id);}}>unfollow</button>
                                 : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                           onClick={() => {props.follow(u.id);}}>follow</button>}
                         </div>
                     </span>
                <span>
                         <span>
                             <div>{u.name}</div>
                         </span>
                         <span><div>{"u.location.country"}</div><div>{"u.location.city"}</div></span>
                     </span>
            </div>)
        }
    </div>
};

export default Users;