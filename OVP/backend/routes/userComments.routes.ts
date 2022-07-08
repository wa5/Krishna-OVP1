import {Router} from '../common/expressApp'
import { userComments_Get,userComments_Post,userComments_Put,userComments_delete } from '../controller/userComments.Ctrl'

Router.route('/usercomments')
.get(userComments_Get).post(userComments_Post).put(userComments_Put).delete(userComments_delete )
module.exports=Router