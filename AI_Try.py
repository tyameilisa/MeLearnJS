import pandas as pd
from pathlib import Path

data = [
    {"Name": "Alice", "Email": "alice@example.com", "Role": "Developer", "Status": "Active"},
    {"Name": "Bob",   "Email": "bob@example.com",   "Role": "Designer",  "Status": "Inactive"},
    {"Name": "Clara", "Email": "clara@example.com", "Role": "PM",        "Status": "Active"},
]

df = pd.DataFrame(data)

css = """
<style>
  body{font-family:Inter, system-ui, sans-serif;padding:24px;background:#f6f7fb}
  .card{max-width:900px;margin:0 auto;background:#fff;border-radius:8px;
        box-shadow:0 6px 18px rgba(20,30,60,0.08);overflow:hidden}
  table{width:100%;border-collapse:collapse}
  thead{background:linear-gradient(90deg,#4b6bfb,#7cc3ff);color:#fff}
  thead th{padding:12px 16px;text-align:left}
  tbody td{padding:12px 16px;border-top:1px solid #eef2ff;color:#0f172a}
  tbody tr:nth-child(even){background:#fbfdff}
  tbody tr:hover{background:#f0f6ff}
  .small{font-size:13px;color:#6b7280}
  @media (max-width:640px){.card{overflow-x:auto}}
</style>
"""

html_table = df.to_html(index=False, classes="my-table", escape=True)
html = f"<!doctype html><html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'>{css}</head><body><div class='card'>{html_table}</div></body></html>"

out = Path("examples/table.html")
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(html, encoding="utf-8")
print(f"Wrote {out.resolve()}. Open in a browser.")

import pandas as pd
import matplotlib.pyplot as plt
from pathlib import Path

df = pd.DataFrame([
    {"Name":"Alice","Email":"alice@example.com","Role":"Developer"},
    {"Name":"Bob","Email":"bob@example.com","Role":"Designer"},
    {"Name":"Clara","Email":"clara@example.com","Role":"PM"}
])

fig, ax = plt.subplots(figsize=(8, 2 + 0.5*len(df)))
ax.axis('off')
tbl = ax.table(cellText=df.values, colLabels=df.columns, cellLoc='left', loc='center')
tbl.auto_set_font_size(False)
tbl.set_fontsize(10)
tbl.scale(1, 1.5)
out = Path("examples/table.png")
out.parent.mkdir(parents=True, exist_ok=True)
plt.savefig(out, bbox_inches='tight', dpi=150)
print(f"Wrote {out.resolve()}")
