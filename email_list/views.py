from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from .serializers import EmailListSerializers


class EmailListView(APIView):
    permission_classes = [AllowAny, ]

    def post(self, request, *args, **kwargs):
        serializer = EmailListSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response('Success!')
        else:
            return Response('Email already exists')
