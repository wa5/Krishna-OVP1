import {Router} from '../../common/exApp'
import { AllVideos_Get } from '../../controller/allmovies.Ctrl'

Router.route('/allvideos')
.get(AllVideos_Get)
module.exports=Router