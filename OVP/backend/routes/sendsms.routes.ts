import {Router} from '../common/expressApp'
import { sms_Post } from '../controller/sms.Ctrl'

Router.route('/sendsms')
.post(sms_Post)
module.exports=Router