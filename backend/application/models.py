from django.db import models

from core.user.models import User

REQUEST_TYPE = (
    ('GET', 'GET'),
    ('POST', 'POST'),
    ('PUT', 'PUT'),
    ('PATCH', 'PATCH'),
    ('DELETE', 'DELETE'),
)

# An app/project 
class Application(models.Model):
    id = models.AutoField(primary_key=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='applications')

    name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    base_url = models.URLField()


    def __str__(self):
        return self.name
    
class Endpoint(models.Model):
    id = models.AutoField(primary_key=True)

    application = models.ForeignKey(Application, on_delete=models.CASCADE, related_name='endpoints')
    name = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    relative_url = models.CharField(max_length=100)
    request_type = models.CharField(max_length=10, choices=REQUEST_TYPE, default='GET')
    response = models.TextField(blank=True)

    requires_auth = models.BooleanField(default=False)

    schema = models.TextField(blank=True) # JSON schema

    def __str__(self):
        return self.name