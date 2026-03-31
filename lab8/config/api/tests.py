from django.test import TestCase

from .models import Category, Product


class ApiViewTests(TestCase):
    def setUp(self):
        self.category = Category.objects.create(name='Books')
        self.product = Product.objects.create(
            name='Django for Beginners',
            price=19.99,
            description='Introductory Django book',
            count=5,
            is_active=True,
            category=self.category,
        )

    def test_products_list_returns_data(self):
        response = self.client.get('/api/products/')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 1)
        self.assertEqual(response.json()[0]['name'], self.product.name)

    def test_product_detail_returns_404_for_missing_product(self):
        response = self.client.get('/api/products/9999/')

        self.assertEqual(response.status_code, 404)

    def test_category_detail_returns_404_for_missing_category(self):
        response = self.client.get('/api/categories/9999/')

        self.assertEqual(response.status_code, 404)

    def test_category_products_returns_category_products(self):
        response = self.client.get(f'/api/categories/{self.category.id}/products/')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(response.json()), 1)
        self.assertEqual(response.json()[0]['category'], self.category.id)

    def test_category_products_returns_404_for_missing_category(self):
        response = self.client.get('/api/categories/9999/products/')

        self.assertEqual(response.status_code, 404)
