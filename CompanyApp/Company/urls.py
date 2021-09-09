from django.conf.urls import url
#from django.urls import path
from Company import views

'''
Descripción: Manejo de las URLs asociadas a Company
'''

# Nombre de la aplicación

app_name = "Company"

#URLs asociadas
urlpatterns = [
    url(r'^company/$', views.CompanyApi),
    url(r'^company/([0-9]+)$', views.CompanyApi)
]