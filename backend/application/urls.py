from django.urls import path

from .views import ApplicationsUserView

urlpatterns = [
    path('', ApplicationsUserView.as_view(), name='applications'),
]