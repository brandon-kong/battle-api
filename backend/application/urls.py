from django.urls import path

from .views import ApplicationsUserView, TestView

urlpatterns = [
    path('', ApplicationsUserView.as_view(), name='applications'),
    path('test/', TestView.as_view(), name='test'),
]