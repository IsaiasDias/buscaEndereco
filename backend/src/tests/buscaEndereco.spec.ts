import { retornaEndereco } from '../servico/buscaEndereco'
import { Endereco } from '../tipos/Endereco'
import 'mocha'
import { expect } from 'chai'

describe('Testes API externa', () => {
  it('possui cep', async () => {
    const result = await retornaEndereco('36010011')
    expect(result).haveOwnProperty('cep')
  })
  it('possui estado', async () => {
    const result = await retornaEndereco('36010011')
    expect(result).haveOwnProperty('state')
  })
  it('possui cidade', async () => {
    const result = await retornaEndereco('36010011')
    expect(result).haveOwnProperty('city')
  })
  it('possui bairro', async () => {
    const result = await retornaEndereco('36010011')
    expect(result).haveOwnProperty('neighborhood')
  })
  it('possui rua', async () => {
    const result = await retornaEndereco('36010011')
    expect(result).haveOwnProperty('street')
  })
})