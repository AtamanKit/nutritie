# Generated by Django 4.0.1 on 2022-02-02 10:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nut_app', '0019_alter_products_administration_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='image_desc',
            field=models.ImageField(blank=True, null=True, upload_to='nut_app/media/products'),
        ),
    ]
