import {Router} from '../../../common/exApp'
import { videosofall_Get } from '../../../controller/VIDEOS/videosofall.Ctrl'

Router.route('/videosofall')
.get(videosofall_Get)
module.exports=Router