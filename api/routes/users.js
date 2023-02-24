const router = require( 'express' ).Router()
const bcrypt = require( 'bcrypt' )
const Users = require( '../models/users' )

/* UPDATE */
router.put( '/:id', async ( req, res ) => {
    if (req.body.password) {
        const salt = await bcrypt.genSalt( 10 )
        req.body.password = await bcrypt.hash( req.body.password, salt )
    }

    try {
        const updatedUser = await Users.findByIdAndUpdate( req.params.id, { $set: req.body }, { new: true } )
        res.status( 200 ).json( updatedUser )
    } catch (e) {
        res.status( 500 ).json( e )
    }
} )

/* GET */
router.get( '/:id', async ( req, res ) => {
    try {
        const user = await Users.findById( req.params.id )
        const { password, ...others } = user._doc
        res.status( 200 ).json( others )
    } catch (e) {
        res.status( 500 ).json( e )
    }
} )

/* DELETE */
router.delete( '/:id', async ( req, res ) => {
    try {
        const user = await Users.findByIdAndRemove( req.params.id )
        res.status( 200 ).json( `L'utilisateur ${user.username} a bien été supprimé.` )
    } catch (e) {
        res.status( 500 ).json( e )
    }
} )

module.exports = router