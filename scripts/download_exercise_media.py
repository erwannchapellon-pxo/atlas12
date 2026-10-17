#!/usr/bin/env python3
"""Download source art from openly licensed Workout Guide for Github Pages deploy.
The ZIP contains this script and a catalog; 58 files are downloaded on GitHub's runner.
"""
import json,time,urllib.request,xml.etree.ElementTree as ET
from pathlib import Path

ROOT=Path(__file__).resolve().parent.parent
entries=json.loads((ROOT/'assets'/'exercise_sources.json').read_text(encoding='utf-8'))
output=ROOT/'assets'/'library'
output.mkdir(parents=True, exist_ok=True)
base='https://raw.githubusercontent.com/bryllim/workout-guide/main/packages/workout-guide/assets/'
backup='https://cdn.jsdelivr.net/npm/@bryllim/workout-guide@1.0.0/assets/'
failures=[]
for exercise, info in entries.items():
    for phase,frame in [(0,1),(1,3)]:
        target=output/f'{exercise}-{phase}.svg'
        if target.exists() and target.stat().st_size>200:
            continue
        sources=[f'{base}{info["slug"]}/frame-{frame}.svg',f'{backup}{info["slug"]}/frame-{frame}.svg']
        for url in sources:
            try:
                req=urllib.request.Request(url, headers={'User-Agent':'ATLAS12-Pages-asset-fetcher/1.3'})
                with urllib.request.urlopen(req,timeout=25) as res: data=res.read()
                if len(data)<200 or len(data)>4_000_000:raise ValueError('Unexpected image file size')
                svg=ET.fromstring(data)
                if not svg.tag.endswith('svg'):raise ValueError('Not SVG')
                # Only the project's licensed visual content; no generation or modification.
                target.write_bytes(data)
                print(f'OK {target.relative_to(ROOT)} ({len(data)} bytes)')
                break
            except Exception as error:
                print(f'Retry {url}: {error}')
                time.sleep(.6)
        else:failures.append(f'{exercise} phase {phase}')
if failures:
    raise SystemExit('Image download FAILED: '+', '.join(failures))
print(f'Complete: {len(entries)*2} real third-party original frames downloaded and validated.')
