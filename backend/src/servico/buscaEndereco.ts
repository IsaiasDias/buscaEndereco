import {Endereco} from '../tipos/Endereco'

const cep = require('cep-promise')

export async function retornaEndereco(valorCep:string):Promise<Endereco>{
  return await cep(valorCep)
}


