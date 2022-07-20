import { connect, useSelector } from "react-redux"
import { getSingleMoviesSelectorId, getSingleMoviesSelectorId1 } from "store/moviesList/selector/IMoviesSelectors"
import { Dispatch } from "redux";
import { getAllUserSelector, getSingleUserSelectorId } from "store/user/selector/UserSelectors";
import { fetchUserListRequest } from "store/productlist/actionGenerator/actions";
import Like from "../Like";

interface IStateProps{
    videoId:string|undefined,
    userId:string|undefined,
    username:String|undefined,
    like: number|undefined;

}
interface  IownProps{
    id:string|undefined,
    like: number|undefined
}

const mapStateToprops=(state:any,ownProps:IownProps):IStateProps=>{
    const users=getSingleUserSelectorId(state,0)._id
console.log("-1---",ownProps.id)
    return {
        videoId:ownProps.id,
        like:ownProps.like,
        userId:getSingleUserSelectorId(state,0)?._id,
        username:getSingleUserSelectorId(state,0)?.name,
       
    }
}
const mapDispatchToprops=(dispatch:Dispatch)=>{    
    dispatch(fetchUserListRequest())  
    }
export const LikeContainer:React.ComponentType<IownProps>=connect(mapStateToprops,mapDispatchToprops)(Like)