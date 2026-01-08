from django.urls import path, re_path
from django.views.static import serve
from django.conf import settings
from . import views
import os

urlpatterns = [
    # 1. 處理首頁 (顯示 index.html)
    path('', views.dashboard_view, name='dashboard'),
    
    path('api/create-order/', views.create_order, name='create_order'),
    
    # 2. 處理 API 資料 (供前端 script.js 抓取商品)
    path('api/products/', views.product_list_api, name='product_api'),

    # 3. 處理靜態檔案 (style.css, script.js, 圖片等)
    # 修正後的這行會確保不會多出括號
    re_path(r'^(?P<path>.+\..+)$', serve, {
        'document_root': os.path.join(settings.BASE_DIR, 'myapp', 'static'),
    }),
]