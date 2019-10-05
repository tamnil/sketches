#!/bin/python3
# -*- coding: utf-8 -*-
from random import randint
import functools
import math

sqrt3 = math.sqrt(3)
pi = math.pi
e = math.e
euler120 = e ** (4j * pi/3 )


sqrt3 = math.sqrt(3)
# π = math.pi
e = math.e
sin = math.sin
cos = math.cos

theta = 120
objetos =  {'papel': 1j ,'pedra': cos(theta) + sin(theta)*1j,'tesoura': cos(2*theta) +sin(2*theta)*1j}



# objetos =  {'papel': 1j ,'pedra': -sqrt3/2 - .5j,'tesoura': sqrt3/2 -.5j}
def rot ():
    # map(lambda x : x*euler120, objetos)
    rotated = map(lambda x : {x:objetos[x]*euler120}, objetos)
    print rotated

    return False

rot()



'''
def calcula_jogo  (minha_escolha,objeto_oponente):
    #rotaciona = lambda lista, idx: lista[idx:] + lista[:idx]
    rotateMe = lambda objetos , el: rotaciona(objetos,objetos.index(el))
    adversario = lambda res,objeto_oponente: res.index(objeto_oponente)
    define_vencedor =  lambda x: 'ganhou' if x == 1 else 'perdeu'
    resultado = lambda val:  'empate' if val == 0 else define_vencedor(val)
    peso = adversario(rotateMe(objetos,minha_escolha), objeto_oponente)
    return resultado(peso)

def jogar():
    player = input('pedra papel ou tesoura\n')
    com = objetos[ randint(0,2) ]
    print('sua escolha:' + player + ' vs  oponente:' + com  )
    print(calcula_jogo(player,com))
    continuar = input('pressione qualquer tecla para continuar ou x para sair\n')
    jogar() if continuar != 'x' else False

jogar()
'''
