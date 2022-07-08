import {Router} from '../../common/expressApp'
import { like_Post } from '../../controller/likeandDislikeAndRating/like.Ctrl'

Router.route('/rating')
.put(like_Post)
module.exports=Router