import os
import yaml


def parse_article(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    meta = {}
    body = content

    if content.startswith("---"):
        parts = content.split("---", 2)
        if len(parts) >= 3:
            _, meta_str, body = parts
            meta = yaml.safe_load(meta_str)

    return {
        "slug": os.path.splitext(os.path.basename(file_path))[0],
        "title": meta.get(
            "title", os.path.basename(file_path).replace("-", " ").title()
        ),
        "date": meta.get("date", ""),
        "preview": body.strip().split("\n")[0],
        "body": body,
    }
