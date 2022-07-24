import {Router} from '../../../common/exApp'
import { videosPage_Get } from '../../../controller/VIDEOS/videosPage.Ctrl'
const {requireAuth} = require("../../../middleware/auth");
Router.route('/videospage')
.get(requireAuth,videosPage_Get)
module.exports=Router