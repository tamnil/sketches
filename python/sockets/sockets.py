import socket

conn = socket.socket()
port = 2001
conn.bind(('',port))
conn.listen(5)

soma = lambda x: lambda y: x+y
subtracao = lambda x: lambda y: x-y
multiplicacao = lambda x: lambda y: x*y
divisao = lambda x: lambda y: x/y


operacoes = {
    "soma": lambda x,y: x+y,
    "sub": lambda x,y: x-y,
    "mul" : lambda x,y: x*y,
    "div" : lambda x,y: x/y
}

processa_mensagem = lambda x: dict(filter(lambda a: a[0] == x , operacoes ))

c, addr = conn.accept()

while True:
   c.send(bytes('digite seu comando:','utf-8') )
   msg = str(c.recv(1024)).encode("unicode_escape")
   proc = processa_mensagem(msg)
   print(proc,'selected')

   print(msg)

c.close()
