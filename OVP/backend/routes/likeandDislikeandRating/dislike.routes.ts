import {Router} from '../../common/expressApp'
import { dislike_Post,dislike_Get } from '../../controller/likeandDislikeAndRating/dislike.Ctrl'

Router.route('/dislike')
.post(dislike_Post).get(dislike_Get)
module.exports=Router 