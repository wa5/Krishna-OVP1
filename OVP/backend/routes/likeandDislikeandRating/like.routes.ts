import {Router} from '../../common/expressApp'
import { like_Get, like_Post } from '../../controller/likeandDislikeAndRating/like.Ctrl'

Router.route('/like')
.post(like_Post).get(like_Get)
module.exports=Router