from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from application.models import Application
from application.serializers.application import ApplicationSerializer

class ApplicationsUserView(APIView):
    """
    List all applications for a user
    """
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        applications = Application.objects.filter(user=request.user)
        serializer = ApplicationSerializer(applications, many=True)
        return Response(serializer.data)

class TestView(APIView):
    """
    Test view
    """
        
    def get(self, request):
        return Response({'message': 'Hello, world!'})