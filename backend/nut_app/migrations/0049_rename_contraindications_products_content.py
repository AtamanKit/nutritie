# Generated by Django 4.0.1 on 2022-02-13 12:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('nut_app', '0048_remove_articlefeat_title_remedies_category'),
    ]

    operations = [
        migrations.RenameField(
            model_name='products',
            old_name='contraindications',
            new_name='content',
        ),
    ]
