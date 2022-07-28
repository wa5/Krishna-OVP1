import {Router} from '../../../common/exApp'
import { userdetails_Get,userdetails_Post} from '../../../controller/userdetails/userdetails.Ctrl'
const {requireAuth} = require("../../../middleware/auth");
Router.route('/userdetails')
.get(requireAuth,userdetails_Get) 
module.exports=Router