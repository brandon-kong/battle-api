# Generated by Django 5.0.1 on 2024-02-17 00:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('application', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='endpoint',
            name='relative_url',
            field=models.CharField(max_length=100),
        ),
    ]