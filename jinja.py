from glob import glob
from typing import TypedDict, Unpack

from django.conf import settings
from django.templatetags.static import static
from django.urls import reverse
from jinja2 import Environment

from importmap import Importmap
from tailwind import get_config
from tailwind.utils import is_path_absolute


class ImportArguments(TypedDict):
    under: str
    to: str


def import_all(**kwargs: Unpack[ImportArguments]):
    # return {}
    root_dir = settings.BASE_DIR
    source_dir: str = str(root_dir / kwargs['under'])
    source_files = glob(f"{source_dir}/**/*.js", recursive=True)

    importmap_dict = {}
    for source_file in source_files:
        source_module = source_file.split('static/')[-1]
        target_module = source_module.replace(source_dir, kwargs['to']).replace(".js", "")

        importmap_dict[target_module] = static(source_module)

    return importmap_dict


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
                    **import_all(
                        under="memedex/static/prelude",
                        to="prelude"
                    ),
                    **import_all(
                        under="core/static/memedex",
                        to="memedex"
                    ),
                }
            )
        }
    )

    return env

