const { Router } = require('express')

const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')
const CartController = require('../controllers/CartController')
const User = require('../models/User')


const routes =  Router()


routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)
routes.delete('/users/:user_id', UserController.deleteUser)
routes.patch('/users/:user_id', UserController.updateUser)

routes.post('/sessions', SessionController.createSession)

routes.post('/products/:user_id', ProductController.createProduct)
routes.get('/:user_id/products', ProductController.getUserProducts)
routes.patch('/products/:user_id/:product_id', ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id', ProductController.deleteProduct)

routes.get('/products', ProductController.getProducts)
routes.get('/products/:product_id', ProductController.getProductById)

routes.post('/carts/:user_id', CartController.createCart)
routes.get('/carts/:user_id', CartController.getUserCarts)

routes.get('/carts/:user_id/:cart_id', CartController.getCart)
routes.patch('/carts/:user_id/:cart_id', CartController.updateCart)
routes.delete('/carts/:user_id/:cart_id', CartController.deleteCart)


module.exports = routes