import html
import json
import re
import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DEFAULT_TEMPLATE = BASE_DIR / "pokemon-move-verification-template.json"
DEFAULT_HTML = BASE_DIR / "pokemon-move-verification-memo.html"


def read_template(path):
    data = json.loads(path.read_text(encoding="utf-8"))
    if not data.get("fields"):
        raise ValueError("template must contain fields")
    return data


def attrs(parts):
    return " ".join(part for part in parts if part)


def field_html(field):
    field_id = field["id"]
    label = html.escape(field["label"])
    class_name = field.get("className", "")
    outer_class = f' class="{html.escape(class_name)}"' if class_name else ""
    placeholder = html.escape(field.get("placeholder", ""), quote=True)
    inputmode = field.get("inputmode")
    inputmode_attr = f'inputmode="{html.escape(inputmode, quote=True)}"' if inputmode else ""

    if field.get("type") == "textarea":
        return f'<div{outer_class}><label>{label}</label><textarea id="{html.escape(field_id, quote=True)}" placeholder="{placeholder}"></textarea></div>'

    if field.get("type") == "choice":
        options = field.get("options", [])
        default_value = field.get("defaultValue", options[0] if options else "")
        buttons = "".join(
            f'<button class="choice{ " active" if option == default_value else "" }" data-v="{html.escape(option, quote=True)}">{html.escape(option)}</button>'
            for option in options
        )
        return f'<div{outer_class}><label>{label}</label><div class="choices" id="{html.escape(field_id, quote=True)}Choices">{buttons}</div><input type="hidden" id="{html.escape(field_id, quote=True)}" value="{html.escape(default_value, quote=True)}"></div>'

    attr_text = attrs([f'id="{html.escape(field_id, quote=True)}"', inputmode_attr, f'placeholder="{placeholder}"'])
    return f'<div{outer_class}><label>{label}</label><input {attr_text}></div>'


def build_grid(template):
    inner = "\n".join(field_html(field) for field in template["fields"])
    return '<div class="grid">\n<!-- memo-template:start -->\n' + inner + '\n<!-- memo-template:end -->\n</div>'


def js_literal(value):
    return json.dumps(value, ensure_ascii=False)


def update_html(html_text, template):
    fields = template["fields"]
    defs = [[field["id"], field["label"]] for field in fields]
    defaults = {field["id"]: field.get("defaultValue", "") for field in fields}

    html_text = re.sub(
        r'<div class="grid">.*?</div><div class="actions">',
        build_grid(template) + '<div class="actions">',
        html_text,
        count=1,
        flags=re.S,
    )

    html_text = re.sub(
        r'(<div class="actions">)(?!<button class="btn secondary" id="applyTemplate")',
        r'\1<button class="btn secondary" id="applyTemplate">&#12486;&#12531;&#12503;&#12524;&#12434;&#35501;&#12415;&#36796;&#12416;</button>',
        html_text,
        count=1,
    )

    html_text = re.sub(
        r"const defs=\[.*?\];(?:const TEMPLATE_DEFAULTS=\{.*?\};)?const \$=id=>document\.getElementById\(id\);",
        f"const defs={js_literal(defs)};const TEMPLATE_DEFAULTS={js_literal(defaults)};const $=id=>document.getElementById(id);",
        html_text,
        count=1,
        flags=re.S,
    )

    html_text = re.sub(
        r"function setData\(o=\{\}\)\{.*?\}function damageSummary",
        "function setData(o={}){o=migrate(o);const src=Object.keys(o).length?o:TEMPLATE_DEFAULTS;defs.forEach(([id])=>$(id).value=src[id]??(id==='critical'?'??':''));syncCritical();update();saveForm()}function damageSummary",
        html_text,
        count=1,
        flags=re.S,
    )

    if "$('applyTemplate').onclick" not in html_text:
        html_text = html_text.replace(
            "$('copyCurrent').onclick=async()=>",
            "$('applyTemplate').onclick=()=>{editing=null;setData(TEMPLATE_DEFAULTS);msg('Template loaded.')};$('copyCurrent').onclick=async()=>",
            1,
        )

    html_text = html_text.replace(
        "setData(load(FK,{}));render()",
        "setData(load(FK,TEMPLATE_DEFAULTS));render()",
        1,
    )

    return html_text


def main():
    template_path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_TEMPLATE
    html_path = Path(sys.argv[2]) if len(sys.argv) > 2 else DEFAULT_HTML
    template = read_template(template_path)
    html_text = html_path.read_text(encoding="utf-8")
    updated = update_html(html_text, template)
    html_path.write_text(updated, encoding="utf-8")
    print(f"updated: {html_path}")
    print(f"template: {template_path}")


if __name__ == "__main__":
    main()
