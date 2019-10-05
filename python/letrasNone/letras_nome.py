
letras = (
    ('a','e','i','o','u'),
    ('bcdfghjk',
     ('lmnpq',
      ('rstvxyz')
      )
     )

)

a = ''.join(sorted(str(letras)))[38:]
print(a[19]+a[0]+a[12]+a[13]+a[8]+a[11])

