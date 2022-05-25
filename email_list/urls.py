from django.urls import path
from .views import EmailListView

urlpatterns = [
    path('api/email/', EmailListView.as_view(), name='email_list_view')
]
