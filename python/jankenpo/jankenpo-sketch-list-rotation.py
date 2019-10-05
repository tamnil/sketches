#!/bin/python3
from random import randint

objetos =  ['papel','pedra','tesoura']

def calcula_jogo  (minha_escolha,objeto_oponente):
    rotaciona = lambda lista, idx: lista[idx:] + lista[:idx]
    rotateMe = lambda objetos , el: rotaciona(objetos,objetos.index(el))
    adversario = lambda res,objeto_oponente: res.index(objeto_oponente)
    define_vencedor =  lambda x: 'ganhou' if x == 1 else 'perdeu'
    resultado = lambda val:  'empate' if val == 0 else define_vencedor(val)
    peso = adversario(rotateMe(objetos,minha_escolha), objeto_oponente)
    return resultado(peso)

def jogar():
    player = raw_input('pedra papel ou tesoura\n')
    com = objetos[ randint(0,2) ]
    print('sua escolha:' + player + ' vs  oponente:' + com  )
    print(calcula_jogo(player,com))
    continuar = raw_input('pressione qualquer tecla para continuar ou x para sair\n')
    jogar() if continuar != 'x' else False

jogar()
