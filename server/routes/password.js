const router = require(`express`).Router()
const PasswordController = require(`../controllers/PasswordController`)

router.get(`/`, PasswordController.show)
router.post(`/`, PasswordController.add)
router.delete(`/:id`, PasswordController.delete)

module.exports = router