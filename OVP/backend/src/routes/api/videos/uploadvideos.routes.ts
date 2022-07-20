import {Router} from '../../../common/exApp'
import { uploadvideosPage_Get } from '../../../controller/VIDEOS/uploadvideosPage.Ctrl'

Router.route('/uploadvideos')
.get(uploadvideosPage_Get)
module.exports=Router