from django.views.generic import TemplateView

class HomePageView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        seo_data = {
            'title': 'Yuefii - Muhamad Mupid Ahmadiawan',
            'description': 'Website pribadi untuk berbagi ilmu, pengalaman, dan cerita menarik seputar coding, pemrograman, dan teknologi.',
            'keywords': "django, python, yuefii, muhamad mupid ahmadiawan, mupid, personal website, portfolio, backend engineer, backend developer, software engineer",
            'og_type': "website",
            'og_image': "https://yuefii.site/static/img/profile.png",
            'twitter_card': "summary_large_image",
        }

        about_data = {
            'username': "Yuefii",
        }

        context['seo'] = seo_data
        context['about'] = about_data
        context['request'] = self.request

        return context
