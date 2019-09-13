import re

cpfs_to_test = ['88022832901', '83476696511', '165.244.120-44', '155.338.060/67', '00028362742', '00028362705', '23053275520', '38113468', '1204927403483', '562.915.801-51']

a = list(filter(lambda y: len(y) == 11,map(lambda x: re.sub('\D','',x), cpfs_to_test)))
print(a)

#  original code from face:
# replaces = '.,-/'
# cpf = list()
# for c in cpfs_to_test:
#     a = re.sub(replaces, '', c)
#     print(len(a),a)
#     if len(a)==11:
#         cpf.append(a)
# print(cpf)
