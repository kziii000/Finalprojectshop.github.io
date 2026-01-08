from django.contrib import admin
from django.urls import path, re_path
from django.views.static import serve
from django.conf import settings
import os

urlpatterns = [
    path('admin/', admin.site.urls),

    # 1. 處理首頁：當使用者訪問 http://127.0.0.1:8000/ 時，直接給他 static/index.html
    re_path(r'^$', serve, {
        'document_root': os.path.join(settings.BASE_DIR, 'myapp', 'static'),
        'path': 'index.html'
    }),

    # 2. 處理其他檔案：當 HTML 請求 style.css 或 script.js 時，去 static 資料夾找
    re_path(r'^(?P<path>.*)$', serve, {
        'document_root': os.path.join(settings.BASE_DIR, 'myapp', 'static')
    }),
]
# myproject/urls.py
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')), # 這一行會把 myapp 裡定義的所有路徑包含進來
]