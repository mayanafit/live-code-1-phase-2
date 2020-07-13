const router = require(`express`).Router()
const passwordRoutes = require(`./password`)
const UserController = require(`../controllers/UserController`)
const {authentication} = require(`../middlewares/auth`)


router.post(`/register`, UserController.register)
router.post(`/login`, UserController.login)
router.use(authentication)
router.use(`/passwords`, passwordRoutes)

module.exports = router