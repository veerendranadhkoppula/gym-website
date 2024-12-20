from django.db import models

class DietPlan(models.Model):
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10)
    height = models.CharField(max_length=10)
    weight = models.CharField(max_length=10)
    activity_level = models.CharField(max_length=20)
    goal = models.CharField(max_length=20)
    specific_goal = models.CharField(max_length=100)
    medical_conditions = models.TextField(blank=True)
    nutritional_needs = models.TextField(blank=True)
    daily_diet = models.TextField(blank=True)
    eating_out_frequency = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Diet Plan - {self.age} {self.gender}"
