import os

import markdown
from django.conf import settings
from django.http import Http404
from django.views.generic import TemplateView

from helper.parse_article import parse_article

ARTICLES_DIR = os.path.join(settings.BASE_DIR, "static", "markdown")


class ArticlesPageView(TemplateView):
    template_name = "list.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        articles = []
        for filename in os.listdir(ARTICLES_DIR):
            if filename.endswith(".md"):
                path = os.path.join(ARTICLES_DIR, filename)
                article = parse_article(path)
                articles.append(article)

        articles = sorted(articles, key=lambda x: x["date"], reverse=True)

        context["articles"] = articles
        context["seo"] = {
            "title": "Yuefii - Articles",
            "description": "Website pribadi untuk berbagi ilmu, pengalaman, dan cerita menarik seputar coding, pemrograman, dan teknologi.",
            "keywords": "django, python, yuefii, muhamad mupid ahmadiawan, mupid, personal website, portfolio, backend engineer, backend developer, software engineer",
            "og_type": "website",
            "og_image": "https://yuefii.site/static/img/profile.png",
            "twitter_card": "summary_large_image",
        }
        context["about"] = {"username": "Yuefii"}
        return context


class ArticleDetailView(TemplateView):
    template_name = "detail.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        slug = kwargs.get("slug")
        file_path = os.path.join(ARTICLES_DIR, f"{slug}.md")

        if not os.path.exists(file_path):
            raise Http404("Artikel tidak ditemukan.")

        parsed = parse_article(file_path)
        html_content = markdown.markdown(
            parsed["body"], extensions=["fenced_code", "codehilite", "tables"]
        )
        context["title"] = parsed["title"]
        context["date"] = parsed["date"]
        context["content"] = html_content
        context["slug"] = slug
        context["seo"] = {
            "title": f"{parsed['title']} - Yuefii",
            "description": f"Artikel berjudul {parsed['title']} di blog Yuefii.",
            "keywords": f"{parsed['title']}, yuefii, blog, artikel",
        }
        return context
