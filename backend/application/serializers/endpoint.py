from rest_framework.serializers import ModelSerializer

from core.user.models import User

from application.models import ( Endpoint )

class EndpointSerializer(ModelSerializer):

    class Meta:
        model = Endpoint
        fields = [
            'id',

            'name',
            'description',
            'created_at',
            'updated_at',

            'relative_url',
            'request_type',
            'response',

            'requires_auth',

            'schema',
        ]