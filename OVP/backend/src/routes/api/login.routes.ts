import {Router} from '../../common/exApp'
import { Login_Get } from '../../controller/login.Ctrl'

Router.route('/login')
.get(Login_Get)
module.exports=Router