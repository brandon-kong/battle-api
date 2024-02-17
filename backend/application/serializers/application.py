from rest_framework.serializers import ModelSerializer

from core.user.models import User

from application.models import ( Application )

from .endpoint import EndpointSerializer

class ApplicationSerializer(ModelSerializer):
    endpoints = EndpointSerializer(many=True)
    class Meta:
        model = Application
        fields = [
            'id',
            'name',
            'description',
            'created_at',
            'updated_at',

            'base_url',
            'endpoints',
        ]

    