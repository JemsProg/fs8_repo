# Current Task

## Task Title

Display Specific Product Selected By ID

---

## Goal

Create a backend API endpoint that returns one specific product based on the selected product ID.

The frontend will later use this endpoint for the product details page.

Example endpoint:

```txt
GET /products/1/

Expected result:

Return only the product with ID 1.
Context Files To Read First

Before making changes, read:

context/architecture-context.md
context/project-overview.md

Use these files to understand the current project structure, backend setup, and frontend/backend integration direction.

Task Scope

This task is backend-only.

Do not edit frontend files for this task.

Only create the backend API needed to display a specific product selected by ID.

Files To Check

Check these files before editing:

backend/base/models.py
backend/base/serializers.py

Use the existing Product model and existing ProductSerializer.

Do not create a new model.

Do not create a new serializer unless the current serializer is missing or broken.

Files To Edit

Edit only these files:

backend/base/views.py
backend/base/urls.py
Backend Model Requirement

Base the endpoint on the existing Product model inside:

backend/base/models.py

Do not rename or change any existing model fields.

The API should return product data from the existing database table.

Serializer Requirement

Use the existing serializer inside:

backend/base/serializers.py

Expected serializer:

ProductSerializer

The serializer should be used to convert one Product instance into JSON.

Views Requirement

Update:

backend/base/views.py

Create a new function-based DRF view.

Suggested function name:

product_detail

Expected behavior:

Accept a product ID from the URL.
Find the matching product in the database.
Serialize the selected product.
Return the selected product as JSON.
Return 404 Not Found if the product does not exist.
Only support GET request for now.

Recommended code:

from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .serializers import ProductSerializer


@api_view(["GET"])
def product_detail(request, pk):
    product = get_object_or_404(Product, id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)

Important:

Keep the existing product_list function.
Do not remove the current product list endpoint.
Do not add authentication for this task.
Do not change the Product model.
Do not change unrelated files.
URL Requirement

Update:

backend/base/urls.py

Add a new route for getting a single product by ID.

Existing route:

GET /products/

New route:

GET /products/<id>/

Recommended code:

from django.urls import path
from . import views

urlpatterns = [
    path("products/", views.product_list, name="products"),
    path("products/<int:pk>/", views.product_detail, name="product-detail"),
]

Important:

Keep the existing product list route.
Add the product detail route.
Do not add /api/ prefix unless the project routing is intentionally changed.
Use <int:pk> because the product ID should be numeric.
Expected API Result

Request:

GET /products/1/

Expected successful response:

{
  "id": 1,
  "product_name": "Sample Product",
  "product_price": "100.00",
  "brand": "Sample Brand",
  "description": "Sample description",
  "countInStock": 10,
  "image": "/images/product_images/sample.jpg",
  "createdAt": "2026-05-23T00:00:00Z"
}

The exact fields may depend on the current Product model and ProductSerializer.

Error Behavior

If the product ID does not exist:

GET /products/999/

Expected response:

404 Not Found

Use get_object_or_404 to handle missing products.

Commands To Run

From the backend folder:

python manage.py runserver

This task should not require migrations.

Manual Testing

Test the product list endpoint first:

http://127.0.0.1:8000/products/

Then copy an existing product ID and test:

http://127.0.0.1:8000/products/1/

Test a product ID that does not exist:

http://127.0.0.1:8000/products/999/
Success Criteria

This task is complete when:

GET /products/ still returns all products.
GET /products/<id>/ returns one selected product.
Invalid product IDs return 404 Not Found.
The endpoint uses the existing Product model.
The endpoint uses the existing ProductSerializer.
No frontend files are changed.
No unnecessary folders are added.
No unnecessary models are added.
No unnecessary serializers are added.
No unnecessary libraries are installed.
```
