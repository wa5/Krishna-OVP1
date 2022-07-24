import {Router} from '../../../common/exApp'
import { logs_Get} from '../../../controller/logs/logs.Ctrl'
const {requireAuth} = require("../../../middleware/auth");
Router.route('/logs')
.get(requireAuth,logs_Get)
module.exports=Router