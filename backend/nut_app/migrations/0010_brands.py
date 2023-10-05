# Generated by Django 4.0.1 on 2022-02-01 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nut_app', '0009_remedies_delete_remedies_feat'),
    ]

    operations = [
        migrations.CreateModel(
            name='Brands',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, unique=True)),
                ('link', models.CharField(max_length=255, unique=True)),
                ('image_desc', models.ImageField(upload_to='nut_app/media/logos')),
            ],
        ),
    ]
