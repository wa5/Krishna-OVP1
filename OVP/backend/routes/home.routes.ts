import {Router} from '../common/expressApp'
import { home_Get,home_Post,home_Put,home_delete } from '../controller/home.Ctrl'

Router.route('/home')
.get(home_Get).post(home_Post).put(home_Put).delete(home_delete )
module.exports=Router