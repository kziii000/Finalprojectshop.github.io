from django.db import models

# Create your models here.
from django.db import models

class Order(models.Model):
    # 定義訂單欄位
    customer_name = models.CharField(max_length=100, verbose_name="客戶姓名")
    email = models.EmailField(verbose_name="電子郵件")
    items = models.TextField(verbose_name="訂單內容")  # 可以存放 JSON 格式的購物車字串
    total_price = models.IntegerField(verbose_name="總金額")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="下單時間")

    def __str__(self):
        return f"訂單 #{self.id} - {self.customer_name}"
        from django.db import models

class Order(models.Model):
    customer_name = models.CharField(max_length=100, verbose_name="客戶姓名")
    items = models.TextField(verbose_name="訂單內容") # 用來存 script.js 裡的產品字串
    total_price = models.IntegerField(verbose_name="總金額")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="下單時間")

    def __str__(self):
        return f"訂單 #{self.id} - {self.customer_name}"
