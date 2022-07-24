import {Router} from '../../../common/exApp'
import { singlelogs_Get} from '../../../controller/logs/singlelog.Ctrl'
const {requireAuth} = require("../../../middleware/auth");
Router.route('/singlelogs/:fname/:o')
.get(requireAuth,singlelogs_Get)
module.exports=Router