from rest_framework import serializers
from .models import Company

class CompanySerializer(serializers.ModelSerializer):
    '''
    Serializa las instancias
    '''
    class Meta:
        model = Company
        fields = ('name',
                 'address',
                 'NIT',
                 'tel')
    
    def valid_NIT(self, n1, n2, n3, n4):
        '''
        Valida si el NIT es un NIT válido
        args:
        n1 - dígitos 1-3 del NIT
        n2 - dígitos 4-6 del NIT
        n3 - dígitos 7-9 del NIT
        n4 - dígito 10 del NIT
        '''

        NIT1 = n1
        NIT2 = n2
        NIT3 = n3
        NIT4 = n4

        NIT = NIT1 + NIT2 + NIT3 + NIT4
        NIT = NIT.strip()

        multi = [41, 37, 29, 23, 19, 17, 13, 7, 3]
        val = sum(list(map(lambda n, m: n * m, multi, [int(c) for c in NIT[:-1]])))
        val = int(val) % 11

        if (val >= 2):
            val = 11 - val

        return str(val) == NIT[9]