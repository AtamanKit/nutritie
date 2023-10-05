# Generated by Django 4.0.1 on 2022-04-18 07:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=32)),
                ('last_name', models.CharField(max_length=32)),
                ('telephone', models.CharField(max_length=32)),
                ('email', models.EmailField(blank=True, max_length=254)),
                ('country', models.CharField(max_length=32)),
                ('region', models.CharField(max_length=32)),
                ('city', models.CharField(max_length=32)),
                ('address', models.CharField(blank=True, max_length=255)),
                ('products', models.JSONField()),
                ('watched', models.BooleanField(default=False)),
                ('delivered', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='UserSocial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('social_id', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('first_name', models.CharField(max_length=32)),
                ('last_name', models.CharField(max_length=32)),
                ('social_from', models.CharField(max_length=32)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                ('date_joined', models.DateTimeField(auto_now=True)),
            ],
        ),
    ]