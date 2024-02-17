from rest_framework.serializers import ModelSerializer

from core.user.models import User

from application.models import ( Application )

class ApplicationSerializer(ModelSerializer):
    class Meta:
        model = Application
        fields = [
            'id',
            'name',
            'description',
            'created_at',
            'updated_at',
        ]