import {Router} from '../../../common/exApp'
import { singlepage_Get } from '../../../controller/VIDEOS/singlepage.Ctrl'
const {requireAuth} = require("../../../middleware/auth");
Router.route('/singlepage')
.get(requireAuth,singlepage_Get)
module.exports=Router