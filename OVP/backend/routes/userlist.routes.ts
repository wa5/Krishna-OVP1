import {Router} from '../common/expressApp'
import { userlist_Get,userlist_Post,userlist_Put,userlist_delete } from '../controller/userlist.Ctrl'

Router.route('/userlist')
.get(userlist_Get).post(userlist_Post).put(userlist_Put).delete(userlist_delete )
module.exports=Router