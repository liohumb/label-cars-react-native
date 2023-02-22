const router = require( 'express' ).Router()
const Cars = require( '../models/cars' )

/* CREATE */
router.post( '/', async ( req, res ) => {
    const newCar = await new Cars( req.body )

    try {
        const savedCar = newCar.save()
        res.status( 200 ).json( savedCar )
    } catch (e) {
        res.status( 500 ).json( e )
    }
} )

/* UPDATE */
router.put( '/:id', async ( req, res ) => {
    try {
        const updatedCar = await Cars.findByIdAndUpdate( req.params.id, { $set: req.body }, { new: true } )
        res.status( 200 ).json( updatedCar )
    } catch (e) {
        res.status( 500 ).jason( e )
    }
} )

/* GET */
router.get( '/:id', async ( req, res ) => {
    try {
        const car = await Cars.findById( req.params.id )
        res.status( 200 ).json( car )
    } catch (e) {
        res.status( 500 ).json( e )
    }
} )

/* GET ALL */
router.get( '/', async ( req, res ) => {
    try {
        const cars = await Cars.find()
        res.status( 200 ).json( cars )
    } catch (e) {
        res.status( 500 ).json( e )
    }
} )

/* DELETE */
router.delete( '/:id', async ( req, res ) => {
    try {
        const car = await Cars.findByIdAndRemove( req.params.id )
        res.status( 200 ).json( `Le voiture ${car.name} a bien été supprimé` )
    } catch (e) {
        res.status(500).json(e)
    }
} )

module.exports = router