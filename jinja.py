from django.conf import settings
from django.templatetags.static import static
from django.urls import reverse
from jinja2 import Environment

from importmap import Importmap
from tailwind import get_config
from tailwind.utils import is_path_absolute


def environment(**options):
    env = Environment(**options)
    env.globals.update(
        {
            "static": static,
            "url": reverse,
            "is_debug": settings.DEBUG,
            "tailwind": {
                "is_static_path": not is_path_absolute(get_config("TAILWIND_CSS_PATH")),
                "css_path": get_config("TAILWIND_CSS_PATH"),
            },
        }
    )
    env.globals.update(
        {
            "importmap": Importmap.json(
                development=settings.DEBUG, 
                extra_imports={
                    "vue": "https://ga.jspm.io/npm:vue@3.4.30/dist/vue.esm-browser.js",
                    "prelude/components/navigation-menu": static("prelude/components/navigation-menu.js"),
                    "prelude/components/aspect-ratio": static("prelude/components/aspect-ratio.js"),
                    "memedex/pages/signin-page": static("memedex/pages/signin-page.js"),
                }
            )
        }
    )

    return env

