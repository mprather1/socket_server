import 'babel-polyfill'
import express from 'express'
import path from 'path'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import getHTTPServer from 'httperver'

const props = {
  app: express(),
  port: process.env.PORT || 8000,
  environment: process.env.NODE_ENV || 'development'}

const { app, environment } = props

if (environment === 'development') {
  app.use(morgan('dev'))
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const server = getHTTPServer(props)

export default server
