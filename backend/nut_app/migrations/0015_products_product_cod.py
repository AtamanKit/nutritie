# Generated by Django 4.0.1 on 2022-02-02 10:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nut_app', '0014_products_administration_products_brand_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='products',
            name='product_cod',
            field=models.CharField(max_length=6, null=True, unique=True),
        ),
    ]