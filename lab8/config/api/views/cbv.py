from rest_framework.views import APIView
from api.models import Product
from rest_framework import status
from rest_framework.response import Response
from api.serializers import ProductSerializer

class ProductListAPIView(APIView):
    def get(self, request):
        products = Product.objects.all()
        return Response(ProductSerializer(products,many = True).data)
    def post(self,request):
        serializer = ProductSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
class ProductDetailAPIView(APIView):
    def get_object(self,product_id):
        try:
            return Product.objects.get(id = product_id)

        except Product.DoesNotExist:
            return None
        
    def get(self,request,product_id):
        product = self.get_object(product_id)
        if not product:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(ProductSerializer(product).data)
    
    def put(self, request, product_id):
        product = self.get_object(product_id)
        if not product:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = ProductSerializer(product, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, product_id):
        product = self.get_object(product_id)
        if not product:
            return Response(status=status.HTTP_404_NOT_FOUND)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        
