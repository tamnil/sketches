# Definicao booleana dos caminhos
portas = {'ceu':True,'inferno':False}

# indole do vigia
resposta_vigia_mentiroso = lambda x: not x
resposta_vigia_sincero = lambda x: x

# Qual a respota para o ceu que o outro vigia vi dar?
perguntar_para_vigia_mentiroso = lambda x: not resposta_vigia_sincero(x)
perguntar_para_vigia_sincero = lambda x:  resposta_vigia_mentiroso(x)

porta_certa = lambda x: not x

#minha decisao
print(porta_certa(perguntar_para_vigia_sincero(portas['ceu'])))
print(porta_certa(perguntar_para_vigia_mentiroso(portas['ceu'])))

