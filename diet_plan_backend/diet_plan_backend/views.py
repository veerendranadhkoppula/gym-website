# diet_plan_backend/views.py
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

# View to handle diet plan form submission
@csrf_exempt  # Disable CSRF validation for simplicity (for testing purposes)
def submit_diet_plan(request):
    if request.method == "POST":
        try:
            # Get JSON data from the request
            data = json.loads(request.body.decode('utf-8'))

            # Print received data (you can store it in the model later)
            print(data)

            # Return a success response
            return JsonResponse({"status": "success", "message": "Diet plan submitted successfully!"}, status=200)
        except json.JSONDecodeError:
            return JsonResponse({"status": "error", "message": "Invalid data format"}, status=400)

    return JsonResponse({"status": "error", "message": "Invalid request method"}, status=400)
