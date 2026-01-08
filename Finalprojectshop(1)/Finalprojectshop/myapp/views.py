from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def dashboard_view(request):
    return render(request, 'index.html')
from django.http import JsonResponse

def product_list_api(request):
    # 這裡可以改為從資料庫讀取
    products = [
        {"id": 1, "name": "時尚托特包", "price": 1200, "image": "assets/img1.jpg"},
        {"id": 2, "name": "迷手水桶包", "price": 980, "image": "assets/img2.jpg"},
    ]
    return JsonResponse(products, safe=False)
import json
from django.http import JsonResponse
from .models import Order
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt # 暫時取消 CSRF 驗證方便測試
def create_order(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            # 建立訂單資料
            order = Order.objects.create(
                customer_name=data.get('name', '匿名客戶'),
                items=json.dumps(data.get('cart', [])), # 將購物車清單轉成字串
                total_price=data.get('total', 0)
            )
            return JsonResponse({"status": "success", "message": "訂單已儲存！", "order_id": order.id})
        except Exception as e:
            return JsonResponse({"status": "error", "message": str(e)}, status=400)
    return JsonResponse({"status": "failed"}, status=405)