from django.urls import path
from .views import DietPlanView

urlpatterns = [
    path('diet-plan/', DietPlanView.as_view(), name='diet-plan'),  # API URL for form submission
]
