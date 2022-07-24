import {Router} from '../../../common/exApp'
import { uploadvideosPage_Get,uploadvideosPage_Post } from '../../../controller/VIDEOS/uploadvideosPage.Ctrl'
const {requireAuth,isAdmin} = require("../../../middleware/auth");
Router.route('/uploadvideos')
.get(requireAuth,uploadvideosPage_Get).post(uploadvideosPage_Post)
module.exports=Router