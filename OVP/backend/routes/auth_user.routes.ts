
import {Router} from '../common/expressApp'
import { handleLogin_post } from '../controller/auth/auth.Ctrl'


Router.route('/loginuser')
.post(handleLogin_post)
module.exports=Router
