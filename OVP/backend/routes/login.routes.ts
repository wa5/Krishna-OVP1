import {Router} from '../common/expressApp'
import { login_Get ,login_Post,login_Put,login_delete} from '../controller/login.Ctrl'

Router.route('/login')
.get(login_Get).post(login_Post).put(login_Put).delete(login_delete)

module.exports=Router