import { Request, Response } from 'express'
import {retornaEndereco} from './servico/buscaEndereco'
import * as cors from 'cors'

var express = require('express')
var app = express()

const allowedOrigins = ['http://localhost:3000']

const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: allowedOrigins,
  preflightContinue: false,
}

app.use(express.json())
app.use(cors(options))

app.get('/:reqcep', async (req:Request, res:Response) => {
  const numeroCep = req.params.reqcep
  const cep = await retornaEndereco(numeroCep)
  res.send(cep)
})

export default app.listen(4000)
