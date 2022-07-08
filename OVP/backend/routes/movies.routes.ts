import {Router} from '../common/expressApp'
import { movies_Get,movies_Post,movies_Put,movies_delete } from '../controller/movies.Ctrl'

Router.route('/movies1')
.get(movies_Get).post(movies_Post).put(movies_Put).delete(movies_delete )
module.exports=Router