const router = require(`express`).Router()
const PasswordController = require(`../controllers/PasswordController`)
const {authorization} = require(`../middlewares/auth`)

router.get(`/`, PasswordController.showAll)
router.post(`/`, PasswordController.add)
router.delete(`/:id`, authorization, PasswordController.delete)

module.exports = router