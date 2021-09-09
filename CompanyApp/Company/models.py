from django.db import models
from django.core.validators import MinLengthValidator

'''
Descripción: Contiene el modelo de la empresa, dicho modelo contiene:
    - name: Nombre de la empresa, Char con longitud máx de 30
    - address: Dirección de la empresa, Char con longitud máx de 50
    - NIT: NIT de la empresa, primary key de Company, Integer con longitud fija de 10
    - tel: Teléfono de la empresa, Integer con longitud fija de 7
'''


class Company(models.Model):
    '''
    Clase que contiene la plantilla del objeto Company
    '''

    # Atributos
    name = models.CharField(blank=False, max_length=30)
    address = models.CharField(blank=False, max_length=50)
    NIT = models.CharField(primary_key=True, blank=False,
                              max_length= 10, validators=[MinLengthValidator(10)])
    tel = models.CharField(blank=False, max_length= 7, validators=[MinLengthValidator(7)])
