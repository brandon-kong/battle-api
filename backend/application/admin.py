from django.contrib import admin

# Register your models here.

from .models import Application, Endpoint

admin.site.register(Application)
admin.site.register(Endpoint)