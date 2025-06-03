from django.views.generic import TemplateView
from django.conf import settings
from helper.parse_article import parse_article
from apps.articles.views import ARTICLES_DIR
import os

ARTICLES_DIR = os.path.join(settings.BASE_DIR, "markdown", "articles")


class HomePageView(TemplateView):
    template_name = "index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        seo_data = {
            "title": "Yuefii - Muhamad Mupid Ahmadiawan",
            "description": "Website pribadi untuk berbagi ilmu, pengalaman, dan cerita menarik seputar coding, pemrograman, dan teknologi.",
            "keywords": "django, python, yuefii, muhamad mupid ahmadiawan, mupid, personal website, portfolio, backend engineer, backend developer, software engineer",
            "og_type": "website",
            "og_image": "https://yuefii.site/static/img/profile.png",
            "twitter_card": "summary_large_image",
        }

        about_data = {
            "username": "Yuefii",
        }

        articles = []
        for filename in os.listdir(ARTICLES_DIR):
            if filename.endswith(".md"):
                path = os.path.join(ARTICLES_DIR, filename)
                article = parse_article(path)
                articles.append(article)
        articles = sorted(articles, key=lambda x: x["date"], reverse=True)

        context["articles"] = articles
        context["seo"] = seo_data
        context["about"] = about_data
        context["request"] = self.request

        return context
