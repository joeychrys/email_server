from rest_framework import serializers
from .models import EmailList


class EmailListSerializers(serializers.ModelSerializer):
    class Meta:
        model = EmailList
        fields = [
            'address',
        ]
