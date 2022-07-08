import {Router} from '../common/expressApp'
import { register_Get,register_Post,register_Put,register_delete } from '../controller/register.Ctrl'



Router.route('/register')
.get(register_Get).post(register_Post).put(register_Put).delete(register_delete)
module.exports=Router