
import {Router} from '../common/expressApp'
import { new_user_register_Post } from '../controller/newUser/new_user_register.Ctrl'


Router.route('/newuser')
.post(new_user_register_Post)
module.exports=Router