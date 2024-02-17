from rest_framework.views import APIView
from rest_framework.response import Response

from core.user.serializers.register import UserRegisterSerializer

class UserCreateView(APIView):
    """
    Create/register a user with:
    - email
    - first name
    - last name 
    - password
    """
    serializer_class = UserRegisterSerializer

    def post(self, request):
        """
        Create user
        """

        serializer = UserRegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data)