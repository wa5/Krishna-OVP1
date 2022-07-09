import {Router} from '../common/exApp'
import { Register_Get } from '../controller/register.Ctrl'

Router.route('/register') 
.get(Register_Get)
module.exports=Router