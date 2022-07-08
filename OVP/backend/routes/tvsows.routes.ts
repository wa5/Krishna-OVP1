import {Router} from '../common/expressApp'
import { tvshows_Get,tvshows_Post,tvshows_Put,tvshows_delete } from '../controller/tvshows.Ctrl'

Router.route('/tvshows')
.get(tvshows_Get).post(tvshows_Post).put(tvshows_Put).delete(tvshows_delete )
module.exports=Router