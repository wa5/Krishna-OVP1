import {Router} from '../../../common/exApp'
import { videosPage_Get } from '../../../controller/VIDEOS/videosPage.Ctrl'

Router.route('/videospage')
.get(videosPage_Get)
module.exports=Router