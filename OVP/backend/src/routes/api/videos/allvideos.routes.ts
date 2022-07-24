import {Router} from '../../../common/exApp'
import { AllVideosofuser_Get } from '../../../controller/VIDEOS/allVideos.Ctrl'

Router.route('/allvideos')
.get(AllVideosofuser_Get)
module.exports=Router