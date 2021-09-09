from django.shortcuts import render
from django.shortcuts import get_object_or_404
from .models import Company
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from .models import Company
from .serializer import CompanySerializer


from django.views.generic import (
    CreateView,
    DetailView,
    UpdateView,
    ListView,
    DeleteView
)


'''
Descripción: Manejo de la base de datos para Company.
'''
@csrf_exempt
def CompanyApi(request, NIT = 0):
    '''
    Recibe el request y un NIT en el caso de edición y eliminación.
    '''
    if request.method == 'GET':
        companys = Company.objects.all()
        company_serializer = CompanySerializer(companys, many = True)
        return JsonResponse(company_serializer.data, safe = False)

    elif request.method == 'POST':
        company_data = JSONParser().parse(request)
        company_serializer = CompanySerializer(data = company_data)
        if company_serializer.is_valid():
            print("Entra acá")
            if True:
            #if company_serializer.valid_NIT():
                company_serializer.save()
                return JsonResponse("Añadido satisfactoriamente", safe = False)
            else:
                print('No es un NIT valido')
                return JsonResponse("No es un NIT valido")
        return JsonResponse("Fallido al añadir", safe = False)
    
    elif request.method == 'PUT':
        company_data = JSONParser().parse(request)
        company = Company.objects.get(NIT = company_data["NIT"])
        company_serializer = CompanySerializer(company, data = company_data)
        if company_serializer.is_valid():
            if True:
            #if company_serializer.valid_NIT():
                company_serializer.save()
                return JsonResponse("Editado satisfactoriamente", safe = False)
            else:
                print('No es un NIT valido')
                return JsonResponse("No es un NIT valido")
        return JsonResponse("Fallido al editar", safe = False)

    elif request.method == 'DELETE':
        company = Company.objects.get(NIT = NIT)
        company.delete()
        return JsonResponse("Eliminado satisfactoriamente", safe = False)
    
    else:
        return JsonResponse("Opción erronea", safe = False)