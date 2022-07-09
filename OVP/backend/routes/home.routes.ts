import {Router} from '../common/exApp'
import { home_Get,home_Post,home_Put,home_delete } from '../controller/home.Ctrl'

Router.route('/home')
.get(home_Get)
module.exports=Router